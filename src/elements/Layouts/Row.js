import React, { PureComponent as Component } from 'react'
import { Grid } from './Grid'

export class Row extends Component {
  render() {
    return <Grid {...this.props} />
  }
}
