import React from 'react'
import { Text } from './Text'

import faker from '../../../vendors/faker.min.js'

export class Paragraph extends React.PureComponent {
  render() {
    let {
      numberOfLines = 10,
      text = faker.lorem.paragraphs(5),
      children = text
    } = this.props
    return <Text theme='H6' style={{lineHeight: 20}} numberOfLines={numberOfLines} {...this.props}>{children}</Text>
  }
}
