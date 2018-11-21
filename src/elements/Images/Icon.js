import React from 'react'
// import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Space } from '../Layouts'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5Free'
// import FontAwesome5Meta from 'react-native-vector-icons/FontAwesome5Free_meta'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import Evil from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

export class Icon extends React.Component {

  iconSets = {
    FontAwesome: FontAwesome,
    // FontAwesome5: FontAwesome5,
    // FontAwesome5Meta: FontAwesome5Meta,
    Oct: Octicons,
    Feather: Feather,
    Foundation: Foundation,
    Evil: Evil,
    Material: Material,
    AntDesign: AntDesign,
    MaterialCommunity: MaterialCommunity,
    Entypo: Entypo,
    Ion: Ionicons,
    Zocial: Zocial,
    SimpleLine: SimpleLine,
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
    return <View flex={0}
      align='center'
      backgroundColor={backgroundColor}
      borderRadius={width / 2}
      width={width}
      height={height}
      {...props}
      >
      <TagName name={name}
        color={color}
        // style={{color: color}}
        size={size}
        {...props}
      />
      {/* <Space style={{position: 'absolute', backgroundColor: backgroundColor, width: '100%', height: '100%'}} borderRadius={width / 2} flex={1}></Space> */}
    </View>
  }
}
