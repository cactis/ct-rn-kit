import React, { PureComponent as Component } from 'react'

import { Image } from './Image'
  export class Avatar extends Component {
    render() {
      let { size = 80 } = this.props
      return <Image size={size} circled={true} {...this.props}/>
    }
  }
