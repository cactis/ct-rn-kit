import React, { PureComponent as Component } from 'react'
// import { ScrollView, ImageBackground as RNImageBackground, AsyncStorage, StatusBar, SafeAreaView, Image as RNImage} from 'react-native'
import { View, Center, Space } from '../Layouts'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import SimpleLine from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

export class Icon extends Component {

  iconSets = {
    FontAwesome: FontAwesome,
    Octicons: Octicons,
    Feather: Feather,
    EvilIcons: EvilIcons,
    MaterialCommunityIcons: MaterialCommunityIcons,
    Entypo: Entypo,
    Ionicons: Ionicons,
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

    const TagName = this.iconSets[this.props.iconSet || 'FontAwesome']
    return <Center flex={0}
      backgroundColor={backgroundColor}
      borderRadius={width / 2}
      width={width} height={height}>
      <TagName name={name}
        style={{color: color}}
        size={size}
        {...props}
      />
      {/* <Space style={{position: 'absolute', backgroundColor: backgroundColor, width: '100%', height: '100%'}} borderRadius={width / 2} flex={1}></Space> */}
    </Center>
  }
}
