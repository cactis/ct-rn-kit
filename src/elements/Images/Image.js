import React, { PureComponent as Component } from 'react'
import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'

import { Setting } from '../Constants'
import { Library } from '../Library'

const SAMPLE_IMAGES = Library.sampleImages()
export class Image extends Component {

  state = {
    size: null,
    radius: null
  }

  componentDidMount() {
    let { size } = this.props

    if (size) {
      this.setState({
        size: {width: size, height: size},
        radius: size / 2
      })
    }
  }

  _onLayout = (e) => {
    if (this.state.size) return

    let { layout } = e.nativeEvent
    // log(layout, 'layout')
    // log(layout.width < layout.height, 'layout.width < layout.height')
    this.setState({
      size: layout.width < layout.height ? {width: layout.width} :  {height: layout.height},
      radius: e.nativeEvent.layout.height / 2
    })
  }

  render() {
    // log(this.state.size, 'this.state.size')
    let {
      uri = SAMPLE_IMAGES[0],
      size,
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
