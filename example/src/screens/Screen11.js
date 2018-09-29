import React, { PureComponent as Component } from 'react'
import { Text, Platform, Dimensions } from 'react-native'
import * as CT from '../../..'
import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles.js'

const uri = 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const doctor = 'https://images.pexels.com/photos/355934/pexels-photo-355934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// let uri = 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen11 extends Component {
  state = {
    images: [
      'https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ]
  }
  render() {
    let { images } = this.state
    return <BaseScreen number={11}>
      <Row flex={1.5} xAlign='flex-end'>
        <TheLabel theme='H1' size={30} style={{fontFamily: 'TrebuchetMS'}}/>
        <TheLabel theme='H6' style={{fontFamily: 'TrebuchetMS'}}/>
      </Row>
      <CT.Row flex={3} layout='row'>
        <CTImage uri={images[0]}
          borderTopRightRadius={10}
          borderBottomRightRadius={10}
        />
        <CT.Space size={15}/>
        <CTImage flex={3} uri={images[1]} borderRadius={10}/>
        <CT.Space size={15}/>
        <CTImage uri={images[2]}
          borderTopLeftRadius={10}
          borderBottomLeftRadius={10}
        />
      </CT.Row>
      <Row flex={0.7} layout='row'>
        <Tag borderBottomWidth={3} style={{fontWeight: '800'}}>INGREDIENTS</Tag>
        <Tag>DIRECTION</Tag>
      </Row>
      <Row flex={2} xAlign='flex-start' paddingHorizontal={50}>
        <List />
        <List />
        <List />
        <List />
        <List />
        <List />
      </Row>
      <CT.Space size={60} />
    </BaseScreen>
  }
}

const Tag = (props) => <CT.Col xAlign='center' yAlign='center'>
  <CT.Div  paddingBottom={10} borderColor='rgb(245,200,84)' {...props}>
    <TheLabel theme='H6' {...props}/>
  </CT.Div>
</CT.Col>

const CTImage = (props) => <CT.Col
  style={{overflow: 'hidden', ...Styles.shadow}}
  flex={props.flex || 1}
  {...props}>
  <CT.Image {...props}
    style={{
      width: '100%', height: '100%',
      aspectRatio: null,
      // ...Styles.shadow,
      // ...props.style
    }} />
  </CT.Col>

  const Row = (props) => <CT.Row {...props} padding={20}  />

  const TheLabel = (props) => <CT.Label color='rgba(30,81,91,.9)' {...props} />

  const List = (props) => {
    return <CT.Row layout='row' yAlign='center'>
      <CT.Icon name='star' color='rgb(242,208,61)' size={10} />
      <CT.Space size={20} />
      <TheLabel theme='H7' />
    </CT.Row>
  }
