export * from './Row'
export * from './View'
export * from './Grid'
export * from './Col'
export * from './Space'
export * from './Cell'
export * from './Screen'

import { View } from './View'
import { Row } from './Row'
import { Col } from './Col'
import { Grid } from './Grid'
import { Screen } from './Screen'

import React, { PureComponent as Component } from 'react';
import { ScrollView, TouchableOpacity, AsyncStorage, StatusBar, SafeAreaView, View as RNView} from 'react-native';
import {  Text } from '../Texts'

import styles from '../Styles'

import { Touch } from '../Events'

export class  Scroll extends Component {
  render() {
    return <ScrollView {...this.props} />
  }
}

export class SafeArea extends Component {
  render() {
    let {
      backgroundColor = 'transparent'
    } = this.props
    return <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}} flex={1} {...this.props} />
  }
}


export class Center extends Component {
  render() {
    let {
      flex = 1,
      style
    } = this.props
    return <View {...this.props} style={{flex: flex, justifyContent: 'center', alignItems: 'center', ...style}}
    />
  }
}

export class Example extends Component {
  render() {
    return <Center padding={20}><Text/></Center>
  }
}

export class Padding extends Component {
  render() {
    return <View {...this.props} padding={10}/>
  }
}

export class Float extends Component {
  render() {
    let { style, ...props } = this.props
    return <Center flex={0}
      style={{position: 'absolute',
      zIndex: 1000, ...style}} {...props}>
    </Center>
  }
}

export class Card extends Component {
  render() {
    let {
      style = {},
      ...props
    } = this.props
    return <Touch activeOpacity={0.8} onPress={this.props.onPress}>
      <Grid flex={1}
        // overflow='hidden'
        style={{...styles.card, ...style}}
        {...props} />
      </Touch>
    }
  }

  export const RowLine = (props) => <Row flexDirection='row' alignItems='center' {...props} />
  export class Header extends Row {}
  export class Mid extends Row {}
  export class Body extends Row {}
  export class Footer extends Row {}
  export class Block extends Row {}

  export class Div extends View {}

  class Page extends Screen {}

  export class Page1 extends Component {
    static navigationOptions = ({ navigation, header }) => {
      // const params = navigation.state.params || {}
      return {
        ...navigation,
        ...header,
        headerStyle: Styles.header,
        headerTitle: "(defalut)",
      }
    }
    render() {
      return <SafeArea><ScrollView {...this.props} /></SafeArea>
    }
  }

  // export default Grid
  // export default Col
  // module.exports = {
  //   // RoundButton: RoundButton,
  //   Grid, Col, View, SafeArea
  //
  // };
