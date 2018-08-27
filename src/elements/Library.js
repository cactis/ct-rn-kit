import React from 'react'
import _ from 'lodash'

import { AsyncStorage } from "react-native"

class Storage {

  static clearAll = (callback) => {
    AsyncStorage.clear(callback)
  }

  static set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      return  value
    } catch (error) {
      // log(error, 'Storage setItem error!')
    }
  }

  static get = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      }
    } catch (error) {
      // log(error, 'Storage getItem error!')
    }
  }
}

window.Storage = Storage

window.randId = () => {
  return String(_.random(99999999, 999999999))
}

window.asNumber = function(str) {
  str = str.replace(',', '')
  return parseInt(str)
}

window.alert = (message) => {
  prompt(message)
}

// type: success, warn, info, error
window.prompt = (message = "HI!") => {
  Alert.alert(message)
}

window.__warning__ = (message) => {
  prompt(message)
}

window.log = (...message) => {
  console.log(message)
  if (console.trace()) {
    console.log(console.trace())
  }
}

window.error = (...message) => {
  console.table(new Error(message))
}

window._autoRun = (who, run, always = false) => {

  if (global.who == who && (User.isLogin() || always)) {
    delayed(run)
  }
}

window.delayedTimer = undefined
window.delayed = (func, wait = 1000, ...args) => {
  clearTimeout(delayedTimer)
  setTimeout((args) => {
    func.apply(null, args)
  }, wait);
}

window.dummy = () => {}

global.debugStyle = {
  borderColor: '#333',
  margin: 1,
  borderWidth: 1,
}

window.drawBorders = (component) => {
  let DEBUG_STYLE = global.debugStyle
  if (!global._debug) return component.props.children
  let children = component.props.children
  return React.Children.map(children, (childNode) => {
    // if (typeof childNode === 'string')
    // return childNode
    if (childNode && typeof childNode.props.children === 'string')
    return React.cloneElement(childNode, DEBUG_STYLE, childNode);
    if (childNode) {
      return React.cloneElement(childNode, DEBUG_STYLE, drawBorders(childNode));
    }
  })
}
