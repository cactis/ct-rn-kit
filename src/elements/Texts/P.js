import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

import styles from './../Styles'

import * as Texts from './'

export class P extends Component {
  render() {
    return <Texts.Text {...this.props}>{faker.lorem.paragraphs()}</Texts.Text>
  }
}
