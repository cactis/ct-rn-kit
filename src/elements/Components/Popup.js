import React, { PureComponent as Component } from 'react'
import { Animated, ImageBackground } from 'react-native'
import { Page, Row, Touch, Icon, Text, Float} from '../../index.js'

import Styles from '../Styles'
export class Popup extends Component {

  state = {
    show: false,
    content: null,
    options: {
      flex: 1,
      title: '(標題)'
    }
  }

  show = (content, options, onClose) => {
    // e.preventDefault()
    this.setState({
      show: true,
      content: content,
      options: {...this.state.options, ...options}
    })

    onClose && (this.onClose = onClose)

    // delayed(() => {
    //   this.forceUpdate()
    // })
  }

  hide = () => {
    log()
    this.setState({show: false})
    this.onClose()
  }

  onClose = () => {}

  render() {
    let {
      show,
      content,
      options
    } = this.state
    let { flex, title } = options
    let _flex = iOS ? flex : flex * 0.8
    let popup = (
      <Float height={150}
        float={false}
        // style={style.container}
        {...this.props}
        // backgroundColor='rgba(45,47,45,.75)'
        >
        <Row
          padding={0}
          style={style.container}
          backgroundColor='transparent'>
          {/* <Row style={{flex: _flex}}>
            <Touch onPress={this.hide} flex={1} />
          </Row> */}
          <Row
            backgroundColor='white'
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            padding={25}
            // borderWidth={0.5}
            // borderColor='rgba(75,75,74,.81)'
            paddingTop={0}
            style={{...Styles.shadow}}
            >
            <Row align='center' flex={0} paddingVertical={30} paddingBottom={30}>
              <Text theme='H5' style={{fontWeight: '500'}}>{title}</Text>
            </Row>
            <Row flex={1}>
              {content}
            </Row>
            <Float top={-25} right={15}>
              <Icon color='rgb(255,168,0)'
                size={20}
                // borderColor='rgba(84,85,82,.81)'
                // borderWidth={0.5}
                onPress={this.hide}
                name='close'
                backgroundColor='rgba(255,255,255,1)'
                style={{...Styles.shadow}}
                // borderWidth={5}
                // borderColor='white'
                // style={{ ...Styles.shadow, borderWidth: 0.5}}
              />
            </Float>
          </Row>
        </Row>
      </Float>
    )
    return show ? popup : null
  }

}

const style = {
  container: {
    // position: 'absolute',
    flex: 1,
    height: '100%',
    bottom: 0,
    left: 0,
    // backgroundColor: 'rgba(77,74,70,.34)',
    blurRadius: 30,
    // zIndex: 1000,
    left: 0,
    justifyContent: 'flex-end',
    // borderWidth: 0.5,
    width: '100%',
    // height: 500,
  }
}
