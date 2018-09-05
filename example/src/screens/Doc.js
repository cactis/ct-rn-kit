import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Stars, Grid, Col, Row, Div, Header, Body, Mid, Block as CTBlock, Footer, Screen, Page, Square, Padding,  View, SafeArea, Scroll, Center, Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, Head6, Head7, Head8, Head9, P, Button, List, Library, Image, Space, Const, Time, Name as CTName, ImageBackground, Texts, Names, Author, IconLabel, RowLine } from '../../..'

import * as components from '../../..'

import { BaseScreen } from './index'

const styles = Setting.styles

export class DocScreen extends Component {
  render() {
    let size = 50
    return <BaseScreen scrollable={true} safeAreaDisabled={false}>
      <Unit component='Head1' children='This is Head1' />
      <Unit component='Head2' />
      <Unit component='Head9' />
      <Unit component='IconLabel' />
      <Unit component='Stars' value={4.5} />
      <Unit component='Avatar' />
      <Unit component='Names' color='#333' themes={['Head3', 'Head6']} />
      <Unit component='Icon' iconSet='Octicons' name='comment' size={size} />
      <Unit component='Image' size={size} />
    </BaseScreen>
  }
}

const Colp = (props) => <Col padding={10} style={{justifyContent: 'center'}} {...props} />
const Unit = (props) =>  {
  let TagName = components[props.component]
  let {component, ..._props} = props
  return <RowLine
    style={{
      borderWidth: 1,
      borderColor: '#D7D0D0',
      margin: 5,
      height: 100,
      justifyContent: 'space-between'
    }}>
    <Colp flex={3}><TagName {..._props} /></Colp>
    <Colp flex={1}>
      <Label theme='Head4' style={{textAlign: 'right', fontSize: 13}}>{component}</Label>
    </Colp>
  </RowLine>
}
