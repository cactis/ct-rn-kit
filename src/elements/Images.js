import React, { PureComponent as Component } from 'react'
import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Center } from './Layouts'

import { Setting } from './Constants'
import { Library } from './Library'

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export class Icon extends Component {
  render() {
    let {
      name = 'twitter',
      size = 20,
      color = '#fff',
      ...props
    } = this.props
    return <FontAwesomeIcon name={name} style={{color: color}}  size={size} {...props} />
  }
}

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
    let { size = '100%' } = this.props
    return <Image onLayout={this._onLayout}
      style={{
        height: size,
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
      size = 300,
      uri = 'https://picsum.photos/1000/1000/?random',
      style,
      ...props
    } = this.props
    return <RNImage {...props} style={{
      width: size,
      height: size,
      ...style,
    }}
    source={{uri: uri}}
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

const SAMPLE_IMAGES = Library.sampleImages()
export class Photo extends Component {
  render() {
    let {
      uri = `${SAMPLE_IMAGES[0]}&${randId()}`,
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
