import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

import { TwoCols } from './'

export const IconLabel = (props) => {
  let {
    icon = <Icon color='#333' />,
    label = <Label theme='Head8' color='#333' />
  } = props
  return <TwoCols col1={icon} col2={label} {...props} />
}
