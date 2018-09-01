import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'

// import { Button } from 'react-native'
import { Touch } from './Events'
import { View, Center } from './Layouts'
import { Label } from './Texts'

import Styles from './Styles'

export class Button extends Component {
  render() {
    let {
      theme,
      title = 'Button',
      style,
      titleColor,
      fontSize,
      backgroundColor = 'white',
      ...props
    } = this.props
    let { borderColor = titleColor } = props
    return <Touch {...this.props}>
      <Center flex={0} style={{
        ...styles[theme],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        ...style}}>
        <Label style={{
          color: titleColor,
          fontSize: fontSize}} {...props}>{title}
        </Label>
      </Center>
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
    borderWidth: 0.5,
    padding: 4,
    paddingHorizontal: 20,
    // backgroundColor: 'white'
    // ...Styles.shadow,
  }
})
