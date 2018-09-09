import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'


export class Space extends Component {
  render() {
    let { size = 4} = this.props
    return <View padding={size / 2} {...this.props} />
  }
}
