import React, { PureComponent as Component } from 'react'
import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Center } from '../Layouts'

import { Setting } from '../Constants'
import { Library } from '../Library'

export * from './Icon'
export * from './Image'
export * from './Avatar'
export * from './ImageBackground'


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
        size,
        color = 'white',
      } = this.props
      return <Center style={{flex: 0, padding: size * 0, width: size, height: size, borderColor: color, borderWidth: 3, borderRadius: size / 2}} {...this.props}/>
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

  // export class Photo extends Component {
  //   render() {
  //     return <Image {...this.props} />
  //   }
  // }
