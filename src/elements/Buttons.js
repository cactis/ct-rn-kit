import React, { PureComponent as Component } from 'react'

import { Button } from 'react-native'
import { Touch } from './Events'
import { View } from './Layouts'
import { Label } from './Texts'

export class PillButton extends Component {
  render() {
    let {
      titleColor
    } = this.props
    return <Touch {...this.props}>
      <View><Label style={{color: titleColor}}>Follow</Label></View>
    </Touch>
  }
}

export class RoundButton extends Component {
  render() {
    return <View><Button title='自訂按鍵'/></View>
  }
}
