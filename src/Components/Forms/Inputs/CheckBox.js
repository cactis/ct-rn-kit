import React from 'react'
import * as T from '../..'

export class CheckBox extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      underLine: true
    }
  }

  componentDidMount() {
    let { checked } = this.props
    if (checked !== undefined) {
      this.setState({ checked: checked })
    } else {
      __warning__('請為 checked 屬性設定 Boolean 值')
    }
  }
  _onPress = () => {
    let checked = !this.state.checked
    this.props.checked = checked
    this.setState({ checked: checked })
  }

  render() {
    let color = this.state.checked ? G.color.buttonPrimary : 'transparent'
    let underline = this.props.underlined ? 1 : 0
    return (
      <T.Touch onPress={this._onPress} activeOpacity={0.8}>
        <T.Row
          borderBottomWidth={underline}
          borderColor={G.color.line}
          padding={8}
          alignItems="center"
          flow="row"
        >
          <T.Icon
            onPress={this._onPress}
            name="000check"
            color={color}
            style={{
              borderColor: '#C0C0C8',
              borderWidth: 0.5,
              borderRadius: 2,
              fontSize: 20
            }}
          />
          <T.Space size={5} />
          <T.Label>{this.props.title}</T.Label>
        </T.Row>
      </T.Touch>
    )
  }
}
