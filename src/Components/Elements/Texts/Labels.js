import React from 'react'
import { Div } from '../Layouts'
import { Text } from './Text'

// import { material } from 'react-native-typography'

var faker = require('faker')

export class Labels extends React.Component {
  render() {
    let {
      texts = [faker.commerce.productName(), faker.commerce.productName()],
      themes = ['H5', 'H7'],
      ...props
    } = this.props
    let children = texts.map((text, i) => (
      <Text key={randKey()} theme={themes[i]} {...props}>
        {text}
      </Text>
    ))
    return <Div {...props}>{children}</Div>
  }
}
