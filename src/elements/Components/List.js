import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

import Api from '../../Api'

export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      url: props.url,
      page: 0,
      isRefreshing: false
    }
    this.onLoad = this.props.onLoad || this.onLoad
    let { data } = this.props
    this.setState({data})
    this.fetchData()
  }

  _reload = (onSuccess) => {
    this.setState({data: [], page: 0, isRefreshing: true}, () => {
    })
  }

  fetchData = async (onSuccess) => {
    let url = this.state.url
    if (!url) return
    let { meta } = this.state
    let page = this.state.page + 1
    this.state.page = page

    let urls = url.split('?')

    let {keyword} = this.state
    let keywordStr = ''
    if (keyword) {
      keywordStr = `keyword=${keyword}`
    }

    if (urls.length > 1) {
      url = `${urls[0]}/page/${page}?${urls[1]}`
      if (keyword) url = `${url}&${keywordStr}`
    } else {
      url = `${urls[0]}/page/${page}`
      if (keyword) url = `${url}?${keywordStr}`
    }

    let json = await Api.get(url)
    let data = json.data ? json.data : json
    log(data, 'data')
    let collection = page === 1 ? data : [...this.state.data, ...data]

    let rest = []
    if (page == 1) {
      rest = this.onLoad(collection) || collection
    } else {
      rest = collection
    }

    this.setState({
      data: rest,
      meta: json.meta,
      isRefreshing: false
    }, () => {
      // log(this.state.data, 'this.state.data')
    })
    if (onSuccess && typeof(onSuccess) === 'function') {onSuccess(this.state.data)}
  }
  onLoad = () => {}

  _onScroll = () => {}

  renderItem = ({item}) => <ListItem data={item} navigation={this.props.navigation} />

  render() {

    return <FlatList ref={(c) => this.flatList = c}
      data={this.state.data}
      onScroll={this._onScroll}
      refreshing={this.state.isRefreshing}
      onRefresh={this._reload}
      onEndReached={this.fetchData}
      onEndThreshold={500}
      keyExtractor={(item, index) => String(index)}
      // nestedScrollEnabled
      pagingEnabled
      // onPanResponderTerminationRequest={() => false}
      // ListHeaderComponent=<View />
      // ref={(c) => this.list = c}
      // url=''
      // horizontal
      // numColumns={2}
      // columnWrapperStyle={{justifyContent: 'space-between'}}
      // contentContainerStyle={{padding: 8}}
      // ItemSeparatorComponent={() => <CT.Spacee />}
      renderItem={this.props.renderItem || this.renderItem}
      {...this.props}
    />


  }
}

import { Cell } from '../Layouts/Cell'
class ListItem extends Component {
  render() {
    return <Cell />
  }
}
