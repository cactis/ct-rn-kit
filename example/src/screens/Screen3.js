import React, { PureComponent as Component } from 'react'
import { Grid, Col, Row, Header, Body, Footer, Screen, Page, Square, Padding,  ImageBackground,  View, SafeArea, Scroll, Center, Photo, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, P } from '../../..'
import { BaseScreen } from './index'

const styles = Setting.styles

export class Screen3 extends Component {
  render() {
    return <BaseScreen number='3'>
      <ImageBackground>
        <Header style={{flex: 4.5, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Circle size={80}><Head1 style={{fontSize: 40}}>Q</Head1></Circle>
        </Header>
        <Body style={{flex: 0, padding: 20, margin: 30, backgroundColor: 'rgba(255,255,255,.41)'}}>
          <Head3 numberOfLines={4} style={{textAlign: 'center', fontWeight: '200', color: '#000', ...styles.textShadow1}}/>
        </Body>
        <Footer style={{flex: 9, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 20}}>
          <Row style={{flex: 0, backgroundColor: 'rgba(25,26,27,1)', borderRadius: 1}}>
            <Label theme='Head5' style={{color: 'white', padding: 10}} />
          </Row>
        </Footer>
      </ImageBackground>
    </BaseScreen>
  }
}
