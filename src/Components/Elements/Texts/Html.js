import React from 'react'
import { Text as RNText, WebView, StyleSheet } from 'react-native'
// import WebView from 'react-native-htmlview'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

var faker = require('faker')

// import styles from '../Styles.js'

import { Text } from './Text'
export class Html extends React.Component {
  render() {
    let {
      html = '<h1> h1 Heading Tag</h1>' +
        '<p> Sample Paragraph Tag </p>' +
        '<img src="https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png" alt="Image" width="250" height="150" >'
    } = this.props

    return (
      <WebView
        value={html}
        stylesheet={styles}
        useWebKit={true}
        flex={1}
        javaScriptEnabled={true}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        scrollEnabled={false}
        source={{ html: html }}
        style={{ body: { fontSize: 40 } }}
        domStorageEnabled={true}
        scalesPageToFit={true}
        decelerationRate="normal"
        javaScriptEnabledAndroid={true}
        html={props.html}
      />
    )
  }
}

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366' // make links coloured pink
  }
})
