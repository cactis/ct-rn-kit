import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from './Layouts'
// import faker from 'faker'

import { material } from 'react-native-typography'

import faker from "../../vendors/faker.min.js"

import styles from './Styles'

export class Label extends Component {
  render() {
    let {
      children = faker.company.companyName(),
    } = this.props
    return <Text {...this.props}>{children}</Text>
  }
}

export class Text extends Component {
  render() {
    let {
      style,
      fontSize = styles.text.fontSize,
      children = faker.lorem.sentence(),
      ...rest
    } = this.props
    // let {
    //   // lineHeight = fontSize * 1.5s
    //   , ...props
    // } = rest
    return <RNText flex={1} {...rest}
      style={{
        ...styles.text,
        fontSize: fontSize,
        // lineHeight: lineHeight,
        // paddingVertical: fontSize * 0.5,
        ...style,
      }}>
      {children}
    </RNText>
  }
}

export class Headline extends Component {
  render() {
    let {
      style,
      numberOfLines = 1,
      children = faker.lorem.sentence(),
      ...props
    } = this.props
    return <Text
      style={{
        // ...material.display1,
        numberOfLines: numberOfLines,
        ...styles.font,
        ...style,
      }}
      {...props}>{children}
    </Text>
  }
}

export class H1 extends Component {
  render() {
    let {
      color = '#111',
      style
    } = this.props
    return <Headline {...this.props} fontSize={24} style={{fontWeight: '900', color: color, ...style}} />
  }
}

export class H2 extends Component {
  render() {
    return <Headline {...this.props} fontSize={20} style={{ fontWeight: '700', color: '#111'}} />
  }
}

export class H3 extends Component {
  render() {
    return <Headline {...this.props} fontSize={18} style={{fontWeight: '300', color: '#333'}} />
  }
}

export class P extends Component {
  render() {
    return <Text {...this.props}>{faker.lorem.paragraphs()}</Text>
  }
}
