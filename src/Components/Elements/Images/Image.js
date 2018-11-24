import React from 'react'
import {
  ScrollView,
  ImageBackground as RNImageBackground,
  AsyncStorage,
  StatusBar,
  SafeAreaView,
  Image as RNImage
} from 'react-native'

import { Setting } from '../../Constants'
import { Library } from '../../Library'
import { Grid } from '../Layouts'

const SAMPLE_IMAGES = Library.sampleImages()
export class Image extends React.Component {
  state = {
    size: null,
    radius: null
  }

  componentDidMount() {
    let { size } = this.props

    if (size) {
      this.setState({
        size: { width: size, height: size },
        radius: size / 2
      })
    }
  }

  _onLayout = e => {
    if (this.state.size) return

    let { layout } = e.nativeEvent
    // log(layout, 'layout')
    // log(layout.width < layout.height, 'layout.width < layout.height')
    this.setState({
      size:
        layout.width < layout.height
          ? { width: layout.width }
          : { height: layout.height },
      radius: e.nativeEvent.layout.height / 2
    })
  }

  render() {
    // log(this.state.size, 'this.state.size')
    let {
      uri = SAMPLE_IMAGES[0],
      size,
      width = size || '100%',
      height,
      aspectRatio,
      style,
      circled = false,
      radius = circled ? this.state.radius : 0,
      // height = 50,
      ...props
    } = this.props
    let aspectRatioStyle = height ? {} : { aspectRatio: 1 }
    if (aspectRatio) aspectRatioStyle.aspectRatio = aspectRatio
    return (
      // <Grid
      // overflow='hidden'
      // width={width}
      // borderRadius={radius}
      // aspectRatio={aspectRatio}>
      <RNImage
        {...props}
        onLayout={this._onLayout}
        // flex={1}
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          // ...this.state.size,
          // height: height,
          resizeMode: 'cover',
          // aspectRatio: 1,
          ...aspectRatioStyle,
          ...style
        }}
        source={{ uri: uri }}
      />
      // </Grid>
    )
  }
}
