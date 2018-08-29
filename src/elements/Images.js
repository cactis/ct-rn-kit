import React, { PureComponent as Component } from 'react'
import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Center } from './Layouts'

import { Setting } from './Constants'

export class ImageBackground extends Component {
  render() {
    let {
      uri = 'https://picsum.photos/1000/1000/?random',
    } = this.props
    return <RNImageBackground style={{flex: 1}} {...this.props} source={{uri: uri}} />
  }
}

export class Circle extends Component {
  render() {
    let {
      size
    } = this.props
    return <Center style={{flex: 0, padding: size * 0, width: size, height: size, borderWidth: 3, borderRadius: size / 2}} {...this.props}/>
  }
}

export class Avatar extends Component {
  state = {}
  _onLayout = (e) => {
    if (this.state.radius) return
    this.setState({radius: e.nativeEvent.layout.height / 2})
  }

  render() {
    return <Image onLayout={this._onLayout}
      style={{
        height: '100%',
        aspectRatio: 1,
        borderRadius: this.state.radius
        , ...this.props.style
      }}
    />
  }
}

export class Image extends Component {

  render() {
    let {
      uri = 'https://picsum.photos/1000/1000/?random',
    } = this.props
    return <RNImage {...this.props} source={{uri: uri}}
      // style={{...this.props.style}}
    />
  }

}

export class Square extends Component {
  render() {
    let {
      size
    } = this.props
    return <View style={{width: size, height: size, borderWidth: 0.5, ...this.props.style}} />
  }
}

const SAMPLE_IMAGE = 'https://picsum.photos/1500/1500/?random'
export class Photo extends Component {
  render() {
    let {
      uri = `${SAMPLE_IMAGE}&${randId()}`,
      width = '150%',
      aspectRatio = 1
    } = this.props
    log(Setting, 'Setting')
    return <RNImage {...this.props} source={{uri: uri}}
      style={{
        // marginLeft: -1 * Setting.screenWidth / 2,
        // borderBottomRightRadius: Setting.screenWidth / 2,
        // borderBottomLeftRadius: Setting.screenWidth / 3,
        borderRadius: width / 2,
        marginTop: -1 * width / 2,
        // borderRadius: width / 2,
        width: width,
        aspectRatio: aspectRatio,
        ...this.props.style}}
      />
    }
  }
