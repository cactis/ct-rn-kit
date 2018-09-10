import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'

import { Touch } from '../Events'
import { View, Center } from '../Layouts'
import { Label } from '../Texts'
import { Icon } from '../Images'

import Styles from '../Styles'

export class Button extends Component {
  render() {
    let {
      theme,
      title = 'Button',
      style,
      titleColor,
      fontSize,
      rightIcon,
      titleStyle,
      backgroundColor = 'white',
      ...props
    } = this.props
    let { borderColor = titleColor } = props

    return <Touch {...this.props}>
      <Center flex={0} style={{
        ...styles[theme],
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        flexDirection: 'row',
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
    padding: 4,
    paddingHorizontal: 20,
    // backgroundColor: 'white'
    // ...Styles.shadow,
  }
})
