import React from 'react'
import { View } from 'react-native'
import * as T from '../../..'

export class ThumbItem extends React.PureComponent {
  state = {
    // sortId: " "
    data: undefined
  }
  componentDidMount() {
    let { onPress, data } = this.props
    onPress && (this.onPress = onPress)
    this.setState({ data })
    _autoRun('autoShot', () => {
      data.checkedId = 1
      this.setState({ data })
    })
  }

  componentWillReceiveProps(nextProps) {
    let { data } = nextProps
    this.setState({ data })
  }

  onPress = (item, index) => {
    log(item, index, 'item, index in ThumbItem.js#onPress')
  }

  onCheck = (item, index) => {
    this.props.onCheck(item, index)
  }

  render() {
    let { size, index, checkable } = this.props
    let { data } = this.state
    let s = size / 3.5
    let checkButton =
      !data || !checkable ? null : (
        <T.Float
          style={{
            top: 5,
            right: 5
          }}
        >
          <T.Touch flex={1} onPress={_ => this.onCheck(data, index)}>
            <T.Div
              style={{
                width: s,
                height: s,
                borderRadius: s / 2,
                backgroundColor: 'rgb(101,211,240)',
                borderWidth: 2,
                borderColor: 'white',
                padding: 0
              }}
              align="center"
            >
              <T.Label
                flex={1}
                color="white"
                theme="H1"
                text={data.checkedId}
                style={{ fontWeight: '900' }}
                size={s / 1.5}
              />
            </T.Div>
          </T.Touch>
        </T.Float>
      )
    return !data ? null : (
      <T.Card
        style={{
          width: size,
          height: size,
          overflow: 'hidden'
        }}
      >
        {checkButton}
        <T.Touch onPress={_ => this.onPress(data, index)}>
          <T.Image
            size={size}
            uri={data.uri || data.path || data.thumb_file_url}
          />
        </T.Touch>
      </T.Card>
    )
  }
}
