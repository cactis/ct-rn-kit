export * from './Screen1';
export * from './Screen2';
export * from './Screen3';
export * from './Screen4';
export * from './Screen5';
export * from './Screen6';


import React, { PureComponent as Component } from 'react'
import { Grid, Col, Row, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Setting, Avatar, Text, Card, H1, H2, H3, P } from '../../..'

let styles = Setting.styles

export class BaseScreen extends Component {
  render() {
    let {
      safeAreaDisabled = true,
      scrollable = false
    } = this.props
    return <Screen scrollable={scrollable} safeAreaDisabled={safeAreaDisabled} {...this.props}>
      {this.props.children}
      <View style={{backgroundColor: 'rgba(255,255,255,.67)', padding: 3, paddingHorizontal: 10, borderRadius: 30, position: 'absolute', borderWidth: 0.5, right: 10, bottom: 5, zIndex: 10000}}>
      <Text style={{color: '#333', fontSize: 10}} >#CT-tutorial {this.props.number}</Text>
    </View>
    </Screen>
  }
}
