export * from './Screen1';
export * from './Screen2';
export * from './Screen3';


import React, { PureComponent as Component } from 'react'
import { Grid, Col, Row, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Setting, Avatar, Text, Card, H1, H2, H3, P } from '../../..'

let styles = Setting.styles

export class BaseScreen extends Component {
  render() {
    return <Screen safeAreaDisabled={true} {...this.props}>
      <Text style={{color: 'rgba(154,141,141,.86)', padding: 3, fontSize: 14, position: 'absolute', right: 30, bottom: 0, zIndex: 1000}}>#CT-tutorial {this.props.number}</Text>{this.props.children}
    </Screen>
  }
}
