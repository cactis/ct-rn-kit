import React, { PureComponent as Component } from 'react';
import { FlatList, View} from 'react-native';

export class Space extends Component {
  render() {
    let { size = 4} = this.props
    return <View padding={size / 2} {...this.props} />
  }
}
