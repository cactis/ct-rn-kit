import React, { PureComponent as Component } from 'react'

import { Space } from './Space'

export class Float extends Component {

  render() {
    let {
      float = true,
      style,
      ...props
    } = this.props
    // let floatStyle = float ? {position: 'absolute'} : {}
    return <Space style={{
      // ...floatStyle,
      // bottom: 0,
      // left: 0,
      width: '100%',
      ...style
    }} {...props} />
  }

}
