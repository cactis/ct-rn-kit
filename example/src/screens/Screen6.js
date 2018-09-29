import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import * as CT from '../../..'
import { BaseScreen } from './'

export class Screen6 extends Component {
  state = {
    uri: 'https://images.pexels.com/photos/775199/pexels-photo-775199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
  render() {
    return <BaseScreen number={6}>
      <CT.ImageBackground
        uri={this.state.uri}>
        <CT.Row><CT.Space/></CT.Row>
        <CT.Row padding={20}>
          <CT.Text
            theme='H1'
            color='white'
            font='MarkerFelt-Thin'
            style={{fontWeight: '900'}}
            numberOfLines={2}
            size={45}>{"Out of \nthe Wild Forest"}
          </CT.Text>
          <CT.Row>
            <CT.Stars value={4.5} size={20} />
          </CT.Row>
          <CT.Row height={100} justifyContent='space-evenly' flow='row'>
            <Info key={1} text='2h' label='Tourtime' icon='clock-o' />
            <Info key={2} text='$10' label='Prie' icon='ios-pricetag' iconSet='Ionicons' />
            <Info key={3} text='4' label='Person' icon='md-people' iconSet='Ionicons' />
            <Info key={4} text='15h' label='Close' icon='bell-sleep' iconSet='MaterialCommunityIcons' />
          </CT.Row>
          <CT.Row justifyContent='flex-end' marginBottom={20}>
            <CT.Button theme='pill' backgroundColor='rgba(223,232,241,.9)'  color='white' title='See Details' />
          </CT.Row>
        </CT.Row>
      </CT.ImageBackground>
    </BaseScreen>
  }
}
const Info = (props) => {
  return <CT.Div alignItems='center' flow='column'>
    <CT.Text theme='H1' color='white' style={{textAlign: 'center'}}>{props.text}</CT.Text>
    <CT.IconLabel padding={1}
      icon={<CT.Icon name={props.icon} color='white' size={12} {...props}/>}
      label={<CT.Label theme='H8' color='white'>{props.label}</CT.Label>}
    />
  </CT.Div>
}
