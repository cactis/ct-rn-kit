import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Grid, Col, Row, Header, Body, Mid, Block, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Icon as IIcon, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, Head6, Head7, P, Button, List, Library, Image, Space, Const, Time, Name } from '../../..'
import { BaseScreen } from './index'

import { material, materialDense } from 'react-native-typography'
import { human, systemWeights } from "react-native-typography";

const styles = Setting.styles

const Icon = (props) =>  <IIcon {...props} size={props.size || 26} color={props.color || 'white'} />

export class Screen4 extends Component {
  state = {
    images: Library.sampleImages(4)
  }
  render() {
    console.log(this.state.images, 'images')
    return  <BaseScreen scrollable={true}  safeAreaDisabled={true} number='4' backgroundColor='rgba(#F1EFF6,.32)'>
      <Header flexGrow={1} style={style.header}>
        <Row flex={0} style={{alignItems: 'flex-end'}}>
          <Button titleColor='white' backgroundColor='transparent' title='Follow' theme='pill' style={style.follow} />
        </Row>
        <Row>
          <Center>
            <Avatar size={100} style={{...style.avatar}}/>
            <Name theme='Head3' color='white' />
            <Name theme='Head7' color='white' />
          </Center>
        </Row>
        <Row height={50} style={style.icons}>
          <Icon name='twitter'/>
          <Icon name='phone' />
          <Icon name='facebook'/>
        </Row>
        <Row height={80}>
          <Col>
            <Center>
              <Head6 color='white'>Followers</Head6>
              <Head2 color='white'>3,345</Head2>
            </Center>
          </Col>
          <Col>
            <Center>
              <Head6 color='white'>Following</Head6>
              <Head1 color='white'>400</Head1>
            </Center>
          </Col>
        </Row>
      </Header>
      <Mid style={{flexDirection: 'row', justifyContent: 'space-evenly', height: 80, alignItems: 'center'}}>
        <Button titleColor='white' title='Boards' theme='pill' backgroundColor={bg} style={style.tButtons} />
        <Button titleColor='black' title='Pins' theme='pill' style={style.tButtons} />
        <Button titleColor='black' title='Tried' theme='pill' style={style.tButtons} />
      </Mid>
      <Body height={240} style={style.body}>
        <Row flex={0} paddingVertical={10}>
          <Col>
            <Head3>Food & Movies</Head3>
            <Time/>
          </Col>
          <Col alignItems='flex-end'>
            <Icon iconSet='Entypo' color='white' backgroundColor={bg} size={14} />
          </Col>
        </Row>
        <Row>
          <Col justifyContent='center' alignItems='flex-end'>
            <Image style={{...style.listImage, ...style.bigImage}} />
          </Col>
          <Col flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
            <Image style={style.listImage} />
            <Image style={style.listImage} />
            <Image style={style.listImage} />
            <Image style={style.listImage} />
          </Col>
        </Row>
      </Body>
      <Space size={100}/>
    </BaseScreen>
  }
}

const bg = 'rgb(253,88,114)'
const style = StyleSheet.create({
  list: {
    flex: 1,
  },
  bigImage: {
    width: '99%',
    height: '99%',
  },
  listImage: {
    margin: '1.15%',
    width: '47.62%',
    height: '47.62%',
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
    height: 40,
    ...styles.shadow
  },
  avatar: {
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10
  },
  follow: {
    margin: 10
  },
  body: {
    padding: 10,
    paddingVertical: 0

  },
  number: {
    fontSize: 24
  }
})

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
