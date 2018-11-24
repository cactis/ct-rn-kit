import React from 'react'
import { StyleSheet } from 'react-native'

import { Touch } from '../Events'
import { View, Center } from '../Layouts'
import { Label } from '../Texts'
import { Icon } from '../Images'

import Styles from '../../Styles'

import tinycolor from 'tinycolor2'

export class Button extends React.Component {
  render() {
    let {
      theme = 'normal',
      title = 'Button',
      style,
      titleColor = (color = '#111'),
      rightIcon,
      titleStyle,
      fontSize = titleStyle?.fontSize || 18,
      padding = fontSize * 0.5,
      backgroundColor,
      ...props
    } = this.props
    let {
      borderColor = backgroundColor
        ? tinycolor(backgroundColor)
            .lighten()
            .toString()
        : 'white'
    } = props
    return (
      <Touch {...this.props}>
        <Center
          flex={0}
          style={{
            ...styles[theme],
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            flexDirection: 'row',
            paddingHorizontal: padding * 2,
            paddingVertical: padding,
            ...Styles.shadow,
            ...style
          }}
        >
          <Label
            style={{
              color: titleColor,
              fontSize: fontSize,
              fontWeight: '500',
              ...titleStyle
            }}
            {...props}
          >
            {title}
          </Label>
          {rightIcon}
        </Center>
      </Touch>
    )
  }
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 30,
    borderWidth: 0.5,
    // padding: 6,
    lineHeight: 1.8,
    paddingHorizontal: 20
    // backgroundColor: 'white'
    // ...Styles.shadow,
  },
  normal: {
    borderRadius: 5,
    lineHeight: 2.5
  }
})
