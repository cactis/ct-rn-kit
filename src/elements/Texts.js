import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from './Layouts'
// import faker from 'faker'

// import { material } from 'react-native-typography'


import faker from "../../vendors/faker.min.js"

import styles from './Styles'

export class Text extends Component {
  render() {
    let {
      children = faker.lorem.sentence(),
      fontSize = 16
    } = this.props
    return <RNText flex={1} {...this.props}
      style={{
        fontSize: fontSize,
        lineHeight: fontSize * 1.6,
        paddingVertical: fontSize * 0.5,
        color: '#333',
        // backgroundColor: '#ccc',
        ...this.props.style}}>
        {children}
      </RNText>
    }
  }

  export class Headline extends Component {
    render() {
      log(styles.font, 'style.font')
      let {
        style,
        children = faker.lorem.sentence(),
        ...props } = this.props
      return <Text numberOfLines={1}
        // style={material.display1}
        style={{...style, ...styles.font}}
        {...props}>{children}</Text>
    }
  }

  export class H1 extends Component {
    render() {
      return <Headline {...this.props} fontSize={24} style={{fontWeight: '900', color: '#111'}} />
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
