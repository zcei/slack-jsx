import PropTypes from 'prop-types'
import { color } from '../custom-prop-types'
import { COMPONENT_TYPE } from '../symbols'

const filterChildren = (fn) => (children) => children.filter(fn)
const isType = (wanted) => ({ [COMPONENT_TYPE]: type }) => type === wanted
const get = (type) => filterChildren(isType(type))

export function Attachment (props, children) {
  const listTypes = ['field', 'action']

  const lists = listTypes.reduce((existing, childType) => {
    const occurences = get(childType)(children)

    if (!occurences.length) {
      return existing
    }

    const plural = `${childType}s`

    return { ...existing, [plural]: occurences }
  }, {})

  return {
    ...props,
    ...lists
  }
}

Attachment.propTypes = {
  title: { type: PropTypes.string, key: 'title' },
  titleLink: { type: PropTypes.string, key: 'title_link' },
  callbackId: { type: PropTypes.string, key: 'callback_id' },
  color: { type: color, key: 'color' },
  fallback: { type: PropTypes.string.isRequired, key: 'fallback' },
  pretext: { type: PropTypes.string, key: 'pretext' },
  actions: { type: PropTypes.array, key: 'actions' },
  authorName: { type: PropTypes.string, key: 'author_name' },
  authorLink: { type: PropTypes.string, key: 'author_link' },
  authorIcon: { type: PropTypes.string, key: 'author_icon' },
  fields: { type: PropTypes.array, key: 'fields' },
  imageUrl: { type: PropTypes.string, key: 'image_url' },
  thumbUrl: { type: PropTypes.string, key: 'thumb_url' },
  footer: { type: PropTypes.string, key: 'footer' },
  footerIcon: { type: PropTypes.string, key: 'footer_icon' },
  ts: { type: PropTypes.number, key: 'ts' }
}
