import React, { PureComponent as Component } from 'react'
import { Row } from './Row'
import { Touch } from '../Events'
import { Labels } from '../Texts/Labels.js'
export class Cell extends Component {
  render() {
    let {
      backgroundColor = 'white',
      children = <Labels />
    } = this.props
    return <Touch {...this.props}>
      <Row padding={20} {...this.props}
        backgroundColor={backgroundColor}
        borderBottomWidth={0.5}
        borderColor='rgba(92,103,103,.57)'>{children}</Row>
      </Touch>
    }
  }
