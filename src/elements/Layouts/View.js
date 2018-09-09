import React, { PureComponent as Component } from 'react';
import { View as RNView} from 'react-native';
import { Example } from './'

export class View extends Component {
  render() {
    let {
      style,
      children,
      ...props
    } = this.props
    let emptyStyle = !children ? {borderWidth: 1, margin: 5} : {}
    return <RNView
      style={{...emptyStyle, ...style}} {...props}>{children}
      </RNView>
  }
}
