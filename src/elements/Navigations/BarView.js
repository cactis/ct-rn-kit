import React, { PureComponent as Component } from 'react'
import { View } from '../Layouts'

export class BarView extends Component {
  render() {
    const paddingLeft = this.props.pos == 'left' ? 16 : 0
    const paddingRight = this.props.pos == 'left' ? 0 : 16
    return <View paddingLeft={paddingLeft} paddingRight={paddingRight} alignItems='center' {...this.props}/>
  }
}
