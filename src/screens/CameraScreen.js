// import React from 'react'
// import { RNCamera } from 'react-native-camera'
// import ImagePicker from 'react-native-image-crop-picker'
//
// import * as T from 'ct-rn-kit'
//
// export class CameraScreen extends React.PureComponent {
//   state = {
//     photos: [],
//     previewData: undefined,
//     multiple: false,
//     onComplete: () => {}
//   }
//
//   componentDidMount() {
//     let {
//       photos = [],
//       multiple = false,
//       onComplete
//     } = this.props.navigation.state.params
//     if (onComplete) {
//       this.setState({ photos, multiple })
//     } else {
//       __warning__('CameraScreen 需要設定 onComplete 回呼函數')
//     }
//
//     if (isSimulator()) {
//       delayed(() => {
//         this.setState({ cameraReady: true })
//       })
//     }
//
//     _autoRun('autoShot', () => {
//       let { multiple } = this.state
//       this.takePicture()
//       if (multiple) {
//         this.takePicture()
//         // this.takePicture()
//         // this.takePicture()
//       }
//       delayed(() => {
//         _autoRun('submit', () => {
//           this.onComplete()
//         })
//       }, 3000)
//     })
//   }
//
//   onCancel = () => {
//     this.props.navigation.goBack()
//   }
//
//   onComplete = () => {
//     let { photos, multiple } = this.state
//     // log(photos, 'photos 00000000000000000')
//     if (multiple) {
//       photos = photos.filter(pho => pho.checkedId)
//       photos = _.sortBy(photos, 'checkedId')
//     }
//     this.props.navigation.state.params.onComplete(photos)
//     this.onCancel()
//   }
//
//   openAlbum = async () => {
//     let { multiple } = this.state
//     ImagePicker.openPicker({
//       multiple: multiple,
//       compressImageQuality: 0.5,
//       cropping: true,
//       includeBase64: true
//     }).then(result => {
//       let photos = []
//       let previewData
//       let _photos = []
//       if (multiple) {
//         photos = result.reverse()
//         _photos = [...photos, ...this.state.photos]
//       } else {
//         _photos = [result]
//       }
//       this.setState({ photos: _photos })
//       delayed(() => {
//         result.forEach((_, i) => {
//           let index = result.length - i - 1
//           this.thumbsList.onCheck(null, index)
//         })
//       })
//     })
//   }
//
//   takePicture = async () => {
//     if (this.state.previewData) {
//       this.setState({ cameraReady: true, previewData: undefined })
//       return
//     }
//     this.setState({ cameraReady: false })
//     try {
//       const options = {
//         quality: 0.5,
//         base64: true
//       }
//       const photo = await this.camera.takePictureAsync(options)
//       let _photos = []
//       if (this.state.multiple) {
//         _photos = [photo, ...this.state.photos]
//       } else {
//         _photos = [photo]
//       }
//       this.setState({ photos: _photos, previewData: photo })
//       delayed(() => {
//         this.thumbsList.onCheck(null, 0)
//       }, 500)
//     } catch (e) {
//       log(e, 'err')
//     } finally {
//       this.setState({ cameraReady: true })
//     }
//   }
//
//   _cameraReady = () => {
//     this.setState({ cameraReady: true })
//   }
//
//   onThumbPress = (data, index) => {
//     // log(data, index, 'data, index in CameraScreen')
//     this.setState({ previewData: data })
//   }
//
//   render() {
//     // log('render')
//     const cameraHeight = T.size.screenWidth * (T.iOS ? 1 : 0.8)
//     const enabledColor = T.color.buttonPrimary
//     let { cameraReady, previewData, photos } = this.state
//     let cameraView = previewData ? (
//       <T.Image
//         flex={1}
//         source={{
//           uri: previewData.uri || previewData.path || previewData.file_url
//         }}
//         placeholdered={false}
//       />
//     ) : (
//       <RNCamera
//         onCameraReady={this._cameraReady}
//         height={cameraHeight - (T.iOS ? 0 : 190)}
//         ref={cam => {
//           this.camera = cam
//         }}
//       />
//     )
//     return (
//       <T.Grid>
//         <T.Row flex={0} height={cameraHeight}>
//           {cameraView}
//           <T.Float style={{ right: 20, top: 20 }}>
//             <T.SafeArea flex={0}>
//               <T.Icon
//                 name="camera"
//                 size={30}
//                 color="white"
//                 onPress={this.onCancel}
//               />
//             </T.SafeArea>
//           </T.Float>
//         </T.Row>
//         <T.Row flex={0}>
//           <T.ThumbsList
//             ref={c => (this.thumbsList = c)}
//             checkable={true}
//             photos={photos}
//             onThumbPress={this.onThumbPress}
//           />
//         </T.Row>
//         <T.Row xAlign="center">
//           <T.Col align="center">
//             <T.Icon
//               disabled={!cameraReady}
//               name="camera"
//               size={30}
//               onPress={this.openAlbum}
//             />
//           </T.Col>
//           <T.Col align="center">
//             <T.Icon
//               disabled={!cameraReady}
//               name={this.state.previewData ? 'camera' : 'camera'}
//               size={T.size.screenWidth * 0.125}
//               backgroundColor={enabledColor}
//               onPress={this.takePicture}
//             />
//           </T.Col>
//           <T.Col align="center">
//             <T.Icon
//               disabled={!cameraReady}
//               name="camera"
//               size={30}
//               onPress={this.onComplete}
//             />
//           </T.Col>
//         </T.Row>
//       </T.Grid>
//     )
//   }
// }
