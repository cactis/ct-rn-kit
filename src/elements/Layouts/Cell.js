import React, { PureComponent as Component } from 'react'
import { Row } from './Row'
import { Touch } from '../Events'

export class Cell extends Component {
  render() {
    return <Touch {...this.props}>
      <Row padding={20} {...this.props}
        backgroundColor='white'
        borderBottomWidth={0.5}
        borderColor='rgba(92,103,103,.57)' />
      </Touch>
    }
  }
