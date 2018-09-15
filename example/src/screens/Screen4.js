import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'
import { Grid, Col, Row, Header, Body, Mid, Block, Footer, Screen, Page, Square, Padding,  View, SafeArea, Scroll, Center, Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, P, Button, List, Library, Image, Space, Const } from '../../..'
import { BaseScreen } from './index'

const styles = Setting.styles

import { material, materialDense } from 'react-native-typography'
import { human, systemWeights } from "react-native-typography";


const TheIcon = (props) =>  <Icon {...props} size={props.size || 26} color={props.color || 'white'} />

export class Screen4 extends Component {
  state = {
    // images: Library.sampleImages(4)
  }
  render() {
    // console.log(this.state.images, 'images')
    return  <BaseScreen scrollable={true}  safeAreaDisabled={true} number='4' backgroundColor='rgba(#F1EFF6,.32)'>
      <Header flexGrow={1} style={style.header}>
        <Row flex={0} style={{alignItems: 'flex-end'}}>
          <Button titleColor='white' backgroundColor='transparent' title='Follow' theme='pill' style={style.follow} />
        </Row>
        <Row flex={0}>
          <Center padding={20}>
            <Avatar size={80} style={{...style.avatar}}/>
            <Label theme='H3' color='white' />
            <Label theme='H7' color='white' />
          </Center>
        </Row>
        <Row height={50} style={style.icons}>
          <TheIcon name='twitter'/>
          <TheIcon name='phone' />
          <TheIcon name='facebook'/>
        </Row>
        <Row height={80}>
          <Col>
            <Center>
              <Label theme='H8' color='white'>Followers</Label>
              <Label theme='H2' color='white'>3,345</Label>
            </Center>
          </Col>
          <Col>
            <Center>
              <Label theme='H8' color='white'>Following</Label>
              <Label theme='H3' color='white'>400</Label>
            </Center>
          </Col>
        </Row>
      </Header>
      <Mid style={{flexDirection: 'row', justifyContent: 'space-evenly', height: 80, alignItems: 'center'}}>
        <Button titleColor='white' title='Boards' theme='pill' backgroundColor={bg} style={style.tButtons} />
        <Button titleColor='black' title='Pins' theme='pill' style={style.tButtons} />
        <Button titleColor='black' title='Tried' theme='pill' style={style.tButtons} />
      </Mid>
      <Body style={style.body}>
        <Section style={style} title='Food & Movies' subTitle='3.hours.ago' />
        <Section style={style} title='Tennis & Streetball' subTitle='5.hours.ago'/>
      </Body>
      <Space size={100}/>
    </BaseScreen>
  }
}

const Section = (props) =>  <Block height={220} marginTop={10}><Row flex={0} paddingVertical={10}>
  <Col>
    <Label theme='H5'>{props.title}</Label>
    <Label theme='H8'>{props.subTitle}</Label>
  </Col>
  <Col flex={0} alignItems='flex-end'>
    <TheIcon iconSet='Entypo' color='white' backgroundColor={bg} size={14} />
  </Col>
</Row>
<Row>
  <Col justifyContent='center' alignItems='flex-end'>
    <Image style={{...props.style.listImage, ...props.style.bigImage}} />
  </Col>
  <Col flexDirection='row' flexWrap='wrap'>
    <Image style={props.style.listImage} />
    <Image style={props.style.listImage} />
    <Image style={props.style.listImage} />
    <Image style={props.style.listImage} />
  </Col>
</Row></Block>

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
    margin: '1.2%',
    width: '44.7%',
    // height: '47.62%',
    aspectRatio: 1,
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
    paddingTop: Const.iOS ? 30 : 0
  },
  tButtons: {
    height: 40,
    ...styles.shadow
  },
  avatar: {
    borderWidth: 1,
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
