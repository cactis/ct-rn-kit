import React, { PureComponent as Component } from 'react'

import { Image } from './Image'
  export class Avatar extends Component {
    render() {
      return <Image circled={true} {...this.props}/>
    }
  }
