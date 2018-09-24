import React, { PureComponent as Component } from 'react'
import { Text as RNText, WebView } from 'react-native'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

import styles from '../Styles.js'

import  {Text}   from './Text'
export const Html = (props) => <WebView
  useWebKit={true}
  javaScriptEnabled={true}
  // onNavigationStateChange={this.onNavigationStateChange.bind(this)}
  scrollEnabled={false}
  source={{html: props.html}}
  style={{ body: {fontSize: 18} }}
  domStorageEnabled={true}
  scalesPageToFit={false}
  decelerationRate="normal"
  javaScriptEnabledAndroid={true}
  // html={props.html}
/>
