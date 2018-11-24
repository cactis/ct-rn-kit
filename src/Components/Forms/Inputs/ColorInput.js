import React, { PureComponent as Component } from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'

import { Touch } from '../../Elements/Events/Touch'
import { Square } from '../../Elements/Shapes/Square'
import { View, RowRow } from '../../Elements/Layouts'

import tinycolor from 'tinycolor2'

export class ColorInput extends Component {
  state = {
    value: null
  }

  onChange = (value, i) => {
    log(value, 'value')
    this.setState({ value })
  }

  componentDidMount() {
    let { value } = this.props
    this.setState({ value })
  }

  render() {
    let { options, value, ...props } = this.props
    let borderRadius = 5
    let colors = options.map((color, i) => (
      <Touch key={i} onPress={() => this.onChange(color, i)}>
        <View
          height={40}
          selected={color == this.state.value}
          style={{
            marginRight: 5,
            overflow: 'hidden'
          }}
        >
          <Square
            backgroundColor={color}
            style={{
              borderRadius: borderRadius,
              borderWidth: color == this.state.value ? 3 : 0,
              borderColor: tinycolor(color)
                .darken(20)
                .toString()
              // ...style.unit,
            }}
            // borderRadius: borderRadius,
          />
        </View>
      </Touch>
    ))
    return <RowRow paddingVertical={10}>{colors}</RowRow>
  }
}

const style = StyleSheet.create({
  unit: {
    borderWidth: 0.5
  }
})
