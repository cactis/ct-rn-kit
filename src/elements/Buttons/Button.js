import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'

import { Touch } from '../Events'
import { View, Center } from '../Layouts'
import { Label } from '../Texts'
import { Icon } from '../Images'

import Styles from '../Styles'

import tinycolor from '../../../vendors/tinycolor-min.js'

export class Button extends Component {
  render() {
    let {
      theme,
      title = 'Button',
      style,
      titleColor = color = '#111',
      rightIcon,
      titleStyle,
      fontSize = titleStyle?.fontSize || 18,
      padding = fontSize * 0.5,
      backgroundColor = 'white',
      ...props
    } = this.props
    let { borderColor = tinycolor(backgroundColor).lighten().toString() } = props
    return <Touch {...this.props}>
      <Center flex={0} style={{
        ...styles[theme],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        flexDirection: 'row',
        paddingHorizontal: padding * 2,
        paddingVertical: padding,
        ...style}}>
        <Label style={{
          color: titleColor,
          fontSize: fontSize,
          ...titleStyle
        }} {...props}>{title}
        </Label>
        {rightIcon}
      </Center>
    </Touch>
  }
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 30,
    borderWidth: 0.5,
    // padding: 6,
    paddingHorizontal: 20,
    // backgroundColor: 'white'
    // ...Styles.shadow,
  }
})
