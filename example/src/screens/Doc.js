import React from 'react'
import { StyleSheet, StatusBar, Platform, Text as RNText, View as RNView } from 'react-native'
import { Stars, Grid, Col, Row, Div, Header, Body, Mid, Block as CTBlock, Footer, Screen, Page, Square, Padding,  View, SafeArea, Scroll, Center, Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, Head6, Head7, Head8, Head9, P, Button, List, Library, Image, Space, Const, Time, Name as CTName, ImageBackground, FontList, Texts, Names, Author, IconLabel, RowLine } from 'ct-rn-kit'

import * as components from 'ct-rn-kit'

import { BaseScreen } from './index'

const styles = Setting.styles

export class DocScreen extends React.Component {

  render() {
    log(FontList, 'FontList')
    return <BaseScreen scrollable={true} safeAreaDisabled={false}>
      {
        Object.values(FontList).map((font, i) => <Unit key={randKey()} component='Text' style={{fontFamily: font}}>{font} 123456789 ABC abc</Unit>)
      }
      {/* <Unit component='Text' theme='H1' />
      <Unit component='Text' theme='H2' />
      <Unit component='Text' theme='H3' />
      <Unit component='Text' theme='H4' />
      <Unit component='Text' theme='H5' />
      <Unit component='Text' theme='H6' />
      <Unit component='Text' theme='H7' />
      <Unit component='Text' theme='H8' />
      <Unit component='Text' theme='H9' /> */}
    </BaseScreen>

  }
}

// const Colp = (props) => <Col padding={10} {...props} />
const Unit = (props) =>  {
  let TagName = components[props.component]
  let {component, ..._props} = props
  return <Row
    style={{
      borderWidth: 1,
      borderColor: '#D7D0D0',
      margin: 5,
      height: 100,
      justifyContent: 'space-between'
    }}>
    <Row backgroundColor='rgba(232,221,238,.74)' padding={2} layout='row' yAlign='center'>
      <components.Text theme='H6'>{`<${component}>`}</components.Text>
      <components.Text theme='H7'> {props.theme}</components.Text>
    </Row>
    <Row flex={2}><TagName {..._props} /></Row>
  </Row>
}


// export class DocScreen1 extends React.Component {
//   render() {
//     log(Object.keys(components).map(item => typeof item), 'components')
//     let skips = ['Card', 'Page', 'Setting', 'Const', 'Library']
//     let objs = Object.keys(components)
//     // objs//.splice(40)
//     log(objs, 'objs')
//     let auto = objs.filter((item) => !skips.includes(item)).map((item) => <Unit key={item} component={item} />)
//     log(auto, 'auto')
//     let size = 50
//     return <BaseScreen scrollable={true} safeAreaDisabled={false}>
//       {auto}
//       {/* <Unit component='Head1' children='This is Head1' />
//       <Unit component='Names' color='#333' themes={['Head3', 'Head6']} />
//       <Unit component='Icon' iconSet='Octicons' name='comment' size={size} />
//       <Unit component='Image' size={size} /> */}
//     </BaseScreen>
//   }
// }
