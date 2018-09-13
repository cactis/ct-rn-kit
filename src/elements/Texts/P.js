import React, { PureComponent as Component } from 'react'
// import { View } from '../Layouts'

// import { material } from 'react-native-typography'

import faker from '../../../vendors/faker.min'

// import styles from '../Styles.js'

import { Text } from './Text'

export class P extends Component {

  render() {
    let {
      number = 1, ...props
    } = this.props
    let text = faker.lorem.paragraphs(number)
    log(text, 'text')
    return <Text {...props}>{text}</Text>
  }
}
