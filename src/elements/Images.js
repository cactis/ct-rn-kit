import React, { PureComponent as Component } from 'react'
import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Center } from './Layouts'

import { Setting } from './Constants'
import { Library } from './Library'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

export class Icon extends Component {

  iconSets = {
    FontAwesome: FontAwesome,
    Octicons: Octicons,
    Feather: Feather,
    EvilIcons: EvilIcons,
    MaterialCommunityIcons: MaterialCommunityIcons,
    Entypo: Entypo,
    Ionicons: Ionicons
    // FontAwesome5: FontAwesome5
  }
  render() {
    let {
      name = 'plus',
      size = 20,
      color = '#333',
      backgroundColor = 'transparent',
      ..._props
    } = this.props

    let { width = size * 1.5,
      height = size * 1.5,
      ...props } = _props

      const TagName = this.iconSets[this.props.iconSet || 'FontAwesome']
      // const TagName = this.props.iconSet || 'FontAwesomeIcon'
      return <Center flex={0} backgroundColor={backgroundColor}
        borderRadius={width / 2} width={width} height={height}>
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
        uri = 'https://picsum.photos/1000/1400/?random',
      } = this.props
      // log(uri, 'uri')
      // console.log(uri)
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
    render() {
      return <Image circled={true} {...this.props}/>
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
    state = {
      size: null,
      radius: null
    }

    _onLayout = (e) => {
      // if (this.state.size) return
      let { layout } = e.nativeEvent
      log(layout, 'layout')
      log(layout.width < layout.height, 'layout.width < layout.height')
      this.setState({
        size: layout.width < layout.height ? {width: layout.width} :  {height: layout.height},
        radius: e.nativeEvent.layout.height / 2
      })
    }

    render() {
      log(this.state.size, 'this.state.size')
      let {
        uri = SAMPLE_IMAGES[0],
        style,
        circled = false,
        radius = circled ? this.state.radius : 0,
        // height = 50,
        ...props
      } = this.props
      return <RNImage {...props}
        onLayout={this._onLayout}
        style={{
          width: '100%',
          height: '100%',
          ...this.state.size,
          borderRadius: radius,
          // height: height,
          aspectRatio: 1,
          ...this.props.style
        }}
        source={{uri: uri}}
      />
    }
  }
