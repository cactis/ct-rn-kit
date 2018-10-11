import React, { PureComponent as Component } from 'react'
import { Text as RNText, Platform } from 'react-native'

import faker from '../../../vendors/faker.min.js'

export class Text extends Component {

  render() {
    let {
      style,
      theme = 'H3',
      align = 'left',
      size,
      font = 'Helvetica',
      color,
      numberOfLines = 2,
      text,
      label,
      children = text || label || faker.commerce.productName(),
      ...props
    } = this.props
    let themeStyle = {...styles[theme]} //!!!
    color && themeStyle && (themeStyle.color = color)
    size && themeStyle && (themeStyle.fontSize = size)
    return <RNText
      // flex={1}
      numberOfLines={numberOfLines}
      style={{
        // alignSelf: 'flex-start',
        textAlign: align,
        fontFamily: font,
        textAlignVertical: 'bottom',
        // borderWidth: 1,
        ...textShadow,
        ...themeStyle,
        ...style,
      }}
      {...props}
      >
        {children}
      </RNText>
    }
  }

  const textShadow = {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -0.2, height: 0.2},
    textShadowRadius: 0.1
  }


  const styles = {
    H1: {
      fontSize: 26,
      // lineHeight: 36 * 1.5,
      fontWeight: 'bold',
      color: 'rgba(0,0,0,.93)'
    },
    H2: {
      fontSize: 24,
      // lineHeight: 24 * 1.5,
      fontWeight: '900',
      color: 'rgba(0,0,0,.9)'
    },
    H3: {
      fontSize: 22,
      // lineHeight: 22 * 1.5,
      fontWeight: '800',
      color: 'rgba(0,0,0,.85)'
    },
    H4: {
      fontSize: 20,
      // lineHeight: 20 * 1.5,
      fontWeight: '700',
      color: 'rgba(0,0,0,.80)'
    },
    H5: {
      fontSize: 18,
      // lineHeight: 18 * 1.5,
      fontWeight: '400',
      color: 'rgba(0,0,0,.80)'
    },
    H6: {
      fontSize: 16,
      // lineHeight: 16 * 1.5,
      fontWeight: '200',
      color: 'rgba(0,0,0,.75)'
    },
    H7: {
      fontSize: 14,
      // lineHeight: 14 * 1.5,
      fontWeight: '200',
      color: 'rgba(0,0,0,.70)'
    },
    H8: {
      fontSize: 12,
      // lineHeight: 12 * 1.5,
      fontWeight: '100',
      color: 'rgba(0,0,0,.70)'
    },
    H9: {
      fontSize: 10,
      // lineHeight: 10 * 1.5,
      fontWeight: '100',
      color: 'rgba(0,0,0,.70)'
    },
  }



  const IOS_FONTS = [
    'AcademyEngravedLetPlain',
    'AlNile',
    'AmericanTypewriter',
    'Arial',
    'Avenir-Book',
    'AvenirNext-Regular',
    'AvenirNextCondensed-Regular',
    'Baskerville',
    'BradleyHandITCTT-Bold',
    'ChalkboardSE-Regular',
    'Chalkduster',
    'Cochin',
    'Copperplate',
    'Courier',
    'DINAlternate-Bold',
    'DINCondensed-Bold',
    'Damascus',
    'DevanagariSangamMN',
    'Didot',
    'DiwanMishafi',
    'EuphemiaUCAS',
    'Farah',
    'Futura-Bold',
    'GeezaPro',
    'Georgia',
    'GillSans',
    'GujaratiSangamMN',
    'GurmukhiMN',
    'Helvetica',
    'HoeflerText-Regular',
    'Kailasa',
    'KannadaSangamMN',
    'Kefa-Regular',
    'KhmerSangamMN',
    'KohinoorTelugu-Regular',
    'LaoSangamMN',
    'MalayalamSangamMN',
    'MarkerFelt-Thin',
    'MarkerFelt-Wide',
    'Menlo-Regular',
    'MyanmarSangamMN',
    'Noteworthy-Light',
    'NotoNastaliqUrdu',
    'Optima-Regular',
    'OriyaSangamMN',
    'Palatino-Bold',
    'Palatino-Roman',
    'Papyrus',
    'PartyLetPlain',
    'PingFangHK-Regular',
    'Rockwell-Regular',
    'SavoyeLetPlain',
    'SinhalaSangamMN',
    'SnellRoundhand',
    'TamilSangamMN',
    'Thonburi',
    'TimesNewRomanPSMT',
    'TrebuchetMS',
    'Verdana',
    'ZapfDingbatsITC',
    'Zapfino',
  ]


  const ANDROID_FONTS = [
    'Roboto Thin',
    'Roboto Light',
    'Roboto Regular',
    'Roboto Bold',
    'Roboto Medium',
    'Roboto Black',
    'Roboto Condensed Light',
    'Roboto Condensed Regular',
    'Roboto Condensed Medium',
    'Roboto Condensed Bold',
    'Noto Serif',
    'Noto Serif Bold',
    'Droid Sans Mono',
    'Cutive Mono',
    'Coming Soon',
    'Dancing Script',
    'Dancing Script Bold',
    'Carrois Gothic SC'
  ]

    export const FontList = Platform.select({
      ios: IOS_FONTS,
      // ['Palatino-Bold', 'GillSans-Bold', 'AmericanTypewriter-CondensedBold', 'KohinoorBangla-Semibold', 'Didot', 'Georgia', 'HelveticaNeue', 'Kailasa', 'Zapfino', 'GillSans']
      // color: 'red'
      // android: ANDROID_FONTS
      android: ['Roboto', 'Serif Regular', 'Pacifico', 'monospace',, 'Noto Sans']
    })
