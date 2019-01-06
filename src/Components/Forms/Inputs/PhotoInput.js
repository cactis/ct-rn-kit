import React, { PureComponent as Component } from 'react'
import { StyleSheet } from 'react-native'

// import { RNCamera } from 'react-native-camera'
// import ImagePicker from 'react-native-image-crop-picker'

import { Row, IconLabel, Label, Space, Float } from '../../'
import { Image, Icon } from '../../Elements/Images'
import { Touch } from '../../Elements/Events/Touch'

export class PhotoInput extends Component {
  state = {
    navigation: undefined,
    photos: [],
  }

  componentDidMount() {
    let {
      navigation,
      onChangePhoto,
      photos = [],
      beforeOpenCamera,
    } = this.props

    if (!navigation) __warning__('PhotoInput 需要提供 navigation 屬性')
    this.setState({ photos })

    if (!onChangePhoto) __warning__('請為 PhotoInput 提供 onChangePhoto 屬性')
    this.onChangePhoto = onChangePhoto

    _autoRun('autoShot', () => {
      this._openCameraScreen()
    })

    if (beforeOpenCamera) this.beforeOpenCamera = beforeOpenCamera
  }

  onChangePhoto = photo => {}
  beforeOpenCamera = () => {}

  _openCameraScreen = async () => {
    this.beforeOpenCamera()
    navigateTo(this.props.navigation, 'CameraScreen', {
      photos: this.state.photos,
      onComplete: photos => {
        this.setState({ photos })
        this.onChangePhoto(photos)
      },
    })
  }

  render() {
    let { text = '', iconSize = 50, editable, placeholderImage } = this.props
    let { photos } = this.state
    let photo = photos[0]
    let editButton = editable ? (
      <Float right={0} bottom={0}>
        <Icon
          onPress={this._openCameraScreen}
          backgroundColor="grey"
          color="white"
          size={13}
          name="069editu"
        />
      </Float>
    ) : null
    return !photo ? (
      placeholderImage ? (
        <Touch onPress={this._openCameraScreen}>
          <Row
            flex={0}
            style={{
              width: iconSize,
              height: iconSize,
              borderRadius: iconSize / 2,
              overflow: 'hidden',
            }}
          >
            {placeholderImage}
          </Row>
          {editButton}
        </Touch>
      ) : (
        <IconLabel
          alignSelf="flex-start"
          onPress={this._openCameraScreen}
          name="032gallery"
          iconSize={iconSize - 20}
          iconStyle={{
            // padding: 10,
            backgroundColor: 'white',
            borderWidth: 0.5,
          }}
          text={text}
        />
      )
    ) : (
      <Touch onPress={this._openCameraScreen}>
        <Row
          flex={0}
          flexDirection="row"
          alignItems="center"
          style={{
            padding: 0,
            width: iconSize,
            overflow: 'hidden',
            height: iconSize,
            borderRadius: iconSize / 2,
          }}
        >
          <Image
            style={{ width: iconSize, height: iconSize }}
            uri={photo.uri || photo.path || photo.small_file_url}
          />
          <Space />
          <Label color="#666">{text}</Label>
        </Row>
        {editButton}
      </Touch>
    )
  }
}

const style = StyleSheet.create({
  textInput: {
    padding: 0,
    // borderWidth: 1,
    fontSize: 15,
    lineHeight: 20,
  },
})
