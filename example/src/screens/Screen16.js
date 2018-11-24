import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/Components/Styles'
import tinycolor from 'tinycolor2'

const BG =
  'https://images.pexels.com/photos/207985/pexels-photo-207985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen16 extends React.Component {
  render() {
    return (
      <BaseScreen
        safeAreaDisabled={true}
        number={16}
        backgroundColor="rgb(21,22,20)"
      >
        <CT.Row paddingTop={50} align="center">
          <CT.Div flex={0} flow="row" align="center">
            <CT.Icon color="rgb(18,151,208)" size={20} name="angle-left" />
            <CT.Space />
            <TheLabel text="LEEADEERBOARD" />
            <CT.Space />
            <CT.Icon color="rgb(18,151,208)" size={20} />
          </CT.Div>
          <CT.Space />
          <CT.Div flex={0}>
            <TheLabel theme="H8" text="OCTOBER 2018" />
          </CT.Div>
        </CT.Row>
        <CT.Line color="white" size={0.5} />
        <CT.Row flex={8} padding={20}>
          <CT.Row flex={1.2}>
            <CT.Col align="center">
              <TheLabel text="3RD" theme="H1" size={30} />
              <TheLabel text="PLACE" theme="H7" />
            </CT.Col>
            <CT.Col align="center">
              <TheLabel text="2.2K" theme="H1" size={30} />
              <TheLabel text="FROM 1st PLACE" theme="H7" />
            </CT.Col>
          </CT.Row>
          <CT.Row flex={1.2} flow="row" align="center">
            <Square text="DISTANCE" color="rgb(71,206,244)" />
            <Square text="TIME" />
            <Square text="PLACE" />
            <Square text="CALS" />
          </CT.Row>
          <CT.Row flex={7}>
            <CT.List
              flex={1}
              renderItem={_ => (
                <CT.Cell flex={1} backgroundColor="transparent">
                  <CT.Col flex={0}>
                    <TheLabel theme="H6" text="1." />
                  </CT.Col>
                  <CT.Space size={10} />
                  <CT.Col>
                    <TheLabel theme="H6" />
                  </CT.Col>
                  <CT.Space />
                  <CT.Col flex={0}>
                    <TheLabel theme="H6" text="500ML" />
                  </CT.Col>
                </CT.Cell>
              )}
            />
          </CT.Row>
        </CT.Row>
        <CT.Row align="center" paddingBottom={20}>
          <CT.Button
            title="GLOBAL LEADEERBOARD"
            backgroundColor="rgb(71,206,244)"
            padding={18}
            style={{ borderRadius: 30 }}
            fontSize={14}
          />
        </CT.Row>
      </BaseScreen>
    )
  }
}

const TheLabel = props => <CT.Label color="white" {...props} />

const Square = props => {
  let { color = 'white' } = props
  return (
    <CT.Div
      flex={0}
      width={80}
      align="center"
      padding={8}
      borderColor={color}
      borderWidth={0.5}
      {...props}
    >
      <TheLabel text={props.text} theme="H8" color={color} {...props.chidren} />
    </CT.Div>
  )
}
