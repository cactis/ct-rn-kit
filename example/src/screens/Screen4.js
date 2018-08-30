import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Grid, Col, Row, Header, Body, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center,  Photo, Icon as IIcon, Text, Label, Setting, Avatar, Circle, Card, H1, H2, H3, P, PillButton } from '../../..'
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

const Icon = (props) =>  <IIcon {...props} size={26} />

export class Screen4 extends Component {
  render() {
    // StatusBar.setBarStyle('light-content', true)
    return  <BaseScreen safeAreaDisabled={true} number='4'>
    {/* <Page backgroundColor='transparent'> */}
      {/* <StatusBar  backgroundColor={bg} /> */}
      <Header style={style.header}>
        <Row flex={0} style={{alignItems: 'flex-end'}}>
          <PillButton titleColor='white' theme='pill' style={style.pillButton} />
        </Row>
        <Row flex={1.8}>
          <Center>
            <Avatar size={100} style={{...style.avatar}}/>
            <Label style={{...human.titleObject, ...style.name}} />
            <Label style={{...style.name, ...style.smallName}} />
          </Center>
        </Row>
        <Row flex={1} style={style.icons}>
          <Icon name='twitter'/>
          <Icon name='phone' />
          <Icon name='facebook'/>
        </Row>
        <Row flex={0.8}>
          <Col>
            <Center>
              <Label style={{...style.name, ...style.smallName, fontSize: 12}}>Followers</Label>
              <Label style={{...style.name, ...style.number}}>3,345</Label>
            </Center>
          </Col>
          <Col>
            <Center>
              <Label style={{...style.name, ...style.smallName, fontSize: 12}}>Following</Label>
              <Label style={{...style.name, ...style.number}}>400</Label>
            </Center>
          </Col>
        </Row>
      </Header>
      <Body style={style.body}>
        <P/>
      </Body>
    </BaseScreen>
  {/* </Page> */}
  }
}

const bg = 'rgb(253,88,114)'
const style = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    alignItems: 'center',
  },
  header: {
    backgroundColor: bg,
    paddingTop: Platform.OS == 'ios' ? 30 : 0
  },
  name: {
    color: 'white',
    fontSize: 24,
    padding: 0,
    // lineHeight: 20,
    fontWeight: '800'},
    smallName: {
      fontSize: 16,
      fontWeight: '200'
    },
    avatar: {
      borderWidth: 3,
      borderColor: 'white',
      marginBottom: 20
    },
    pillButton: {
      backgroundColor: bg,
      // color: 'white',
      margin: 16
    },
    body: {
      backgroundColor: 'white',
      padding: 20,
    },
    number: {
      fontSize: 24
    }
  })
