import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

export const Stars = (props) => {
  let {
    value = 1.5,
    size,
    iconColor = '#E8D20C',
    fontColor = 'white',
    fontSize = size * 0.8
  } = props

  let floor = Math.floor(value)
  let full = Array(floor).join().split(',').map(i => <Icon key={randKey()} iconSet='FontAwesome' name='star' color='#E8D20C' size={size} />)
  // log(full, 'full')
  let half = value - floor > 0 ? <Icon iconSet='FontAwesome' name='star-half-full' color={iconColor} size={size} /> : null
  return <RowLine flex={0}>
    {full}
    {half}
    <Label theme='Head7' fontSize={fontSize} color={fontColor}>{value}</Label>
  </RowLine>
}
