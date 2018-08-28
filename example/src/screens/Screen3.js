import React, { PureComponent as Component } from 'react'
import { Grid, Col, Row, Header, Body, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Text, Label, Setting, Avatar, Circle, Card, H1, H2, H3, P } from '../../..'
import { BaseScreen } from './index'

const styles = Setting.styles

export class Screen3 extends Component {
  render() {
    return <BaseScreen number='3'>
      <Photo style={{position: 'absolute', height: '100%', width: '100%'}}/>
      <Header style={{flex: 4.5, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Circle size={70}><H1 style={{fontSize: 30}}>M</H1></Circle>
      </Header>
      <Body style={{flex: 4, paddingHorizontal: 30}}>
        <H1 style={{fontSize: 30, numberOfLines: 4, textAlign: 'center', ...styles.textShadow}}/>
      </Body>
      <Footer style={{flex: 9, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20}}>
        <Row style={{flex: 0, backgroundColor: 'rgba(25,26,27,1)', borderRadius: 1}}>
          <Label style={{color: 'white', padding: 10}} />
        </Row>
      </Footer>
    </BaseScreen>
  }
}
