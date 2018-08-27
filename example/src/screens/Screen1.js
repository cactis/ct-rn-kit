import React, { PureComponent as Component } from 'react'
import { Grid, Col, Row, Screen, Page, Square, Padding,  RoundButton, View, SafeArea, Scroll, Center, Photo, Setting, Avatar, Card, H1, H2, H3, P } from '../../..'

console.log(Setting, 'Setting')
console.log(Grid, 'Grid')
const styles = Setting.styles

export class Screen1 extends Component {
  render() {
  //   return <Grid/>
  // }
  // render1() {
    const flex = 1.5
    return (
      <Screen safeAreaDisabled={true}>
        <Grid>
          <Row style={{
            // zIndex: 900,
            flex: flex,
            marginTop: -300,
            ...styles.shadow }}>
            <Center><Avatar style={{...styles.shadow, ...styles.bordered}}/></Center>
          </Row>
          <Row flex={1} >
            <Grid margin={30} marginHorizontal={20} padding={20} marginTop={-120}
              style={{backgroundColor: 'white', borderRadius: 5, ...styles.shadow, ...styles.bordered}}
              >
                <Row style={{flex: 0}}>
                  <Col flex={1} alignItems='center'><H1>LHR</H1></Col>
                  <Col flex={1} alignItems='center'><H1>JFK</H1></Col>
                </Row>
                <Row style={{flex: 0}}><H2/></Row>
                <Row style={{flex: 0}}><H3/></Row>
                <Row style={{flex: 1}}>
                  <Scroll>
                    <P/>
                  </Scroll>
                </Row>
              </Grid>
            </Row>
          </Grid>
        </Screen>
      );
  }
}
