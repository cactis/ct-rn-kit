import React, { Component } from 'react'
import * as T from 'ct-rn-kit'

window.Dev = { ...T.Dev }
console.disableYellowBox = true

import * as Screens from './src/screens'
// global._debug = true

// console.reportErrorsAsExceptions = false;

export default class App extends React.Component {
  render() {
    return (
      <T.Scroll horizontal pagingEnabled>
        {/* <Page><Screens.Screen18 /></Page> */}
        <Page>
          <Screens.Screen17 />
        </Page>
        <Page>
          <Screens.Screen16 />
        </Page>
        <Page>
          <Screens.Screen15 />
        </Page>
        <Page>
          <Screens.Screen14 />
        </Page>
        <Page>
          <Screens.Screen13 />
        </Page>
        <Page>
          <Screens.DocScreen />
        </Page>
        <Page>
          <Screens.Screen12 />
        </Page>
        <Page>
          <Screens.Screen11 />
        </Page>
        <Page>
          <Screens.Screen10 />
        </Page>
        <Page>
          <Screens.Screen9 />
        </Page>
        <Page>
          <Screens.Screen8 />
        </Page>
        <Page>
          <Screens.Screen7 />
        </Page>
        <Page>
          <Screens.Screen6 />
        </Page>
        <Page>
          <Screens.Screen5 />
        </Page>
        <Page>
          <Screens.Screen4 />
        </Page>
        <Page>
          <Screens.Screen3 />
        </Page>
        {/* <Page><Screens.Screen2 /></Page>
        <Page><Screens.Screen1 /></Page> */}
      </T.Scroll>
    )
  }
}

const Page = props => {
  return <T.Grid width={T.Const.size.screenWidth} height="100%" {...props} />
}
