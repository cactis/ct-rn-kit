import React from 'react'
import { Paragraph } from './Paragraph'

var faker = require('faker')

export class Paragraphs extends React.Component {
  render() {
    let {
      numberOfLines = 30,
      text = faker.lorem.paragraphs(10),
      children = text
    } = this.props
    return (
      <Paragraph numberOfLines={numberOfLines} {...this.props}>
        {children}
      </Paragraph>
    )
  }
}
