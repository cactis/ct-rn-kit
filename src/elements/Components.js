import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

// import { View } from './Layouts'

export class Space extends Component {
  render() {
    let { size = 4} = this.props
    return <View padding={size / 2} {...this.props} />
  }
}

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
      // columnWrapperStyle={{justifyContent: 'space-between'}}
      // contentContainerStyle={{padding: GUTTER}}
      // ItemSeparatorComponent={() => <GCView height={GUTTER}/>}
      {...this.props}
    />
  }
}
