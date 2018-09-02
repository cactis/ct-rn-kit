import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from './Texts'
import { Div, Row, Grid, Col } from './Layouts'
import { Avatar, Icon } from './Images'

export const IconLabel = (props) => {
  return <TwoCols col1={props.icon} col2={props.label} {...props} />
}

const TwoCols = (props) => {
  let {
    height = 32
  } = props
  return <Div flex={0} {...props}>
    <Col flex={0}>
      {props.col1}
    </Col>
    {props.children}
    <Space size={height * 0.2} />
    <Col flex={0} justifyContent='center'>
      {props.col2}
    </Col>
  </Div>
}

export const Author = (props) => {
  let {
    height = 32,
    themes = ['Head6', 'Head8']
  } = props
  let avatar = <Avatar size={height} />
  let names = <Names color='white' themes={themes} />
  return <TwoCols {...props} col1={avatar} col2={names} />
}

export class Texts extends Component {
  render() {
    let {
      themes = ['Head5', 'Head7'],
      justifyContent = 'center',
      ...props
    } = this.props
    return <Div justifyContent={justifyContent}>
      <Name theme={themes[0]} {...props}/>
      <Name theme={themes[1]} {...props}/>
    </Div>
  }
}

export class Names extends Texts {}

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
