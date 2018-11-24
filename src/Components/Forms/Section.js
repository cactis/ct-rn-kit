import React from 'react'
import { StyleSheet } from 'react-native'
import * as T from 'ct-rn-kit'

let _this
export class Section extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    _trace()
    _this = this
    this.autoRun()
  }

  render() {
    let { data } = this.state
    return <T.Row />
  }

  autoRun = () => {}
}
var styles = StyleSheet.create({})
