import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'
import { Grid, Col, Row, Header, Body, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center,  Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, H1, H2, H3, P, PillButton } from '../../..'
import { BaseScreen } from './index'

import { material, materialDense } from 'react-native-typography'
import { human, systemWeights } from "react-native-typography";

const styles = Setting.styles


// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

// export class Icon extends Component {
//   render() {
//     return <FontAwesomeIcon name='clock' size={50} />
//   }
// }


export class Screen4 extends Component {
  render() {
    return <SafeArea backgroundColor={bg}><BaseScreen number='4'>
      <Header style={style.header}>
        <Row flex={0} style={{alignItems: 'flex-end'}}>
          <PillButton titleColor='white' style={style.pillButton} />
        </Row>
        <Row>
          <Center>
            <Icon />
            <Avatar size={120} style={{...style.avatar}}/>
            <Label style={{...human.titleObject, ...style.name}} />
            <Label style={{...style.name, ...style.smallName}} />
          </Center>
        </Row>
        <Row>
          <Col>
            <Center>

              <Label style={{...style.name, ...style.smallName}}>Followers</Label>
              <Label style={{...style.name, ...style.number}}>33</Label>
            </Center>
          </Col>
          <Col>
            <Center>
              <Label style={{...style.name, ...style.smallName}}>Following</Label>
              <Label style={{...style.name, ...style.number}}>400</Label>
            </Center>
          </Col>
        </Row>
      </Header>
      <Body style={style.body}></Body>
    </BaseScreen></SafeArea>
  }
}

const bg = 'rgb(253,88,114)'
const style = StyleSheet.create({
  header: { backgroundColor: bg },
  name: {color: 'white', fontSize: 25, padding: 0, lineHeight: 20, fontWeight: '500'},
  smallName: {fontSize: 14},
  avatar: {borderWidth: 3, borderColor: 'white', marginBottom: 20},
  pillButton: {
    backgroundColor: bg,
    color: 'white',
    borderRadius: 30,
    borderWidth: 1,
    padding: 0,
    paddingHorizontal: 20,
    borderColor: 'white',
    margin: 16

    // top: 200
  },
  body: {
    backgroundColor: 'white'
  },
  number: {
    fontSize: 30
  }
})
