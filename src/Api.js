import React, { Component, PureComponent } from 'react'
// import moment from 'moment'

// import User from './models/user.js'
// import Dev from '../development.js'

global.AppConfig = {
  Hosts: {
    example: 'http://example.com'
  }
}


// Settings = window.AppConfig.Hosts

export class Api {

  static get = async (url, params = {}) => {
    const queryString = objToQueryString(params);
    const _url = url //+ "?" + queryString
    let result = await Api.request('GET', _url, params)
    return result
  }

  static post = async (url, params = {}) => {
    return await Api.request('POST', url, params)
    // log('post end')
  }

  static request = async (method, url, params) => {
    let accessTokens = {} //await User.tokens()
    // const _url = Settings.host + url
    // log(_url, "_url")
    let _url
    if (url.includes('http')) {
      _url = url
    } else {

      if (url.includes('@')) {
        let [key, value] = url.split('@')
        let _url = key
        if (value) {
          _url = `${AppConfig.Hosts[key]}${value}`
        }
      } else {
        let value = url
        let defaultHost = AppConfig.Hosts['default']
        log(defaultHost, 'defaufltHost')
        _url = `${AppConfig.Hosts[defaultHost]}${value}`
      }
      log(_url, '_url')
      console.log(_url)
    }

    var response = {}
    const headers = {
      'Accept':       'application/json',
      'Content-Type': 'application/json',
      'Accesstokens':  accessTokens
    }
    // alert(_url)
    switch (method) {
      case 'GET':
      response = await fetch(_url, {
        headers: headers
      })
      break;
      case 'PUT':
      case 'POST':
      response = await fetch(_url, {
        method: method,
        headers: headers,
        body: JSON.stringify(params),
      })
      break;
      default:
    }
    // log(response, 'response in Api.js')
    const json = await response.json()
    // log(json, 'json in Api.js')
    if (json.alert !== undefined) {
      // alert(json.alert)
      return
    } else {
      return await json
    }
  }
}

function objToQueryString(obj) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keyValuePairs.join('&');
}

window.prompt = (message) => {
  alert(message)
}

window.log = (...message) => {
  console.log(message)
  // console.log(console.trace())
}

window.error = (...message) => {
  console.log(message)
}

window._autoRun = (who, run) => {
  setTimeout(() => {
    if (Dev.who == who) {
      run()
    }
  }, 1000);
}

window.dummy = () => {
  // log('dummy')
}

window.shortDate = (date) => {
  return moment(date).format('YYYY-MM-DD')
}

export default Api
