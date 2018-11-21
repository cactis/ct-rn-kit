import React from 'react'
import { Scroll, Grid, SafeArea } from './'

export class Screen extends React.Component {
  render() {
    let {
      safeAreaDisabled = false,
      scrollable = false
    } = this.props
    const content = scrollable ? <Scroll><Grid {...this.props} /></Scroll> : <Grid {...this.props} />
    const body = safeAreaDisabled ? content : <SafeArea flex={1}>{content}</SafeArea>
    return body
  }
}
