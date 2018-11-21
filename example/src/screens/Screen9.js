import React from 'react'
import * as CT from 'ct-rn-kit'
import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/elements/Styles.js'

const uri = 'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// let uri = 'https://images.pexels.com/photos/2326/fashion-person-woman-taking-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
export class Screen9 extends React.Component {
  render() {
    return <BaseScreen number={9}>
      <CT.ImageBackground uri={uri}>
        <CT.Row padding={30} borderWidth={1}>
          <CT.Row>
            <CT.Row flex={4} xAlign='flex-end'>
              <CT.Label theme='H1' size={56} numberOfLines={2} color='white'>{`Eggs\nBenedict`}</CT.Label>
            </CT.Row>
            <CT.Row>
              <CT.Text color='white' theme='H7'>Egg salad is often used as a sandwich filling, typically made of chopped hard-boiled eggs, mayonnaise, mustard, minced celery, onion, salt, pepper, and paprika. </CT.Text>
            </CT.Row>
            <CT.Row yAlign='center' xAlign='space-between'>
              <TCol name='dollar' text='10.99'/>
              <CT.Space size={20} />
              <TCol name='heart-o' text='12K'/>
              <CT.Space size={20} />
              <TCol name='clock-o' text='40mins'/>
            </CT.Row>
          </CT.Row>
          <CT.Row xAlign='flex-end'>
            <CT.Button
              title='Order Now'
              rightIcon={<CT.Icon name='angle-double-right' size={20} />}
            />
          </CT.Row>
        </CT.Row>
      </CT.ImageBackground>
    </BaseScreen>
  }
}

const TCol = (props) => <CT.Col
  flex={0}>
  <CT.IconLabel
    icon={<CT.Icon color='#DFD1D9' size={30} name={props.name} />}
    label={<CT.Label font='Avenir' theme='H4' color='#DFD1D9'>{props.text}</CT.Label>}
  />
</CT.Col>
