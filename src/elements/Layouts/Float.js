import React, { PureComponent as Component } from 'react'

import { Space } from './Space'

// export class Float extends Component {
//
//   render() {
//     let {
//       float = true,
//       style,
//       ...props
//     } = this.props
//     // let floatStyle = float ? {position: 'absolute'} : {}
//     return <Space style={{
//       // ...floatStyle,
//       // bottom: 0,
//       // left: 0,
//       width: '100%',
//       ...style
//     }} {...props} />
//   }
//
// }

export class Float extends Component {
  render() {
    let { style, ...props } = this.props
    return <Space flex={0}
      style={{position: 'absolute',
      zIndex: 1000, ...style}} {...props}>
    </Space>
  }
}
