import React, { PureComponent as Component } from 'react'
import {Dimensions, FlatList, Image } from 'react-native'
import * as CT from '../../..'

import HTMLView from 'react-native-htmlview'


import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles'
import tinycolor from '../../../vendors/tinycolor-min.js'

const PADDING = 15
const CARDWIDTH = iOS ? 310 : 300

export class Screen14 extends Component {


  render() {
    const htmlContent = `<h1>ABC</h1><p><a href="http://jsdf.co">&hearts; nice job!</a></p>`;

    return <BaseScreen number={14}>
      <CT.Row align='center'>
        <CT.Label>Championship</CT.Label>
      </CT.Row>
      <CT.Row flex={1.8}>
        <CT.Text font='GillSans-UltraBold' size={50}
          align='center' numberOfLines={2}>Pipe Masteres</CT.Text>
      </CT.Row>
      <CT.Row flex={5}>
        <HTMLView
          value={htmlContent}
         />
      </CT.Row>


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
