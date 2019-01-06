import React from 'react'
import { ImageBackground as RNImageBackground } from 'react-native'

export class ImageBackground extends React.PureComponent {
  render() {
    let {
      placeholdered = true,
      source,
      uri = source && source.uri,
    } = this.props
    // log(source, 'source')
    // log(uri, 'uri')
    if (placeholdered && !uri) {
      uri = 'https://picsum.photos/1000/1400/?random'
    } else {
    }
    if (source && source.uri != null) {
      return (
        <RNImageBackground
          style={{ flex: 1 }}
          {...this.props}
          padding={50}
          source={source}
        />
      )
    } else if (uri) {
      return (
        <RNImageBackground
          style={{ flex: 1 }}
          {...this.props}
          padding={50}
          source={{ uri: uri }}
        />
      )
    } else {
      return (
        <RNImageBackground style={{ flex: 1 }} {...this.props} padding={50} />
      )
    }
  }
}
