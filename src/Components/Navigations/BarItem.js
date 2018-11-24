import React from 'react'
import { View, Icon } from '../'

export class BarItem extends React.Component {
  render() {
    return <Icon size={18} {...this.props} />
  }
}
