import React, { PureComponent as Component } from 'react';

import * as Screens from './src/screens'
import Library  from '..'
// global._debug = true

console.disableYellowBox = true

type Props = {};

export default class App extends Component<Props> {

  render() {
    return <Screens.Screen6 />
  }
}
