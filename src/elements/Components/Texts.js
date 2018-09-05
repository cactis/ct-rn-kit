import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

import { Name, Label } from '../Texts'
import { Div, Row, Grid, Col, RowLine } from '../Layouts'
import { Avatar, Icon } from '../Images'

export class Texts extends Component {
  render() {
    let {
      themes = ['Head5', 'Head7'],
      justifyContent = 'center',
      ...props
    } = this.props
    return <Div justifyContent={justifyContent} >
      <Name theme={themes[0]} {...props}/>
      <Name theme={themes[1]} {...props}/>
    </Div>
  }
}
