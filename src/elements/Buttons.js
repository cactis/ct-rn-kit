import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'

import { Button } from 'react-native'
import { Touch } from './Events'
import { View } from './Layouts'
import { Label } from './Texts'

export class PillButton extends Component {
  render() {
    let {
      theme,
      style,
      titleColor,
      fontSize,
      ...props
    } = this.props
    return <Touch {...this.props}>
      <View style={styles[theme]}>
        <Label style={{color: titleColor, fontSize: fontSize}} {...props}>Follow</Label>
      </View>
    </Touch>
  }
}

export class RoundButton extends Component {
  render() {
    return <View><Button title='自訂按鍵'/></View>
  }
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 30,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 20,
    borderColor: 'white',
  }
})
