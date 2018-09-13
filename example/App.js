import React, { PureComponent as Component } from 'react';
import { Scroll, Center, Const, View, Grid } from '..'
import * as Screens from './src/screens'
import Library  from '..'
// global._debug = true

console.disableYellowBox = true
// console.reportErrorsAsExceptions = false;

export default class App extends Component<Props> {
  render() {
    return <Scroll horizontal pagingEnabled>
      {/* <Page><Screens.Screen11 /></Page>
      <Page><Screens.Screen10 /></Page>
      <Page><Screens.Screen9 /></Page>
      <Page><Screens.Screen8 /></Page>
      <Page><Screens.Screen7 /></Page> */}
      <Page><Screens.Screen6 /></Page>
      <Page><Screens.DocScreen /></Page>
      <Page><Screens.Screen5 /></Page>
      <Page><Screens.Screen4 /></Page>
      <Page><Screens.Screen3 /></Page>

      {/* <Page><Screens.Screen2 /></Page> */}
      {/* <Page><Screens.Screen1 /></Page> */}
    </Scroll>
  }
}

const Page = (props) => {
  return <Grid
    width={Const.size.screenWidth}
    height='100%' {...props}/>
  }
