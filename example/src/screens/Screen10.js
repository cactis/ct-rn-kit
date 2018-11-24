import React from 'react'
import { Text, Platform, Dimensions } from 'react-native'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/Components/Styles.js'

const uri =
  'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const doctor =
  'https://images.pexels.com/photos/355934/pexels-photo-355934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// let uri = 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen10 extends React.Component {
  render() {
    let h = Dimensions.get('window').height / (Platform.OS == 'ios' ? 3 : 4)
    return (
      <BaseScreen number={10}>
        <CT.Row>
          <CT.Row flex={0} height={h} xAlign="flex-end">
            <CT.ImageBackground
              uri={uri}
              blurRadius={Platform.OS == 'ios' ? 5 : 3}
            >
              <CT.Row backgroundColor="rgba(36,159,134,.76)">
                <CT.Float style={{ left: 120, bottom: 5 }} flow="row">
                  <TLabel theme="H1">
                    Jasmine C. <TLabel theme="H4">, 52</TLabel>
                  </TLabel>
                  <CT.Icon size={10} name="star" color="rgb(246,177,43)" />
                </CT.Float>
              </CT.Row>
            </CT.ImageBackground>
          </CT.Row>
          <CT.Row flex={1} backgroundColor="rgb(61,73,108)">
            <CT.Float>
              <TLabel theme="H7" style={{ left: 125, top: 5 }} />
            </CT.Float>
            <CT.Row marginTop={50}>
              <TList name="heart" color="rgba(228,68,131,1)" text="59" />
              <TList name="calendar" color="rgb(178,116,232)" text="8" />
              <TList name="trophy" color="rgb(237,194,12)" text="1,764" />
              <TList
                name="bar-chart"
                color="rgb(25,226,190)"
                text="7h43m"
                borderBottom={false}
              />
            </CT.Row>
          </CT.Row>
          <CT.Float style={{ top: h - 50, left: 10, zIndex: 1000 }}>
            <CT.Col flex={0} marginRight={10}>
              <CT.Avatar
                uri={doctor}
                size={100}
                borderWidth={3}
                borderColor="rgba(235,226,232,.91)"
              />
            </CT.Col>
          </CT.Float>
        </CT.Row>
        <TLabel
          color="rgba(255,255,255,.5)"
          theme="H1"
          style={{
            position: 'absolute',
            right: -70,
            top: 120,
            transform: [{ rotate: '90deg' }]
          }}
        >
          JacobLauritzen
        </TLabel>
      </BaseScreen>
    )
  }
}

const TLabel = props => <CT.Label color="white" {...props} />

const TList = props => {
  let { borderBottom = true } = props
  let borderBottomWidth = borderBottom ? 0.5 : 0
  return (
    <CT.Row paddingHorizontal={10}>
      <CT.Col xAlign="center" yAlign="center">
        <CT.Icon name={props.name} color={props.color} size={36} />
      </CT.Col>
      <CT.Col
        flex={6}
        borderColor="rgba(192,187,226,.75)"
        borderBottomWidth={borderBottomWidth}
      >
        <CT.Col flex={2} xAlign="center">
          <CT.Labels color="white" themes={['H4', 'H7']} />
        </CT.Col>
        <CT.Col
          xAlign="center"
          yAlign="flex-end"
          borderColor="rgba(192,187,226,.75)"
          borderBottomWidth={borderBottomWidth}
        >
          <TLabel theme="H5" style={{ fontFamily: 'GillSans' }} color="white">
            {props.text}
          </TLabel>
        </CT.Col>
      </CT.Col>
    </CT.Row>
  )
}
