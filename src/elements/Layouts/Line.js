import React, { PureComponent as Component } from 'react'
import { Row, Space } from '.'

export class Line extends Component {
  render() {
    let {
      flex = 0,
      size = 2,
      style,
      color = 'white',
      ...props
    } = this.props
    return <Row style={{
      flex: flex,
      backgroundColor: color,
      padding: 0,
      ...style
    }}  {...props}><Space size={size}/></Row>
  }
}
