import { extract, validate, transform, merge } from './prop-types'

const types = extract('type')
const keys = extract('key')

export default function h (node, propsOrNull, child = [], ...children) {
  const props = propsOrNull || {}
  const allChildren = [].concat(child, children)
  const { propTypes = {} } = node

  if (!props.skipValidation) {
    const validationError = validate(props, types(propTypes), node.name)

    if (validationError) {
      throw validationError
    }
  }

  const transformedProps = transform(props, keys(propTypes))
  const finalProps = merge(props, transformedProps)

  return node(finalProps, allChildren)
}
