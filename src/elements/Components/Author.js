import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

import { Names, TwoCols } from './'

export const Author = (props) => {
  let {
    height = 32,
    themes = ['Head6', 'Head8']
  } = props
  let avatar = <Avatar size={height} />
  let names = <Names color='white' themes={themes} />
  return <TwoCols {...props} col1={avatar} col2={names} />
}
