import React, { PureComponent as Component } from 'react'
import * as CT from '../../..'
import { BaseScreen } from './'

// const Name = (props) => <CTName {...props} color='white' />
const Block = (props) =>  <CT.Row {...props} padding={30}/>

export class Screen5 extends Component {
  render() {
    return <BaseScreen scrollable={false} number='5'>
      <Block backgroundColor='rgba(240,22,19,.80)'>
        <CT.Row paddingTop={30}>
          <CT.Label theme='Head7' color='white'>BOOK</CT.Label>
        </CT.Row>
        <CT.Row flex={4}>
          <CT.Label color='white' theme='H2' />
          <CT.Label color='white' theme='H7' />
        </CT.Row>
        <CT.Row>
          <CT.IconLabel height={50} icon={<CT.Avatar />} label={<CT.Labels
            padding={10}
            color='white'
            themes={['H5', 'H8']} />}
          />
        </CT.Row>
      </Block>
      <Block backgroundColor='#373839'>
        <CT.Row>
          <CT.IconLabel height={50} icon={<CT.Avatar />} label={<CT.Labels
            padding={10}
            color='white'
            themes={['H5', 'H8']} />} />
        </CT.Row>
        <CT.Row flex={3} justifyContent='flex-end'>
          <CT.Row flex={0} height={80}>
            <CT.IconLabel icon={<CT.Icon iconSet='Octicons' name='comment' color='white' size={40} width={40} />}
            label={<CT.Label color='white' theme='H7'>Book Comments</CT.Label>}
            >
              <CT.Label style={{position: 'absolute', textAlign: 'center', width: 40, color: '#FF4545', top: 9}} theme='H9'>1,335</CT.Label>
            </CT.IconLabel>
          </CT.Row>
        </CT.Row>
      </Block>
    </BaseScreen>
  }
}
