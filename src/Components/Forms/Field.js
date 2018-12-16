import React, { PureComponent as Component } from 'react'

import ReactNative, { StyleSheet } from 'react-native'

import * as Inputs from './Inputs'

import * as T from '../../'

// var faker = require('faker')
var faker = require('faker')

export class Field extends Component {
  render() {
    let {
      title = faker.lorem.sentence(),
      placeholder = `請輸入${title}`,
      // height = 32,
      backgroundColor = 'white',
      padding = 10,
      type = 'TextInput',
      ...props
    } = this.props
    // let titleTag = title ? <GLabel color='#aaa'>{title}</GLabel> : null
    let InputTag = Inputs[type]
    return (
      <T.Row
        flex={0}
        style={{
          padding: padding,
          ...styles.field,
          backgroundColor: backgroundColor,
        }}
        {...props}
        onFocus={(event: Event) => {
          form._scrollToInput(ReactNative.findNodeHandle(event.target))
        }}
      >
        {title ? (
          <T.Row flex={0}>
            <T.Label theme="H6" style={styles.label}>
              {title}
            </T.Label>
            <T.Space size={2} />
          </T.Row>
        ) : null}
        <T.Row flex={0}>
          <InputTag
            ref="input"
            // height={height}
            // backgroundColor={backgroundColor}
            lineHeight={20}
            placeholder={placeholder}
            {...props}
          />
        </T.Row>
      </T.Row>
    )
  }
}

// import G from '../../config/g.js'
const styles = StyleSheet.create({
  field: {
    // borderWidth: 1
    paddingVertical: 10,
    marginBottom: 0,
    // ...G.styles.shadow,
    // ...G.styles.card,
    borderRadius: 5,
  },
  label: {
    color: '#333',
  },
})
