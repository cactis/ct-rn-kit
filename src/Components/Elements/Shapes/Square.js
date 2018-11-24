import React, { PureComponent as Component } from 'react'
import { View } from '../Layouts/View'

export class Square extends Component {
  render() {
    let { size = '100%' } = this.props
    return <View height="100%" margin={0} aspectRatio={1} {...this.props} />
  }
}
