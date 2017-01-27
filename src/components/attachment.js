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
