// import React from 'react'
// import { View } from 'react-native'
// import * as T from '../../..'
//
// import { RNCamera } from 'react-native-camera'
// // import ImagePicker from 'react-native-image-crop-picker'
//
// let camera
// export class PhotosInput extends React.PureComponent {
//   state = {
//     navigation: undefined,
//     photos: []
//   }
//
//   componentDidMount() {
//     let { photos, navigation, onChangePhotos } = this.props
//     if (!navigation) __warning__('PhotosInput 需要提供 navigation 屬性')
//     this.setState({ photos })
//
//     if (!onChangePhotos) __warning__('請為 PhotoInput 提供 onChangePhotos 屬性')
//     this.onChangePhotos = onChangePhotos
//
//     _autoRun('camera', () => {
//       this._openCameraScreen()
//     })
//   }
//
//   onChangePhotos = photos => {}
//
//   _openCameraScreen = async () => {
//     navigateTo(this.props.navigation, 'CameraScreen', {
//       photos: this.state.photos,
//       multiple: true,
//       onComplete: photos => {
//         this.setState({ photos: photos })
//         this.onChangePhotos(photos)
//       }
//     })
//   }
//
//   render() {
//     let size = 100
//     let { photos } = this.state
//     // log(photos, 'photos will be set ThumbsList in PhotosInput')
//     return (
//       <T.ThumbsList
//         // height={size}
//         onThumbPress={this.props.onThumbPress}
//         photos={photos}
//         ListHeaderComponent=<T.Row flow="row">
//           <CameraButton size={size - 10} onPress={this._openCameraScreen} />
//           <T.Space size={10} />
//         </T.Row>
//       />
//     )
//   }
//
//   componentWillUnmount() {}
// }
//
// const CameraButton = props => {
//   let { size } = props
//   return (
//     <T.Card style={{ width: size, height: size, overflow: 'hidden' }}>
//       <RNCamera
//         style={{ flex: 1 }}
//         ref={ref => {
//           camera = ref
//         }}
//       />
//       <T.Float
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           backgroundColor: 'transparent',
//           alignItems: 'center',
//           width: size,
//           height: size
//         }}
//       >
//         <T.Icon
//           name="031camera"
//           size={size / 2}
//           backgroundColor="transparent"
//           color="white"
//           onPress={props.onPress}
//         />
//       </T.Float>
//     </T.Card>
//   )
// }
