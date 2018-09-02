import React, { PureComponent as Component } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Grid, Col, Row, Header, Body, Mid, Block as CTBlock, Footer, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Icon, Text, Label, Setting, Avatar, Circle, Card, Head1, Head2, Head3, Head4, Head5, Head6, Head7, Head8, Head9, P, Button, List, Library, Image, Space, Const, Time, Name as CTName, Texts, Names, Author, IconLabel } from '../../..'
import { BaseScreen } from './index'

const styles = Setting.styles

// const Name = (props) => <CTName {...props} color='white' />
const Block = (props) =>  <CTBlock {...props} padding={30}/>

export class Screen5 extends Component {
  render() {
    return <BaseScreen scrollable={false} number='5'>
      <Block backgroundColor='rgba(240,22,19,.80)'>
        <Row paddingTop={30}>
          <Label theme='Head7' color='white'>BOOK</Label>
        </Row>
        <Row flex={4}>
          <Names color='white' themes={['Head1', 'Head8']} justifyContent='flex-start' />
        </Row>
        <Row>
          <Author height={60} />
        </Row>
      </Block>
      <Block backgroundColor='#373839'>
        <Row>
          <Author height={60} />
        </Row>
        <Row flex={3} justifyContent='flex-end'>
          <Row flex={0} height={80}>
            <IconLabel icon={<Icon iconSet='Octicons' name='comment' color='white' size={40} width={40} />}
            label={<Label color='white' theme='Head8'>Book Comments</Label>}
            >
              <Label style={{position: 'absolute', textAlign: 'center', width: 40, color: '#FB6969', top: 18}} theme='Head9'>1,335</Label>
            </IconLabel>
          </Row>
        </Row>
      </Block>
    </BaseScreen>
  }
}
