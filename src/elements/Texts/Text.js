import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

// import styles from './../Styles'

export class Text extends Component {

  render() {
    let {
      style,
      theme = 'H3',
      align = 'left',
      color,
      children = faker.commerce.productName(),
      ...props
    } = this.props
    let themeStyle = {...styles[theme]} //!!!
    color && themeStyle && (themeStyle.color = color)
    return <RNText
      // numberOfLines={1}
      // flex={1}
      style={{
        // alignSelf: 'flex-start',
        // textAlign: align,
        textAlignVertical: 'bottom',
        // borderWidth: 1,
        ...themeStyle,
        ...style,
      }}
      {...props}
      >
      {children}
    </RNText>
  }
}


const styles = {
  H1: {
    fontSize: 26,
    // lineHeight: 36 * 1.5,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,.93)'
  },
  H2: {
    fontSize: 24,
    // lineHeight: 24 * 1.5,
    fontWeight: '900',
    color: 'rgba(0,0,0,.9)'
  },
  H3: {
    fontSize: 22,
    // lineHeight: 22 * 1.5,
    fontWeight: '800',
    color: 'rgba(0,0,0,.85)'
  },
  H4: {
    fontSize: 20,
    // lineHeight: 20 * 1.5,
    fontWeight: '700',
    color: 'rgba(0,0,0,.80)'
  },
  H5: {
    fontSize: 18,
    // lineHeight: 18 * 1.5,
    fontWeight: '600',
    color: 'rgba(0,0,0,.80)'
  },
  H6: {
    fontSize: 16,
    // lineHeight: 16 * 1.5,
    fontWeight: '500',
    color: 'rgba(0,0,0,.75)'
  },
  H7: {
    fontSize: 14,
    // lineHeight: 14 * 1.5,
    fontWeight: '400',
    color: 'rgba(0,0,0,.70)'
  },
  H8: {
    fontSize: 12,
    // lineHeight: 12 * 1.5,
    fontWeight: '300',
    color: 'rgba(0,0,0,.70)'
  },
  H9: {
    fontSize: 10,
    // lineHeight: 10 * 1.5,
    fontWeight: '200',
    color: 'rgba(0,0,0,.70)'
  },
}
