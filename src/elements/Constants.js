import { Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width
let headerHeight = Platform.OS === 'ios' ? 44 : 46;
let footerHeight = 55;
let normalSize = screenWidth / (screenWidth > 500 ? 36 : 30)
let mainColor = 'hsla(261,12%,31%,1)'
let padding = 8

window.iOS = () => Platform.OS == 'ios'

export const size = {
  normalSize: normalSize,
  padding: padding,
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  sideMenuWidth: screenWidth / 3 * 2,
  viewPadding: 15,
  defaultSpacer: 10,
  screenHeight: screenWidth,
  screenWidth: screenWidth,
  helfScreenWidth: screenWidth / 2,
  // divider: {backgroundColor: colors.smoke},
  baseImageStyle: {flex: 1, width: undefined, height: undefined}
};

export const color = {
  navigationColor: mainColor,
  titleColor: '#FFF',
  tabColor: mainColor,
  tabInactiveColor: '#98939D',
}

export const Const = {
  color: color,
  size: size
}
