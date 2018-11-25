import React from 'react'
import { Text as RNText } from 'react-native'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

var faker = require('faker')

import styles from '../../Styles.js'

import { Text } from './Text'
export const Label = props => <Text numberOfLines={1} {...props} />
