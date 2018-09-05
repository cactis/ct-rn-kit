import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from '../Layouts'

import { material } from 'react-native-typography'

import faker from "../../../vendors/faker.min.js"

import styles from './../Styles'

import * as Texts from './'

export class  Name extends Component {
  // log(props, '----------')
  components = {
    Head1: Texts.Head1,
    Head2: Texts.Head2,
    Head3: Texts.Head3,
    Head4: Texts.Head4,
    Head5: Texts.Head5,
    Head6: Texts.Head6,
    Head7: Texts.Head7,
    Head8: Texts.Head8,
    Head9: Texts.Head9,
  }

  render() {
    let {
      children = faker.company.companyName(),
      ...props
    } = this.props
    let TagName = this.components[this.props.theme || 'Head1']
    // let TagName = this.props.theme
    return <TagName {...props}>{children}</TagName>
  }
}
