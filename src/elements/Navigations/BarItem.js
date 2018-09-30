import React, { PureComponent as Component } from 'react'
import { View, Icon } from '../'

export class BarItem extends Component {
  render() {
    return <Icon size={18} {...this.props} />
  }
}
