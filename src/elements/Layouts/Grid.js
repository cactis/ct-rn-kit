import React, { PureComponent as Component } from 'react'
import { View } from './View'


export class Grid extends Component {
  render() {
    let {
      layout = this.direction(),
      flex = 1,
      style,
      ...props
    } = this.props

    return <View style={{
      flex: flex,
      flexDirection: layout,
      ...style
    }} {...props} />
  }

  direction() {
    let debug = this.props._
    var row = true;
    React.Children.forEach(this.props.children, function (child) {
      if (debug) {
        console.log(child)
        console.log(child?.type.name)
      }
      if(child?.type?.name?.includes('Col')) (row = false)
      if(child?.type?.name?.includes('Row')) (row = true)
    })
    return row ? 'column' : 'row';
  }
}
