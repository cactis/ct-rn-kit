import React, { PureComponent as Component } from 'react'
import * as CT from '../../..'
import { BaseScreen } from './'

// const Name = (props) => <CTName {...props} color='white' />
const Block = (props) =>  <CT.Block {...props} padding={30}/>

export class Screen5 extends Component {
  render() {
    return <BaseScreen scrollable={false} number='5'>
      <Block backgroundColor='rgba(240,22,19,.80)'>
        <CT.Row paddingTop={30}>
          <CT.Label theme='Head7' color='white'>BOOK</CT.Label>
        </CT.Row>
        <CT.Row flex={4}>
          <CT.Names color='white' themes={['Head1', 'Head2']} justifyContent='flex-start' />
        </CT.Row>
        <CT.Row>
          <CT.Author height={60} />
        </CT.Row>
      </Block>
      <Block backgroundColor='#373839'>
        <CT.Row>
          <CT.Author height={60} />
        </CT.Row>
        <CT.Row flex={3} justifyContent='flex-end'>
          <CT.Row flex={0} height={80}>
            <CT.IconLabel icon={<CT.Icon iconSet='Octicons' name='comment' color='white' size={40} width={40} />}
            label={<CT.Label color='white' theme='Head8'>Book Comments</CT.Label>}
            >
              <CT.Label style={{position: 'absolute', textAlign: 'center', width: 40, color: '#FB6969', top: 18}} theme='Head9'>1,335</CT.Label>
            </CT.IconLabel>
          </CT.Row>
        </CT.Row>
      </Block>
    </BaseScreen>
  }
}
