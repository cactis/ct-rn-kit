import React from 'react'
import { TouchableOpacity } from 'react-native';

export class Touch extends React.Component {
  render() {
    return <TouchableOpacity activeOpacity={0.8} {...this.props} />
  }
}
