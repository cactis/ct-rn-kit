import React, { PureComponent as Component } from 'react';

import { Scroll, Center, Const, View } from '..'
import * as Screens from './src/screens'

import Library  from '..'
// global._debug = true

console.disableYellowBox = true

type Props = {};

log(randId())
const Page = (props) => {
  return <View
    // backgroundColor='#0D1A10'
    width={Const.size.screenWidth}
    height='100%' {...props}/>
}

export default class App extends Component<Props> {

  render() {
    return <Scroll horizontal pagingEnabled>
      <Page><Screens.Screen6 /></Page>
      <Page><Screens.Screen5 /></Page>
      <Page><Screens.Screen4 /></Page>
      <Page><Screens.Screen3 /></Page>
      <Page><Screens.Screen2 /></Page>
      <Page><Screens.Screen1 /></Page>
    </Scroll>
  }
}
