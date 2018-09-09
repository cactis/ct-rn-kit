import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import * as CT from '../../..'
import { BaseScreen } from './'

export class Screen6 extends Component {
  render() {
    return <BaseScreen number={6}>
      <CT.ImageBackground uri='https://picsum.photos/1000/1400/?image=1019'>
      <CT.Row><CT.Space/></CT.Row>
      <CT.Row padding={20}>
        <CT.Text theme='H1' color='white' numberOfLines={2} fontSize={42}>{"Out of \nthe Wild Ocean"}</CT.Text>
        <CT.Row>
          <CT.Stars value={4.5} size={18} />
        </CT.Row>
        <CT.Row height={100} justifyContent='space-evenly' layout='row'>
          <Info key={1} text='2h' label='Tourtime' icon='clock-o' />
          <Info key={2} text='$10' label='Prie' icon='ios-pricetag' iconSet='Ionicons' />
          <Info key={3} text='4' label='Person' icon='md-people' iconSet='Ionicons' />
          <Info key={4} text='15h' label='Close' icon='bell-sleep' iconSet='MaterialCommunityIcons' />
        </CT.Row>
        <CT.Row justifyContent='flex-end' marginBottom={20}>
          <CT.Button theme='pill' backgroundColor='rgba(139,179,215,.4)' color='white' title='See Details' />
        </CT.Row>
      </CT.Row>
    </CT.ImageBackground>
  </BaseScreen>
}
}

const Info = (props) => {
  return <CT.Div alignItems='center' layout='column'>
    <CT.Text theme='H5' color='white' style={{textAlign: 'center'}}>{props.text}</CT.Text>
    <CT.IconLabel padding={1}
      icon={<CT.Icon name={props.icon} color='white' size={12} {...props}/>}
      label={<CT.Label theme='H8' color='white'>{props.label}</CT.Label>}
    />
  </CT.Div>
}
