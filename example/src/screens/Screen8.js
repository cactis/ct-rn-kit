import React from 'react'
import { Text } from 'react-native'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/Components/Styles.js'

const uri = 'https://images.pexels.com/photos/1051076/pexels-photo-1051076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// let uri = 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen8 extends React.Component {
  render() {
    return <BaseScreen number={8} _>
      <CT.ImageBackground uri={uri}>
        <CT.Row>
          <CT.Row height={250} flex={0} style={{position: 'absolute', bottom: 0, width: '100%'}}>
            <CT.Row flex={0} padding={10} paddingLeft={30}>
              <CT.Label color='white' size={40} theme='H1'>Jasmine C.</CT.Label>
              <CT.Label color='white' theme='H6'>New York</CT.Label>
            </CT.Row>
            <CT.Row backgroundColor='white' borderTopLeftRadius={50} borderTopRightRadius={50} padding={20} style={{...Styles.shadow}}>
              <CT.Label theme='H1' style={{textAlign: 'center', fontWeight: '100'}}>Photographer</CT.Label>
              <CT.Row>
                <TCol texts={['250', 'photos']}/>
                <TCol texts={['2,380', 'following']}/>
                <TCol texts={['1.6k', 'likes']}/>
              </CT.Row>
            </CT.Row>
          </CT.Row>
        </CT.Row>
      </CT.ImageBackground>
    </BaseScreen>
  }
}

const TCol = (props) => <CT.Col><CT.Center><CT.Labels style={{textAlign: 'center'}} themes={['H1', 'H8']} {...props} /></CT.Center></CT.Col>
