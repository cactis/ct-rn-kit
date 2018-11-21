import React from 'react'
import {Dimensions, FlatList, Image } from 'react-native'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/elements/Styles'
import tinycolor from 'ct-rn-kit/vendors/tinycolor-min.js'

import WifiManager from 'react-native-wifi';


export class Screen18 extends React.Component {
  render() {
    return <BaseScreen
      safeAreaDisabled={true}
      number={18}
      padding={20}
      backgroundColor='rgb(59,60,68)'>
      <CT.Space padding={20} />

    </BaseScreen>
  }
}

const Input = (props) => <CT.Div margin={20} borderColor='rgba(217,163,25,.68)' borderBottomWidth={2}>
  <CT.Label color='rgba(255,255,255,.86)'>{props.title}</CT.Label>
  <CT.Space size={8} />
  <CT.Label color='rgb(217,163,25)'>{props.value}</CT.Label>
  <CT.Space size={8} />
</CT.Div>
