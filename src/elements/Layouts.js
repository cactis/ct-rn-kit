import React, { PureComponent as Component } from 'react';
import { ScrollView, AsyncStorage, StatusBar, SafeAreaView, View as RNView} from 'react-native';


export class Grid extends Component {
  render() {
    return <View
      flex={1}
      flexDirection={this.direction()}
      {...this.props} />
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


export class SafeArea extends Component {
  render() {
    return <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}} flex={1} {...this.props} />
  }
}

export class View extends Component {
  render() {
    return <RNView {...this.props}></RNView>
  }
}

export class Center extends Component {
  render() {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} {...this.props}
    />
  }
}


export class Col extends Grid {}
export class Row extends Grid {}

// export default Grid
// export default Col
// module.exports = {
//   // RoundButton: RoundButton,
//   Grid, Col, View, SafeArea
//
// };
