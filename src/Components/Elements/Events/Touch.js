import React, { PureComponent as Component } from 'react'
import { TouchableOpacity } from 'react-native'

export class Touch extends Component {
  render() {
    return <TouchableOpacity activeOpacity={0.6} {...this.props} />
  }
}
