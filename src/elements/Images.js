import React, { PureComponent as Component } from 'react'
import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Center } from './Layouts'

import { Setting } from './Constants'
import { Library } from './Library'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Octicons from 'react-native-vector-icons/Octicons'


export class Icon extends Component {

  iconSet = {
    FontAwesome: FontAwesome,
    Octicons: Octicons,
    Feather: Feather,
    EvilIcons: EvilIcons,
    MaterialCommunity: MaterialCommunity,
    Entypo: Entypo,
    // FontAwesome5: FontAwesome5
  }
  render() {
    let {
      name = 'plus',
      size = 20,
      color = '#333',
      backgroundColor = 'transparent',
      ...props
    } = this.props
    let _size = size * 1.5
    const TagName = this.iconSet[this.props.iconSet || 'FontAwesome']
    // const TagName = this.props.iconSet || 'FontAwesomeIcon'
    return <Center flex={0} backgroundColor={backgroundColor}
      borderRadius={_size / 2} width={_size} height={_size}>
      <TagName name={name}
        style={{color: color}}
        size={size}
        {...props}
      />
    </Center>
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
    let {
      size = '100%',
    } = this.props
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

export class Square extends Component {
  render() {
    let {
      size
    } = this.props
    return <View style={{width: size, height: size, borderWidth: 0.5, ...this.props.style}} />
  }
}

export class Photo extends Component {
  render() {
    return <Image {...this.props} />
  }
}

const SAMPLE_IMAGES = Library.sampleImages()
export class Image extends Component {
  render() {
    let {
      size = 300,
      uri = SAMPLE_IMAGES[0],
      style,
      ...props
    } = this.props
    log(style, 'style')
    return <RNImage {...props}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      source={{uri: uri}}
    />
  }
}
