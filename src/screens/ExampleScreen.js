import React from 'react'

import { Screen, Col, Row } from '../Components'

export class ExampleScreen extends React.Component {
  render() {
    return (
      <Screen>
        <Row>
          <Col />
          <Col />
        </Row>
        <Row>
          <Col />
          <Col />
        </Row>
        <Row>
          <Col />
          <Col />
        </Row>
      </Screen>
    )
  }
}
