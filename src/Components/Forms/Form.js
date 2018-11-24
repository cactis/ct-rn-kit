import React, { PureComponent as Component } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as T from '..'

export class Form extends Component {
  constructor(props) {
    super(props)
    window.form = this
  }

  _scrollToInput(reactNode: any) {
    this.scroll?.scrollToFocusedInput(reactNode, 120)
  }

  render() {
    let {
      scrollable = true,
      backgroundColor = 'white',
      padding = 0,
      children = (
        <T.Div>
          <T.Field />
          <T.Field />
          <T.Submit />
        </T.Div>
      ),
      ...props
    } = this.props
    return scrollable ? (
      <KeyboardAwareScrollView
        flex={1}
        backgroundColor={backgroundColor}
        {...this.props}
        ref={ref => (this.scroll = ref)}
      >
        <T.Grid padding={padding} {...props}>
          {children}
        </T.Grid>
      </KeyboardAwareScrollView>
    ) : (
      <T.Grid flex={0} padding={padding} {...props}>
        {children}
      </T.Grid>
    )
  }
}
