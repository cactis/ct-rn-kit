import React, { PureComponent as Component } from 'react'
import { View } from './View'
import { Row } from './Row'
import { Col } from './Col'


export class Grid extends Component {
  render() {
    let {
      align,
      yAlign,
      xAlign,
      layout = this.direction(),
      flex = 1,
      style,
      ...props
    } = this.props
    align && (yAlign = align) && (xAlign = align)
    yAlign && (style.alignItems = yAlign)
    xAlign && (style.justifyContent = xAlign)
    return <View style={{flex: flex, flexDirection: layout, ...style}} {...props} />
  }

  direction() {
    var row = true;
    React.Children.forEach(this.props.children, function (child) {
      if(child && child.type == Col)
      row = false;
    })
    return row ? 'column' : 'row';
  }
}
