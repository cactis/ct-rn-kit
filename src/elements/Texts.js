import React, { PureComponent as Component } from 'react'
import { Text as RNText } from 'react-native'
import { View } from './Layouts'
// import faker from 'faker'

import { material } from 'react-native-typography'

import faker from "../../vendors/faker.min.js"

import styles from './Styles'

// export class Label extends Component {
//   render() {
//     let {
//       children = faker.company.companyName(),
//       ...props
//     } = this.props
//     return <Text {...props}>{children}</Text>
//   }
// }

export class Text extends Component {
  render() {
    let {
      style,
      fontSize = styles.text.fontSize,
      children = faker.lorem.sentence(),
      ...rest
    } = this.props
    let {
      lineHeight = fontSize * 1.2,
      ...props
    } = rest
    return <RNText flex={1} {...rest}
      style={{
        ...styles.text,
        fontSize: fontSize,
        lineHeight: lineHeight,
        ...style,
      }} {...props}>
      {children}
    </RNText>
  }
}

class Headline extends Component {
  render() {
    let {
      style,
      numberOfLines = 1,
      children = faker.lorem.sentence(),
      color = this.props.style.color,
      ...props
    } = this.props
    return <Text numberOfLines={numberOfLines}
      style={{
        ...styles.font,
        ...style,
        color: color,
      }}
      {...props}>{children}
    </Text>
  }
}




H = (color, fontWeight, fontSize, props) => {
  return <Headline fontSize={fontSize} style={{fontWeight: fontWeight, color: color}} {...props} />
}


export const Head1 = (props) => H('rgba(0,0,0,1)', '900', 25, props)
export const Head2 = (props) => H('rgba(0,0,0,0.9)', '800', 22, props)
export const Head3 = (props) => H('rgba(0,0,0,0.8)', '700', 20, props)
export const Head4 = (props) => H('rgba(0,0,0,0.7)', '600', 18, props)
export const Head5 = (props) => H('rgba(0,0,0,0.6)', '500', 16, props)
export const Head6 = (props) => H('rgba(0,0,0,0.5)', '400', 14, props)
export const Head7 = (props) => H('rgba(0,0,0,0.4)', '300', 12, props)

export const Time = (props) => <Head7 {...props} />

export const Label = (props) => <Name {...props} />

export class P extends Component {
  render() {
    return <Text {...this.props}>{faker.lorem.paragraphs()}</Text>
  }
}



export class  Name extends Component {
  // log(props, '----------')
  components = {
    Head1: Head1,
    Head2: Head2,
    Head3: Head3,
    Head4: Head4,
    Head5: Head5,
    Head6: Head6,
    Head7: Head7,
  }

  render() {
    let {
      children = faker.company.companyName(),
      ...props
    } = this.props
    let TagName = this.components[this.props.theme || 'Head1']
    // let TagName = this.props.theme
    return <TagName {...props}>{children}</TagName>
  }
}



//
// export class H2 extends Component {
//   render() {
//     return <Headline {...this.props} fontSize={20} style={{ fontWeight: '700', color: '#111'}} />
//   }
// }
//
// export class H3 extends Component {
//   render() {
//     return <Headline {...this.props} fontSize={18} style={{fontWeight: '300', color: '#333'}} />
//   }
// }
