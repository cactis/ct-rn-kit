import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

import { TwoCols } from './'

export const IconLabel = (props) => {
  let {
    iconSize = 18,
    labelSize = iconSize * 0.8,
    icon = <Icon
      color='#111'
      size={iconSize}
      {...props}
    />,
    label = <Label
      theme='Head8'
      color='#333'
      size={labelSize}
      {...props}
    />
  } = props
  return <TwoCols col1={icon} col2={label} {...props} />
}
