import React from 'react'
import {Dimensions, FlatList, Image } from 'react-native'
import * as CT from 'ct-rn-kit'

import { BaseScreen } from './'
import Styles from 'ct-rn-kit/src/elements/Styles'
import tinycolor from 'ct-rn-kit/vendors/tinycolor-min.js'

const PADDING = 15
const CARDWIDTH = iOS ? 310 : 300

export class Screen13 extends React.Component {

  state = {
    photos: [
      'https://images.pexels.com/photos/325944/pexels-photo-325944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/442407/summer-sunset-meadow-nature-442407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/134879/pexels-photo-134879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'https://images.pexels.com/photos/195226/pexels-photo-195226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ],
    index: 1
  }

  componentDidMount() {
    delayed(() => {
      this.scrollTo(1, false)
    })
  }

  onScroll = (e) => {
    let x = e.nativeEvent.contentOffset.x
    delayed(() => {
      log(x, 'x')
      let index = Math.floor(x / (CARDWIDTH - PADDING))
      log(index, 'i')
      this.scrollTo(index)
      // this.setState({index: index})
    }, 300)
  }

  scrollTo = (index, animated = true) => {
    let offset = index * CARDWIDTH + ( (index == 0 ? 0 : 1) * PADDING / 5)
    this.photos.flatList?.scrollToOffset({offset: offset, animated: animated})
  }

  render() {
    let { photos, index } = this.state
    return <BaseScreen number={13}>
      <CT.ImageBackground blurRadius={30}
        // uri={photos[index]}
        >
          <CT.Row flex={1} align='center' marginTop={40}>
            <CT.Float left={10}>
              <CT.Labels align='center' themes={['H1', 'H9']} color='white' texts={['22', 'MAY']} />
            </CT.Float>
            <TText theme='H1' font='HelveticaNeue-Bold'>Des Glaneuses</TText>
          </CT.Row>
          <CT.Row
            flex={9}
            onPanResponderTerminationRequest={() => false}
            >
              <CT.List
                onPanResponderTerminationRequest={() => false}
                ref={ref => this.photos = ref}
                data={photos}
                horizontal
                pagingEnabled={false}
                contentContainerStyle={{padding: PADDING, justifyContent: 'center'}}
                ItemSeparatorComponent={() => <CT.Space size={2 * PADDING}  />}
                onScroll={this.onScroll}
                initialScrollIndex={1}
                getItemLayout={(data, index) => (
                  {length: CARDWIDTH + 3 * PADDING, offset: -300, index}
                )}
                renderItem={({item}) => <CT.Card width={CARDWIDTH}>
                  <CT.ImageBackground>
                    <CT.Float style={{right: 10, top: 10}}>
                      <CT.Icon backgroundColor='rgba(255,255,255,.8)' size={18} name='heart' ratio={2} />
                      <CT.Space size={10} />
                      <CT.Icon backgroundColor='rgba(255,255,255,.8)' size={18} name='share' ratio={2} />
                    </CT.Float>
                    {/* <CT.Image uri={item} /> */}
                    <CT.Float bottom={10} flex={1} padding={20} alignSelf='center'>
                      <TText
                        font='Palatino-Italic'
                        align='center'>To be an artist is to believe in life.</TText>
                        <CT.Space />
                        <TText font='GeezaPro' theme='H8'>- Henry Moore</TText>
                      </CT.Float>
                    </CT.ImageBackground>
                  </CT.Card>
                }
              />
            </CT.Row>
            <CT.Row flex={1} align='center' layout='row' paddingBottom={30}>
              <CT.Div padding={15}>
                <CT.Avatar size={40} uri='https://images.pexels.com/photos/206563/pexels-photo-206563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
              </CT.Div>
              <CT.Div  xAlign='center'>
                <CT.Labels color='white' themes={['H8', 'H6']} texts={['photo by', 'Jasmine Cheng']} />
              </CT.Div>
            </CT.Row>
          </CT.ImageBackground>
        </BaseScreen>
      }
    }

    const TText = (props) => <CT.Text color='rgba(255,255,255,.95)' {...props} />
