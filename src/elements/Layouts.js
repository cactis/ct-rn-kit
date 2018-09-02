import React, { PureComponent as Component } from 'react';
import { ScrollView, TouchableOpacity, AsyncStorage, StatusBar, SafeAreaView, View as RNView} from 'react-native';
import { Label, Text, H1, H2, H3 } from './Texts'

import styles from './Styles'

import { Touch } from './Events'

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

export class View extends Component {
  render() {
    let {
      children = <Example/>,
    } = this.props
    this.props.children = children
    // return <RNView {...this.props}>{drawBorders(this)}</RNView>
    return <RNView {...this.props}>{children}</RNView>
    // return <RNView {...this.props}>{drawBorders(this)}</RNView>
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
    return <Center padding={20}><Label/></Center>
  }
}

export class Padding extends Component {
  render() {
    return <View {...this.props} padding={10}/>
  }
}

export class Card extends Component {
  render() {
    let { style, ...props } = this.props
    return <Touch activeOpacity={0.8} onPress={this.props.onPress}>
      <Grid style={[styles.card, ...style]} {...props} />
    </Touch>
  }
}


export class Grid extends Component {
  render() {
    let {
      flex = 1,
      style,
      ...props
    } = this.props
    return <View style={{flex: flex, flexDirection: this.direction(), ...style}} {...props} />
  }

  direction() {
    var row = true;
    React.Children.forEach(this.props.children, function (child) {
      if(child && child.type == Col)
      row = false;
    })
    return !row ? 'row' : 'column';
  }
}
export class Col extends Component {
  render() {
    let {
      flex = 1,
      style,
      ...props
    } = this.props
    return <Grid style={{flex: flex, ...style}}  {...props} />
  }
}
export class Row extends Col {}
export class Header extends Row {}
export class Mid extends Row {}
export class Body extends Row {}
export class Footer extends Row {}
export class Block extends Row {}
export class Div extends Row {}

export class Screen extends Component {
  render() {
    let {
      safeAreaDisabled = false,
      scrollable = true
    } = this.props
    const content = scrollable ? <Scroll><View flex={1} {...this.props} /></Scroll> : <View flex={1} {...this.props} />
    const body = safeAreaDisabled ? content : <SafeArea flex={1}>{content}</SafeArea>
    return body
  }
}

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
