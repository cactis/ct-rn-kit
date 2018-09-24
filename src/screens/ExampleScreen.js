import React, { PureComponent as Component } from 'react'

import { Screen, Col, Row } from '../elements'

export class ExampleScreen extends Component {
  render() {
    return <Screen>
      <Row><Col /><Col /></Row>
      <Row><Col /><Col /></Row>
      <Row><Col /><Col /></Row>
    </Screen>
  }
}
