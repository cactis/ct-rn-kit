import React from 'react'
import { FlatList, View } from 'react-native'

import { Name, Label } from './Texts'
import { Div, Row, Grid, Col, RowLine } from './Layouts'
import { Avatar, Icon } from './Images'

import { TwoCols } from './'

export const IconLabel = props => {
  let {
    icon,
    iconSize = 18,
    labelSize = iconSize * 0.8,
    _icon = icon ? (
      <Icon color="#111" name={icon} size={iconSize} {...props} />
    ) : null,

    label = <Label theme="H8" color="#333" size={labelSize} {...props} />,
  } = props
  return <TwoCols col1={_icon} col2={label} {...props} />
}
