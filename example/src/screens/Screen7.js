import React from 'react'
import { Text } from 'react-native'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'

const uri = 'https://images.pexels.com/photos/3791/sea-sunset-surfer-orange.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen7 extends React.Component {
  render() {
    return <BaseScreen number={7}>
      <CT.ImageBackground uri={uri}>
      <CT.Col flex={1} padding={0} align='center'>
        <CT.Icon color='rgba(255,255,255,1)' size={80} iconSet='Ionicons' name='md-globe' />
        <CT.Space size={20}/>
        <CT.Text theme='H9' font='Bradley Hand' style={{textShadowColor: 'black', width: '80%', textAlign: 'center', color: 'white', fontSize: 25, lineHeight: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et dolore magna aliqua.</CT.Text>
      </CT.Col>
      <CT.Col align='center' style={{}}>
        <CT.Text theme='H7' style={{color: 'white'}}>non blandit massa enim nec</CT.Text>
        <CT.Text theme='H1' font='Gill Sans' style={{fontSize: 80, color: 'white'}}>SURF</CT.Text>
        <CT.Text theme='H7' style={{color: 'white'}}>et ultrices neque</CT.Text>
      </CT.Col>
      </CT.ImageBackground>
    </BaseScreen>
  }
}
