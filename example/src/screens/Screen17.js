import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/Components/Styles'
import tinycolor from 'tinycolor2'

export class Screen17 extends React.Component {
  render() {
    return (
      <BaseScreen
        safeAreaDisabled={true}
        number={17}
        padding={20}
        backgroundColor="rgb(59,60,68)"
      >
        <CT.Space padding={20} />
        <CT.Row flex={1.2}>
          <CT.Col flex={2}>
            <CT.Text
              theme="H1"
              size={50}
              color="white"
            >{`New\nAccount`}</CT.Text>
          </CT.Col>
          <CT.Col align="center">
            <CT.Label color="white" theme="H1" size={40}>
              1<CT.Label color="rgb(250,250,250)"> / 2</CT.Label>
            </CT.Label>
            <CT.Label color="white" theme="H8" size={14}>
              STEPS
            </CT.Label>
          </CT.Col>
        </CT.Row>
        <CT.Row flex={1.3}>
          <CT.Col xAlign="center" flex={0} paddingRight={20}>
            <CT.Icon
              name="link"
              iconSet="Entypo"
              color="rgb(169,177,190)"
              size={40}
              backgroundColor="rgb(59,60,68)"
              borderWidth={5}
              borderColor="white"
            />
          </CT.Col>
          <CT.Col xAlign="center">
            <CT.Text
              color="rgb(178,179,191)"
              theme="H6"
            >{`Upload a profile picture\n(optional)`}</CT.Text>
          </CT.Col>
        </CT.Row>
        <CT.Row flex={2.5}>
          <Input title="NAME" value="Kevin Arleo" />
          <Input title="USER" value="keevarleo" />
          <CT.Label
            color="rgb(195,109,90)"
            theme="H5"
            style={{ alignSelf: 'center' }}
          >
            Username already in use.
          </CT.Label>
        </CT.Row>
        <CT.Row>
          <CT.Button
            theme="pill"
            title="Next"
            fontSize={30}
            titleColor="white"
            backgroundColor="rgb(19,14,19)"
            style={{ ...CT.Setting.styles.shadow }}
          />
          <CT.Space size={20} />
          <CT.Label
            color="rgb(230,246,236)"
            theme="H6"
            style={{ alignSelf: 'center' }}
          >
            Not the first time here?{' '}
            <CT.Label
              theme="H6"
              style={{ fontWeight: '900' }}
              color="rgb(139,144,171)"
            >
              Log In
            </CT.Label>
          </CT.Label>
        </CT.Row>
      </BaseScreen>
    )
  }
}

const Input = props => (
  <CT.Div margin={20} borderColor="rgba(217,163,25,.68)" borderBottomWidth={2}>
    <CT.Label color="rgba(255,255,255,.86)">{props.title}</CT.Label>
    <CT.Space size={8} />
    <CT.Label color="rgb(217,163,25)">{props.value}</CT.Label>
    <CT.Space size={8} />
  </CT.Div>
)
