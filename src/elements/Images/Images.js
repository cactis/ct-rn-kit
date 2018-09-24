import React, { PureComponent as Component } from 'react'

import { StyleSheet, Animated, FlatList, ScrollView } from 'react-native'

import { List, Image, View }from '../..'

import _ from 'lodash'

export class Images extends Component {

  render() {
    return (
      <List
        horizontal
        height={100}
        style={{height: 100}}
        data={this.props.images}
        renderItem={({item}) => <Image uri={item} />}
      />
    )
  }

}
