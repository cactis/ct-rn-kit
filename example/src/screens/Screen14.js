import React, { PureComponent as Component } from 'react'
import {Dimensions, FlatList, Image } from 'react-native'
import * as CT from '../../..'

import HTMLView from 'react-native-htmlview'


import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles'
import tinycolor from '../../../vendors/tinycolor-min.js'

const PADDING = 15
const CARDWIDTH = iOS ? 310 : 300
import faker from '../../../vendors/faker.min.js'

const map = 'https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

export class Screen14 extends Component {

  render() {
    return <BaseScreen number={14}>
      <CT.Row>
        <CT.ImageBackground uri={map}>
          <CT.Grid padding={20}>
            <CT.Space flex={1} />
          <CT.Row flex={4} xAlign='center'>
            <CT.Text theme='H1' numberOfLines={3} size={30} font='HoeflerText-Black' color='black'>{`DUPLIN\nHATTERAS\nRED`}</CT.Text>
          </CT.Row>
          <CT.Row xAlign='center'>
            <CT.IconLabel icon=<CT.Icon name='bucket' color='rgba(177,19,83,.84)' iconSet='Entypo' size={30} /> label=<CT.Label theme='H6' text='USA, North Carolina' /> />
          </CT.Row></CT.Grid>
        </CT.ImageBackground>
      </CT.Row>
      <CT.Row flex={1.5}>
        <CT.Row>
          <CT.Col flex={3} padding={20}>
            <CT.Col>
              <CT.Row style={{borderBottomWidth: 0.5, borderColor: '#aaa'}} xAlign='center'><TTLabels texts={['type of wine', 'Red, sweet']}/></CT.Row>
              <CT.Row style={{borderBottomWidth: 0.5, borderColor: '#aaa'}} xAlign='center'><TTLabels texts={['size', '750 ml']}/></CT.Row>
              <CT.Row xAlign='center'><TTLabels texts={['price', '$ 7.8']}/></CT.Row>
            </CT.Col>
            <CT.Col style={{borderLeftWidth: 0.5, borderColor: '#aaa'}}>
              <CT.Row style={{borderBottomWidth: 0.5, borderColor: '#aaa'}} xAlign='center'><CT.Div style={{paddingLeft: 20}}><TTLabels texts={['year', '2015']}/></CT.Div></CT.Row>
              <CT.Row style={{borderBottomWidth: 0.5, borderColor: '#aaa'}} xAlign='center'><CT.Div style={{paddingLeft: 20}}><TTLabels texts={['vol', '12.0%']}/></CT.Div></CT.Row>
              <CT.Row xAlign='center'><CT.Div style={{paddingLeft: 20}}><TTLabels texts={['good well with', 'picnic-foods']}/></CT.Div></CT.Row>
            </CT.Col>

          </CT.Col>
          <CT.Space flex={1}></CT.Space>
        </CT.Row>
        <CT.Row>
          <CT.Row flex={0} layout='row' xAlign='space-between' yAlign='center' margin={10} paddingVertical={10} style={{borderTopWidth: 0.5, borderColor: 'rgb(149,139,103)'}}>
            <CT.Label theme='H5' text='User rating:' />
            <CT.IconLabel icon=<CT.Icon name='thumbs-up' size={18} /> label=<CT.Label theme='H6' text='2,352' /> />
          </CT.Row>
          <CT.Row padding={10}>
            <CT.Label theme='H1' font='Georgia'>Description</CT.Label>
            <CT.Space size={10}/>
            <CT.Text theme='H7' numberOfLines={10} text={faker.lorem.paragraphs(3)} />
          </CT.Row>
        </CT.Row>
      </CT.Row>

      <CT.Float style={{right: -30, top: 280}}>
        <CT.Icon iconSet='Ionicons' name='ios-wine' size={220} color='rgb(73,8,101)' />
      </CT.Float>
    </BaseScreen>
  }
}

const TTLabels = (props) => <CT.Div>
  <CT.Label theme='H7' text={props.texts[0]} {...props} />
  <CT.Label theme='H4' color='#373434' text={props.texts[1]} font='Bodoni 72 Oldstyle' {...props} />
</CT.Div>

const TheImage = (props) => {
  let { size = 160 } = props
  return <CT.Square
    size={size}
    borderRadius={10}
    transform={[{'rotate': '45deg'}]}
    overflow='hidden'>
  <CT.Image size={size} />
</CT.Square>
}
