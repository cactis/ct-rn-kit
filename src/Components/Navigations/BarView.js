import React from 'react'
import { View } from '..'

export class BarView extends React.Component {
  render() {
    const paddingLeft = this.props.pos == 'left' ? 16 : 0
    const paddingRight = this.props.pos == 'left' ? 0 : 16
    return (
      <View
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        alignItems="center"
        {...this.props}
      />
    )
  }
}
