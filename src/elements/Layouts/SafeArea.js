import React from 'react'
import { StatusBar, SafeAreaView} from 'react-native'

export class SafeArea extends React.Component {
  render() {
    let {
      backgroundColor = 'transparent'
    } = this.props
    return <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}} flex={1} {...this.props} />
  }
}
