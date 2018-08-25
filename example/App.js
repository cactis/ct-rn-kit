import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

// import { RoundButton, Grid, Col } from 'ct-rn-kit'
import { Grid, Col, Row,  RoundButton, View, SafeArea, Center } from 'ct-rn-kit'

console.disableYellowBox = true

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <RoundButton/>
      <SafeArea>
        <Grid>
          <Col><Center><RoundButton/></Center></Col>
          <Col><Center><RoundButton/></Center></Col>
        </Grid>
        <Center>
          <RoundButton/>
        </Center>
      </SafeArea>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
