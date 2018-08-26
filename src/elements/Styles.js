import { StyleSheet, Platform } from 'react-native';
import { size, color } from './Constants.js'

let normalSize = size.normalSize

const styles = StyleSheet.create({
  title: {
    color: '#373535',
    fontSize: normalSize * 1.4,
    fontWeight: '500',
    lineHeight: normalSize * 1.5 * 1.2,
    marginVertical: normalSize / 3
  },
  subTitle: {
    color: '#222121',
    fontSize: normalSize * 1.2,
    fontWeight: '400',
    lineHeight: normalSize * 1.5 * 1.1,
    marginVertical: normalSize / 4
  },
  content: {
    color: '#434645',
    fontSize: normalSize,
    lineHeight: normalSize * 1.2,
    fontWeight: '300',
    marginBottom: normalSize
  },
  memo: {
    fontSize: normalSize * 0.9,
    color: '#292727',
    fontWeight: '200',
    lineHeight: normalSize * 0.9 * 1.5,
    // borderWidth: Dev._bw
  },
  header: {
    // flex: 1,
    backgroundColor: color.navigationColor,
    height: size.headerHeight,
    // tintColor: '#fff',
    width: '100%',
    // color: 'red'
  },
  page: {
    // backgroundColor: '#287F85'
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
    // borderWidth: 2,
  },
  card: {
    flex: 1,
    // margin: 8,

  },
  photo: {
    flex: 1,
    borderWidth: 0.2,
    borderStyle: 'solid',
    borderColor: "#CFC9C9",
    // shadowColor: "#000",
    width: size.screenWidth / 3,
    height: size.screenWidth / 3,
    backgroundColor: '#FBFBFA',
    borderRadius: 2,
  },

  cell: {
    flex: 1,
    // borderWidth: 1,
    padding: 10,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: '#DFD8D8'
  },
  box: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef"
  },
  shadow: {
    // elevation: 1,
    shadowColor: '#5E5958',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
  },
  full: {
    width: '100%',
    height: '100%'
  },
  tabBar: {
    backgroundColor: "#FFCC00"
  },
  bordered: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: "rgba(170,188,190,.8)",
    shadowColor: "rgba(98,83,83,.7)",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  safeArea: {
    flex: 1,
    height: size.headerHeight,
    backgroundColor: '#FFCC00'
  },
  font: {
      ...Platform.select({
        ios: {
          fontFamily: 'AmericanTypewriter-CondensedBold',
          fontFamily: 'Palatino-Bold',
          fontFamily: 'GillSans-Bold',
          fontFamily: 'KohinoorBangla-Semibold',
          fontFamily: 'Georgia',
          // color: 'red'
        },
        android: {
          fontFamily: 'monospace, Roboto, Noto Sans',
          // color: 'blue'
        },
      }),
    },
});
export default styles
