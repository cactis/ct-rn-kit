import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

import { Grid, Col, Row, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Setting, Avatar, Card, H1, H2, H3, P } from 'ct-rn-kit'

console.disableYellowBox = true
// global._debug = true

const styles = Setting.styles

type Props = {};
export default class App extends Component<Props> {
  render() {
    log(Setting, 'Setting')
    const flex = 1.5
    return (
      // <RoundButton/>
      <Screen safeAreaDisabled={true}>
        <Grid>
          <Row style={{
            flex: flex,
            marginTop: -300,
            ...styles.shadow }} >
            <Center><Avatar style={styles.shadow}/></Center>
            {/* <Avatar/> */}
          </Row>
          <Row flex={1} >
            <Grid margin={50} marginHorizontal={20} padding={20} marginTop={-150}
              style={{backgroundColor: 'white', borderRadius: 5, zIndex: 100, ...styles.shadow, ...styles.bordered}}
              >
                <Row style={{flex: 0}}>
                  <Col flex={1} alignItems='center'><H1>LHR</H1></Col>
                  <Col flex={1} alignItems='center'><H1>JFK</H1></Col>
                </Row>
                <Row style={{flex: 0}}><H2 /></Row>
                <Row style={{flex: 0}}><H3 /></Row>
                <Row style={{flex: 1}}>
                  <Scroll>
                    <P/>
                  </Scroll>
                </Row>
              </Grid>
            </Row>

          </Grid>
          {/* <Center>
            <RoundButton/>
          </Center> */}
        </Screen>
      );
    }
  }
