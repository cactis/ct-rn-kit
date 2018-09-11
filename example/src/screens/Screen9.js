import React, { PureComponent as Component } from 'react'
import * as CT from '../../..'
import { BaseScreen } from './'
import Styles from '../../../src/elements/Styles.js'

const uri = 'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// let uri = 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen9 extends Component {
  render() {
    return <BaseScreen number={9}>
      <CT.ImageBackground uri={uri}>
        <CT.Row padding={30} borderWidth={1}>
          <CT.Row>
            <CT.Row flex={4} xAlign='flex-end'>
              <CT.Label theme='H1' size={56} numberOfLines={2} color='white'>{`Eggs\nBenedict`}</CT.Label>
            </CT.Row>
            <CT.Row>
              <CT.Text color='white' theme='H8'>Egg salad is often used as a sandwich filling, typically made of chopped hard-boiled eggs, mayonnaise, mustard, minced celery, onion, salt, pepper, and paprika. </CT.Text>
            </CT.Row>
            <CT.Row yAlign='center'>
              <CT.Col flex={0}><CT.IconLabel icon={<CT.Icon color='#DFD1D9' name='dollar' />} label={<CT.Label theme='H4' color='#DFD1D9'>10.99</CT.Label>} /></CT.Col>
              <CT.Space size={20} />
              <CT.Col flex={0}><CT.IconLabel icon={<CT.Icon color='#DFD1D9' name='heart-o' />} label={<CT.Label theme='H4' color='#DFD1D9'>12 k</CT.Label>} /></CT.Col>
              <CT.Space size={20} />
              <CT.Col flex={0}><CT.IconLabel icon={<CT.Icon color='#DFD1D9' name='clock-o' />} label={<CT.Label theme='H4' color='#DFD1D9'>30 min</CT.Label>} /></CT.Col>
            </CT.Row>
          </CT.Row>
          <CT.Row xAlign='flex-end'>
            <CT.Button theme='pill' titleStyle={{fontSize: 20, fontWeight: '300'}} title='Order Now' style={{paddingVertical: 10}} rightIcon={<CT.Icon name='angle-double-right' size={20} />} />
          </CT.Row>
        </CT.Row>
      </CT.ImageBackground>
    </BaseScreen>
  }
}
