import React from 'react'
import { Text as RNText, WebView, StyleSheet, ScrollView } from 'react-native'
// import WebView from 'react-native-htmlview'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

var faker = require('faker')

// import styles from '../Styles.js'

import HTML from 'react-native-render-html'

export class Html extends React.PureComponent {
  render() {
    let { text } = this.props
    const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <p>Look at how happy this native cat is</p>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`
    text = `<p>${text}</p>`
    return (
      // <ScrollView style={{ flex: 1}}>
      <HTML
        html={text}
        // html={htmlContent}
        tagsStyles={styles}
        containerStyle={styles.containerStyle}
        // imagesMaxWidth={Dimensions.get('window').width}
      />
      // </ScrollView>
    )
  }
}

import { Text } from './Text'
export class Html1 extends React.Component {
  render() {
    let {
      text,
      html = text ||
        '<h1> h1 Heading Tag</h1>' +
          '<p> Sample Paragraph Tag </p>' +
          '<img src="https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png" alt="Image" width="250" height="150" >',
      ...props
    } = this.props
    html =
      '<meta id="vp" name="viewport" content="width=device-width,initial-scale=1' +
      ',user-scalable=yes">' +
      html
    return (
      <WebView
        // value={html}
        stylesheet={styles}
        useWebKit={true}
        flex={1}
        javaScriptEnabled={true}
        // onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        scrollEnabled={false}
        source={{ html: html }}
        style={{ body: { fontSize: 40 } }}
        domStorageEnabled={true}
        scalesPageToFit={iOS === 'ios' ? false : true}
        decelerationRate="normal"
        javaScriptEnabledAndroid={true}
        // html={html}
      />
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // fontSize: 30,
  },
  p: {
    fontSize: 17,
    // fontFamily: 'Avenir',
    lineHeight: 23,
    marginVertical: 10,
    fontWeight: '300',
  },
  a: {
    color: '#FF3366', // make links coloured pink
  },
})
