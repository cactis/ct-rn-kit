import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Grid, Col, Row, Header, Body, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center,  Photo, Icon as IIcon, Text, Label, Setting, Avatar, Circle, Card, H1, H2, H3, P, Button, List, Library, Image, Space } from '../../..'
import { BaseScreen } from './index'

import { material, materialDense } from 'react-native-typography'
import { human, systemWeights } from "react-native-typography";

const styles = Setting.styles



const Icon = (props) =>  <IIcon {...props} size={26} />

export class Screen4 extends Component {
  state = {
    images: Library.sampleImages(4)
  }
  render() {
    console.log(this.state.images, 'images')
    return  <BaseScreen scrollable={true}  safeAreaDisabled={true} number='4'>
      <Header style={style.header}>
        <Row flex={0} style={{alignItems: 'flex-end'}}>
          <Button titleColor='white' title='Follow' theme='pill' style={style.follow} />
        </Row>
        <Row height={160}>
          <Center>
            <Avatar size='50%' style={{...style.avatar}}/>
            <Label style={{...human.titleObject, ...style.name}} />
            <Label style={{...style.name, ...style.smallName}} />
          </Center>
        </Row>
        <Row height={40} style={style.icons}>
          <Icon name='twitter'/>
          <Icon name='phone' />
          <Icon name='facebook'/>
        </Row>
        <Row height={80}>
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
      <Row style={{flexDirection: 'row', justifyContent: 'space-evenly', height: 70, alignItems: 'center'}}>
        <Button titleColor='white' title='Boards' theme='pill' backgroundColor={bg} style={style.tButtons} />
        <Button titleColor='black' title='Pins' theme='pill' style={style.tButtons} />
        <Button titleColor='black' title='Tried' theme='pill' style={style.tButtons} />
      </Row>
      <Body style={style.body}>
        <Col justifyContent='center' alignItems='flex-end'>
          <Image size='98%' style={style.listImage} />
        </Col>
        <Col flexDirection='row' flexWrap='wrap'>
          <Image size='47%' style={style.listImage} />
          <Image size='47%' style={style.listImage} />
          <Image size='47%' style={style.listImage} />
          <Image size='47%' style={style.listImage} />
        </Col>
        {/* <List style={style.list}
          horizontal
          ListHeaderComponent={() => <Image style={{borderRadius: 10, marginRight: 10}} size={140} />}
          // numColumns={2}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{padding: 4}}
          data={this.state.images}
          ItemSeparatorComponent={() => <Space /> }
          renderItem={({item}) => <Image style={style.listImage} />}
        /> */}
      </Body>
      <Space size={100}/>
    </BaseScreen>
  }
}

const bg = 'rgb(253,88,114)'
const style = StyleSheet.create({
  list: {
    flex: 1,
    // borderWidth: 1,
    // width: 200,
    // height: 200
    // backgroundColor: 'red'
  },
  listImage: {
    // width: 70,
    // height: 70,
    // borderWidth: 1,
    margin: 2,
    // borderWidth: 1,
    borderRadius: 10
  },
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
  tButtons: {
    height: 40
  },
  name: {
    color: 'white',
    fontSize: 24,
    padding: 0,
    // lineHeight: 20,
    fontWeight: '800'
  },
  smallName: {
    fontSize: 16,
    fontWeight: '200'
  },
  avatar: {
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10
  },
  follow: {
    // backgroundColor: bg,
    margin: 10
  },
  body: {
    // backgroundColor: '#dedede',
    height: 200,
    // padding: 20,
    padding: 10,
    paddingVertical: 0

  },
  number: {
    fontSize: 24
  }
})
