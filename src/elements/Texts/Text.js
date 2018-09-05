import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

import styles from './../Styles'

export class Text extends Component {
  render() {
    let {
      style,
      fontSize = styles.text.fontSize,
      children = faker.lorem.sentence(),
      ...rest
    } = this.props
    let {
      lineHeight = fontSize * 1.2,
      ...props
    } = rest
    return <RNText flex={1} {...rest}
      style={{
        ...styles.text,
        fontSize: fontSize,
        lineHeight: lineHeight,
        ...style,
      }} {...props}>
      {children}
    </RNText>
  }
}
