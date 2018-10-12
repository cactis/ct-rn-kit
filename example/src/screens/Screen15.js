import React, { PureComponent as Component } from 'react'
import {Dimensions, FlatList, Image } from 'react-native'
import * as CT from '../../..'
import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles'
import tinycolor from '../../../vendors/tinycolor-min.js'

const BG = 'https://images.pexels.com/photos/207985/pexels-photo-207985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen15 extends Component {
  render() {
    return <CT.ImageBackground uri={BG}>
      {/* <CT.SafeArea style={{backgroundColor: 'rgba(209,203,203,.12)'}}> */}
      <BaseScreen safeAreaDisabled={true} number={15}>
        <CT.Row flex={2}>
          <CT.Col flex={2}>
            <CT.Row xAlign='flex-end'>
              <CT.Labels paddingLeft={20} font='PingFang HK' color='white' texts={['Good Morning', 'Mr. Andrew Smith']} size={24} themes={['H5', 'H5']} />
            </CT.Row>
            <CT.Space size={30} />
            <CT.Row layout='row' paddingLeft={20}>
              <CT.Label theme='H5' color='white' font='Helvetica' size={100}>78</CT.Label>
              <CT.Label color='white' font='Palatino' text='˚' size={80} />
              <CT.Space size={10} />
              <CT.Icon color='white' name='cloud-lightning' iconSet='Feather' size={60} />
            </CT.Row>
          </CT.Col>
          <CT.Col>
            <IR><IL text='Center' name='feather' /></IR>
            <IR><IL text='Finder' name='globe'/></IR>
          </CT.Col>
        </CT.Row>
        <CT.Row layout='row'>
          <IR><IL text='Finder' name='map' /></IR>
          <IR><IL text='Assistance' name='moon' /></IR>
          <IR><IL text='Manual' name='paperclip' /></IR>
        </CT.Row>
        <CT.Row layout='row'>
          <IR><IL text='Lincoln Support' name='grid' /></IR>
          <IR><IL text='Locate a Dealer' name='home' /></IR>
          <IR><IL text='News' name='inbox' /></IR>
        </CT.Row>
      </BaseScreen>
      {/* </CT.SafeArea> */}
    </CT.ImageBackground>
  }
}

const IR = (props) => <CT.Row
  padding={10}
  align='center'
  style={{
    borderWidth: 0.2,
    backgroundColor: 'rgba(236,236,236,.15)'
  }} {...props}
/>

const IL = (props) =>  <CT.IconLabel
  layout='column'
  iconSize={40}
  color='#000'
  labelSize={20}
  numberOfLines={2}
  iconSet='Feather'
  style={{textAlign: 'center', justifyContent: 'space-between'}} {...props}
/>
