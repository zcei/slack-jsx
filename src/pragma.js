import { extract, validate, transform } from './prop-types'

const types = extract('type')
const keys = extract('key')

export default function h (node, propsOrNull, child = [], ...children) {
  const props = propsOrNull || {}
  const allChildren = [].concat(child, children)
  const { propTypes = {} } = node

  if (!props.skipValidation) {
    validate(props, types(propTypes), node.name)
  }

  const snakeCased = transform(props, keys(propTypes))

  return node(props, allChildren)
}
