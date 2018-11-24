// import React, { PureComponent as Component } from 'react'
//
// import { Row } from '../../Elements/Layouts/Row'
// import { TextInput } from './TextInput'
//
// export class CodesInput extends Component {
//   state = {
//     codesLength: null,
//     value: []
//   }
//
//   componentDidMount() {
//     let { codesLength = 4 } = this.props
//     this.setState({ value: Array(this.state.codesLength), codesLength })
//     // log(this.state.value,'value')
//   }
//
//   onChangeText(text, i) {
//     let { value } = this.state
//     value[i] = text
//     this.setState({ value: value })
//     this.props.onChangeText(value)
//   }
//
//   inputs = []
//
//   render() {
//     let { codesLength } = this.state
//     let codes = Array(codesLength)
//       .join()
//       .split(',')
//       .map((_, i) => {
//         let name = `input_${i}`
//         let next = `input_${i + 1}`
//         return (
//           <CodeInput
//             ref={name}
//             key={i}
//             blurOnSubmit={false}
//             onChangeText={text => {
//               if (text.length == 1) {
//                 if (i < codesLength - 1) {
//                   let input = this.refs[next]
//                   input.focus()
//                 } else {
//                   let input = this.refs[name]
//                   input.blur()
//                 }
//               }
//               this.onChangeText(text, i)
//             }}
//           />
//         )
//       })
//     inputs = codes
//     return <Row justifyContent="center">{codes}</Row>
//   }
// }
//
// class CodeInput extends Component {
//   focus = () => {
//     return this.input.input.focus()
//   }
//   blur = () => {
//     return this.input.input.blur()
//   }
//   render() {
//     return (
//       <TextInput
//         style={{
//           textAlign: 'center',
//           backgroundColor: 'white',
//           borderColor: '#C2C0BA',
//           borderWidth: 0.5,
//           width: 40,
//           aspectRatio: 1,
//           margin: 4
//         }}
//         maxLength={1}
//         ref={el => (this.input = el)}
//         keyboardType="number-pad"
//         {...this.props}
//       />
//     )
//   }
// }
