import React, { PureComponent as Component } from 'react'
import { Grid } from './Grid'

export class Col extends Component {
  render() {
    let {
      flex = 1,
      style,
      ...props
    } = this.props
    return <Grid style={{flex: flex, ...style}}  {...props} />
  }
}
