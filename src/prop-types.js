import PropTypes from 'prop-types'

export const extract = (key) => (propTypes) => {
  return Object.entries(propTypes)
  .reduce((extracted, [prop, { [key]: value }]) => (
    { ...extracted, [prop]: value }
  ), {})
}

export function validate (props, types, nodeName) {
  return PropTypes.validate(types, props, nodeName)
}

export function transform (props, mappings) {
  return Object.entries(mappings).reduce((mapped, [key, mappedKey]) => {
    if (!props.hasOwnProperty(key)) {
      return mapped
    }

    return { ...mapped, [mappedKey]: props[key] }
  }, {})
}
