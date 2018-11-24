import React from 'react'
import { FlatList, View } from 'react-native'

import { Name, Label } from './Texts'
import { Div, Row, Grid, Col, RowLine } from './Layouts'
import { Avatar, Icon } from './Images'

import { Space } from './Layouts'

export const TwoCols = props => {
  let { height = 32 } = props

  let { padding = height * 0.1 } = props

  return (
    <Grid flex={0} {...props}>
      <Col align="center" flex={0}>
        {props.col1}
      </Col>
      {props.children}
      <Space />
      <Col align="center" flex={0} xAlign="center">
        {props.col2}
      </Col>
    </Grid>
  )
}
