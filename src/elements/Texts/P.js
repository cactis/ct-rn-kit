import React, { PureComponent as Component } from 'react'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

import styles from '../Styles.js'

import Text from './Text'

export class P extends Component {
  render() {
    return <Text {...this.props}>{faker.lorem.paragraphs()}</Text>
  }
}
