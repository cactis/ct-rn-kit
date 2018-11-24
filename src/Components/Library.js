import React from 'react'
import _ from 'lodash'
import { View, Alert } from 'react-native'

import tinycolor from 'tinycolor2'

import { AsyncStorage } from 'react-native'

class Storage {
  static clearAll = callback => {
    AsyncStorage.clear(callback)
  }

  static set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      return value
    } catch (error) {
      // log(error, 'Storage setItem error!')
    }
  }

  static get = async key => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        return value
      }
    } catch (error) {
      // log(error, 'Storage getItem error!')
    }
  }
}

window.Storage = Storage

window.randId = (min = 99999999, max = 999999999) => {
  return _.random(min, max)
}

window.randKey = () => {
  return String(randId())
}

window.navigateTo = (navigation, route, params = {}) => {
  navigation.navigate(route, params)
}

export class Library {
  static sampleImages = (num = 10) => {
    return Array(num)
      .join()
      .split(',')
      .map(() => {
        let size = randId(1000, 1200)
        // console.log(size, 'size')
        // let url = `https://source.unsplash.com/${size}x${size}`
        let url = `https://picsum.photos/${size}/${size}/?random&${randId()}`
        // console.log(url, 'url')
        return url
      })
  }
}

window.asNumber = function(str) {
  str = str.replace(',', '')
  return parseInt(str)
}

window.alert = message => {
  Alert.alert(message)
  // prompt(message)
}

// type: success, warn, info, error
window.prompt = (message = 'HI!') => {
  Alert.alert(message)
}

window.__warning__ = message => {
  prompt(message)
}

window._trace = (key = randId()) => {
  _runOnce(key, () => {
    if (Dev.logTrace || Dev.componentTrace) console.log(new Error().stack)
  })
}

window.log = (...message) => {
  console.log(message)
  _trace()
  // if (console.trace()) {
  //   console.log(console.trace())
  // }
}

window.error = (...message) => {
  console.table(new Error(message))
}

window._trace = (key = randId()) => {
  _runOnce(key, () => {
    if (Dev.logTrace || Dev.componentTrace) console.log(new Error().stack)
  })
}

window._autoRun = (who, run, always = false) => {
  if (Dev.logAutorun) log(Dev.doIndex, who, Dev.do, 'doIndex, who, Dev.do')
  let DevWho = Dev.do
    .split('-')
    .slice(0, (Dev.doIndex || 99) + 1)
    .join('-')
  if (DevWho.includes(who) || always) {
    _runOnce(who + run, () => {
      delayed(run)
    })
  }
}

window._runOnce = (key, run) => {
  let _runOnce = global._runOnce || {}
  if (!_runOnce[key]) {
    global._runOnce[key] = true
    run()
  }
}

window.delayedTimer = undefined
window.delayed = (func, wait = 1000, ...args) => {
  clearTimeout(delayedTimer)
  delayedTimer = setTimeout(args => {
    func.apply(null, args)
  }, wait)
}

window.dummy = () => {}

global.debugStyle = {
  // borderColor: '#E20707',
  // margin: 1,
  borderWidth: 0.2 * 10
}

window.drawBorders = component => {
  let DEBUG_STYLE = global.debugStyle
  let dark = tinycolor(
    component.props.style?.backgroundColor ||
      component.props.backgroundColor ||
      '#fff'
  ).isDark()
  // log(dark, 'dark')
  DEBUG_STYLE.borderColor = dark ? 'rgb(232,110,110)' : 'rgb(170,170,170)'
  // log(component.props._)
  // if (!global._debug) return component.props.children
  if (!component.props._) return component.props.children
  let children = component.props.children
  return React.Children.map(children, childNode => {
    // if (typeof childNode === 'string')
    // return childNode
    if (childNode && typeof childNode.props.children === 'string')
      return React.cloneElement(<View />, DEBUG_STYLE, childNode)
    if (childNode) {
      return React.cloneElement(childNode, DEBUG_STYLE, drawBorders(childNode))
    }
  })
}
