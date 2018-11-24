import React from 'react'
import * as T from '../../..'
import { ThumbItem } from './ThumbItem'
export class ThumbsList extends React.PureComponent {
  state = {
    size: undefined,
    photos: null
  }

  componentDidMount() {
    // log('mount------')
  }

  componentWillReceiveProps(nextProps) {
    log()
    // this.componentWillReceiveProps(nextProps);
    let { photos, size = 100 } = nextProps
    // log(photos, 'photos in ThumbsList componentDidMount')
    this.setState({ photos, size })
  }

  onCheck = (item, index) => {
    log(item, index, 'onCheck in ThumbsList')
    let { photos } = this.state
    let ids = photos.map(photo => photo.checkedId)
    // log(ids, 'ids')
    let photo = photos[index]
    let checkedId = photo.checkedId
    if (!checkedId) {
      // log('not checked now...')
      let checkedId = 1
      photos.forEach(pho => {
        if (pho.checkedId >= checkedId) checkedId = pho.checkedId + 1
      })
      photo.checkedId = checkedId
    } else {
      // log(checkedId, 'now is ')
      photo.checkedId = undefined
      photos.map(pho => {
        log(pho.checkedId > checkedId, pho.checkedId, checkedId)
        if (pho.checkedId > checkedId) pho.checkedId -= 1
        return pho
      })
    }
    photos[index] = photo
    // log(photos, 'photos')
    this.setState({ photos })
    this.forceUpdate() //!!!!!!!!!!!!!!!!!!!!!
  }

  render() {
    let { photos, size } = this.state
    return !photos ? null : (
      <T.Row flex={0} padding={10}>
        <T.List
          height={size}
          horizontal
          data={photos}
          ListHeaderComponent={this.props.ListHeaderComponent}
          renderItem={({ item, index }) => (
            <ThumbItem
              checkable={this.props.checkable}
              onCheck={this.onCheck}
              onPress={this.props.onThumbPress}
              data={item}
              index={index}
              size={size - 10}
            />
          )}
        />
      </T.Row>
    )
  }
}
