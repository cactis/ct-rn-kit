import React, { PureComponent as Component } from 'react'
// import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Space } from '../Layouts'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Oct from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import Evil from 'react-native-vector-icons/EvilIcons'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ion from 'react-native-vector-icons/Ionicons'
// import SimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

export class Icon extends Component {

  iconSets = {
    FontAwesome: FontAwesome,
    Oct: Oct,
    Feather: Feather,
    Evil: Evil,
    Material: Material,
    MaterialCommunity: MaterialCommunity,
    Entypo: Entypo,
    Ion: Ion,
    Zocial: Zocial,
    // SimpleLine: SimpleLineIcons,
  }
  render() {
    let {
      name = 'angle-right',
      size = 16,
      ratio = (this.props.backgroundColor || this.props.style?.backgroundColor) ? 3 : 1,
      iconSize = size * ratio,
      color = '#333',
      width = iconSize,
      height = iconSize,
      backgroundColor = 'transparent',
      ...props
    } = this.props

    let key = (this.props.iconSet || 'FontAwesome').replace(/icons/ig, '')
    // log(key, 'key')
    const TagName = this.iconSets[key]
    return <View flex={0} layout='center'

      backgroundColor={backgroundColor}
      borderRadius={width / 2}
      width={width} height={height}
      {...props}
      >
      <TagName name={name}
        style={{color: color}}
        size={size}
        {...props}
      />
      {/* <Space style={{position: 'absolute', backgroundColor: backgroundColor, width: '100%', height: '100%'}} borderRadius={width / 2} flex={1}></Space> */}
    </View>
  }
}
