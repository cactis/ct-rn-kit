import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

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

  fetchData = () => {

  }

  onLoad = () => {}

  _onScroll = () => {}


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
      // renderItem={({item}) => <CT.Card data={item} navigation={this.props.navigation} />}
      {...this.props}
    />
  }
}
