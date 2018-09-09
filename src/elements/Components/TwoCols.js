import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

import { Space } from '../Layouts'

export const TwoCols = (props) => {

  let {
    height = 32
  } = props

  let {
    padding = height * 0.2
  } = props

  return <Grid flex={0} {...props}>
    <Col flex={0}>
      {props.col1}
    </Col>
    {props.children}
    <Space size={padding} />
    <Col flex={0} justifyContent='center'>
      {props.col2}
    </Col>
  </Grid>
}
