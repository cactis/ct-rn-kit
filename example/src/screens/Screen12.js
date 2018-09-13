import React, { PureComponent as Component } from 'react'
import {Dimensions } from 'react-native'
import * as CT from '../../..'

import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles'

let bg = 'https://images.pexels.com/photos/704971/pexels-photo-704971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

export class Screen12 extends Component {

  render() {
    return <BaseScreen number={12}>
      <CT.Row><CT.ImageBackground uri={bg} flex={1} /></CT.Row>
      <CT.Space flex={1} backgroundColor='rgb(35,32,47)' />
      <CT.Row style={styles.block}>
        <CT.Row flex={6} padding={20}>
          <CT.Row>
            <CT.Col flex={4}>
              <CT.Text theme='H1' size={22} color='white' font='Kailasa'>{`Pickle, jam \nand chuntney`}</CT.Text>
            </CT.Col>
            <CT.Col yAlign='flex-end' xAlign='center'>
              <CT.Icon size={14} color='white' backgroundColor='rgb(85,108,239)' name='location-arrow'/>
            </CT.Col>
          </CT.Row>
          <CT.Space size={20} />
          <CT.Row flex={2.2}>
            <CT.P theme='H8' color='white' numberOfLines={4} style={{lineHeight: 18}} />
          </CT.Row>
        </CT.Row>
        <CT.Row flex={1.8} layout='row' xAlign='space-evenly'>
          <IconLabel color='rgb(18,224,45)' text='Food' name='film'/>
          <IconLabel color='rgb(237,61,44)' text='Salty'  name='pinterest'/>
          <IconLabel color='rgb(254,206,18)' text='Allergies'  name='desktop'/>
          <IconLabel color='rgb(22,162,235)' text='Notes'  name='legal'/>
        </CT.Row>
        <CT.Space size={30} />
        <CT.Row flex={1.5} layout='row' padding={0} borderTopWidth={0.5} borderColor='rgb(67,89,147)'>
          {/* <CT.Col></CT.Col>
          <CT.Col></CT.Col>
          <CT.Col></CT.Col> */}
          <Label style={{fontWeight: '900'}} borderTopWidth={3} borderColor='rgba(242,240,234,.79)'>DETAIL</Label>
          <Label>MENU</Label>
          <Label>SERVICE</Label>
        </CT.Row>
      </CT.Row>
    </BaseScreen>
  }
}

const Label = (props) => {
  return <CT.Div flex={1} align='center' bordereWidth={1} borderColor='rgba(231,225,226,.65)' {...props}>
    <CT.Text theme='H8' color='rgba(252,252,252,.78)' {...props} />
  </CT.Div>
}

const IconLabel = (props) =>{
  let { color, text, name } = props
  return <CT.IconLabel
    layout='column'
    yAlign='center'
    xAlign='space-between'
    icon=<CT.Icon color={color} size={14} name={name} backgroundColor='rgb(71,69,88)' />
    label=<CT.Label theme='H9' color='white'>{text}</CT.Label> {...props}
  />
}

let { width, height } = Dimensions.get('window')
let margin = 30
const styles = {
  block: {
    position: 'absolute',
    backgroundColor: 'rgb(54,51,70)',
    width: width - 2 * margin,
    bottom: 20,
    left: margin,
    height: height / 2,
    borderRadius: 10
  }
}