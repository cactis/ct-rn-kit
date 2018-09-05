import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from '../Layouts'

import { Text } from './'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

import styles from '../Styles.js'


class Headline extends Component {
  render() {
    let {
      style,
      numberOfLines = 1,
      children = faker.lorem.sentence(),
      color = style.color,
      ...props
    } = this.props
    style.color = color
    return <Text numberOfLines={numberOfLines}
      style={{
        // ...styles.font,
        ...style,
        // color: color,
      }}
      {...props}>{children}
    </Text>
  }
}

H = (color, fontWeight, fontSize, props) => {
  let {
    style,
    ..._props
  } = props
  return <Headline fontSize={fontSize} style={{fontWeight: fontWeight, color: color, lineHeight: fontSize * 1.5, ...style}} {..._props} />
}


export const Head1 = (props) => H('rgba(0,0,0,1)', 'bold', 28, props)
export const Head2 = (props) => H('rgba(0,0,0,0.9)', '900', 24, props)
export const Head3 = (props) => H('rgba(0,0,0,0.8)', '800', 22, props)
export const Head4 = (props) => H('rgba(0,0,0,0.7)', '700', 20, props)
export const Head5 = (props) => H('rgba(0,0,0,0.6)', '600', 18, props)
export const Head6 = (props) => H('rgba(0,0,0,0.5)', '500', 16, props)
export const Head7 = (props) => H('rgba(0,0,0,0.4)', '400', 14, props)
export const Head8 = (props) => H('rgba(0,0,0,0.4)', '300', 12, props)
export const Head9 = (props) => H('rgba(0,0,0,0.4)', '200', 10, props)
