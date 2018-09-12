import React, { PureComponent as Component } from 'react';
import { View as RNView} from 'react-native';
import { Example } from './'

export class View extends Component {
  render() {
    let {
      align,
      yAlign,
      xAlign,
      style,
      children,
      ...props
    } = this.props
    align && (yAlign = align) && (xAlign = align)
    yAlign && (style.alignItems = yAlign)
    xAlign && (style.justifyContent = xAlign)
    let emptyStyle = !children ? {borderWidth: 1, margin: 5} : {}
    return <RNView
      // borderWidth={0.5}
      style={{...emptyStyle, ...style}} {...props}>{children}
      </RNView>
  }
}
