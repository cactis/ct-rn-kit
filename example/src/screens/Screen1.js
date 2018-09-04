import React, { PureComponent as Component } from 'react'
import { Grid, Col, Row, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Setting, Avatar, Label, Card, Head1, Head2, Head3, P } from '../../..'

import { BaseScreen } from './index'

const styles = Setting.styles

export class Screen1 extends Component {
  render() {
    const flex = 1.5
    return (
      <BaseScreen number='1'>
        <Grid>
          <Row style={{
            // zIndex: 900,
            flex: flex,
            marginTop: -300,
            ...styles.shadow }}>
            <Center><Avatar style={{}}/></Center>
          </Row>
          <Row flex={1} >
            <Grid margin={30} marginHorizontal={20} padding={20} marginTop={-120}
              style={{backgroundColor: 'white', borderRadius: 5, ...styles.shadow, ...styles.bordered}}
              >
                <Row style={{flex: 0}}>
                  <Col flex={1} alignItems='center'><Head1>LHR</Head1></Col>
                  <Col flex={1} alignItems='center'><Head1>JFK</Head1></Col>
                </Row>
                <Row style={{flex: 0}}><Label theme='Head2'/></Row>
                <Row style={{flex: 0}}><Label theme='Head3'/></Row>
                <Row style={{flex: 1}}>
                  <Scroll>
                    <P/>
                  </Scroll>
                </Row>
              </Grid>
            </Row>
          </Grid>
        </BaseScreen>
      )
  }
}
