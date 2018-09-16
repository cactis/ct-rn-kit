import React, { PureComponent as Component } from 'react'
import {Dimensions, FlatList, Image } from 'react-native'
import * as CT from '../../..'

import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles'
import tinycolor from '../../../vendors/tinycolor-min.js'

const PADDING = 15
const CARDWIDTH = iOS() ? 310 : 300

export class Screen14 extends Component {


  render() {
    return <BaseScreen number={14}>
      <CT.Row align='center'>
        <CT.Label>Championship</CT.Label>
      </CT.Row>
      <CT.Row flex={1.8}>
        <CT.Text font='GillSans-UltraBold' size={50}
          align='center' numberOfLines={2}>Pipe Masteres</CT.Text>
      </CT.Row>
      <CT.Row flex={5}>
        <CT.Col><CT.Space/></CT.Col>
        <CT.Col>
          <CT.Row>
            <CT.Col xAlign='center'>
              <CT.Text theme='H6' font='Helvetica'>{`High-Stakes Finals\nDay at Ppeline.`}</CT.Text>
              <CT.Text theme='H8'>02 Aug 2018</CT.Text>
            </CT.Col>
            <CT.Col flex={0} align='center'>
              <CT.Icon color='rgba(117,119,241,.9)' />
            </CT.Col>
          </CT.Row>
          <CT.Space flex={1} />
          <CT.Row flex={2}></CT.Row>
        </CT.Col>
      </CT.Row>

      {/* <CT.Float>
        <CT.Row>
          <TheImage />
        </CT.Row>
        <CT.Row>
          <CT.Col><TheImage /></CT.Col>
          <CT.Col><TheImage /></CT.Col>
        </CT.Row>
      </CT.Float> */}
    </BaseScreen>
  }
}

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
