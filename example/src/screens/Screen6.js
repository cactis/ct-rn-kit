import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Stars, Grid, Col, Row, Div, Header, Body, Mid, Block as CTBlock, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, Head6, Head7, Head8, Head9, P, Button, List, Library, Image, Space, Const, Time, Name as CTName, ImageBackground, Texts, Names, Author, IconLabel, RowLine } from '../../..'
import { BaseScreen } from './index'

const styles = Setting.styles


export class Screen6 extends Component {
  render() {
    return <BaseScreen number={6}>
      <ImageBackground uri='https://picsum.photos/1000/1400/?image=1019'>
      {/* <ImageBackground> */}
      <Row><Space/></Row>
      <Row padding={20}>
        <Head1 color='white' numberOfLines={2} fontSize={42}>{"Out of \nthe Wild Ocean"}</Head1>
        <Row>
          <Stars value={4.5} size={18} />
        </Row>
        <RowLine height={100} justifyContent='space-evenly'>
          <Info key={1} text='2h' label='Tourtime' icon='clock-o' />
          <Info key={2} text='$10' label='Prie' icon='ios-pricetag' iconSet='Ionicons' />
          <Info key={3} text='4' label='Person' icon='md-people' iconSet='Ionicons' />
          <Info key={4} text='15h' label='Close' icon='bell-sleep' iconSet='MaterialCommunityIcons' />
        </RowLine>
        <Row justifyContent='flex-end' marginBottom={20}>
          <Button theme='pill' backgroundColor='rgba(139,179,215,.4)' color='white' title='See Details' />
        </Row>
      </Row>
    </ImageBackground>
  </BaseScreen>
}
}

const Info = (props) => {
  return <Div alignItems='center'>
    <Head4 color='white' style={{textAlign: 'center'}}>{props.text}</Head4>
    <IconLabel padding={1}
      icon={<Icon name={props.icon} color='white' size={12} {...props}/>}
      label={<Label theme='Head8' color='white'>{props.label}</Label>}
    />
  </Div>
}
