import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Grid, Col, Row, Header, Body, Mid, Block as CTBlock, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, Head6, Head7, P, Button, List, Library, Image, Space, Const, Time, Name as CTName } from '../../..'
import { BaseScreen } from './index'

const styles = Setting.styles

const Name = (props) => <CTName {...props} color='white' />
const Block = (props) =>  <CTBlock {...props} padding={30}/>

const Author = (props) => <Row flex={0} height={60}>
  <Col flex={0}>
    <Avatar />
  </Col>
  <Space size={10} />
  <Col flex={0} justifyContent='center'>
    <Name theme='Head5' />
    <Name theme='Head7' />
  </Col>
</Row>

export class Screen5 extends Component {
  render() {
    return <BaseScreen scrollable={false} number='5'>
      <Block backgroundColor='rgba(240,22,19,.80)'>
        <Row paddingTop={30}>
          <Name theme='Head7'>BOOK</Name>
        </Row>
        <Row flex={4}>
          <Name theme='Head1' fontSize={32}/>
          <Name theme='Head7' fontSize={17}/>
        </Row>
        <Row>
          <Author />
        </Row>
      </Block>
      <Block backgroundColor='#373839'>
        <Row>
          <Author />
        </Row>
        <Row flex={3} justifyContent='flex-end'>
          <Row flex={0} height={100} flexDirection='row' alignItems='center'>
            <Icon iconSet='Octicons' name='comment' color='white' size={60} width={60} />
            <Label style={{position: 'absolute', textAlign: 'center', width: 60, color: '#FB6969', top: 32}} theme='Head6'>1,335</Label>
            <Label color='white' theme='Head6' style={{marginTop: -15, marginLeft: 10}}>Book Comments</Label>
          </Row>
        </Row>
      </Block>
    </BaseScreen>
  }
}
