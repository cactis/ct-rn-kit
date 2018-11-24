import React, { PureComponent as Component } from 'react'
import { TextInput as PureRNTextInput, StyleSheet } from 'react-native'

export class TextInput extends Component {
  state = {
    value: null
  }

  componentDidMount() {
    let { onChangeText } = this.props
    if (onChangeText) {
      this.onChangeText = onChangeText
    } else {
      this.onChangeText()
    }
  }
  onChangeText = text => {
    __warning__('TextInput: 請設定 onChangeText 回呼屬性')
  }
  render() {
    let { multiline = false, value, ...props } = this.props
    return (
      <PureRNTextInput
        style={{
          ...style.textInput
          // multiline: true,
          // numberOfLines: 5
        }}
        multiline={multiline}
        ref={el => (this.input = el)}
        onChange={event => {
          let text = event.nativeEvent.text
          log(text, 'text')
          // this.onChangeText(text)
        }}
        // numberOfLines={5}
        // value={String(value)}
        value={value ? String(value) : ''}
        {...props}
      />
    )
  }
}

const style = StyleSheet.create({
  textInput: {
    padding: 0,
    textAlignVertical: 'top',
    // borderWidth: 1,
    fontSize: 15,
    lineHeight: 30
  }
})

export class RNTextInput extends PureRNTextInput {}
