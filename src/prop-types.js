import PropTypes from 'prop-types'

export const extract = (key) => (propTypes) => {
  return Object.entries(propTypes)
  .reduce((extracted, [prop, { [key]: value }]) => (
    { ...extracted, [prop]: value }
  ), {})
}

export function validate (props, types, nodeName) {
  let validationError = null
  try {
    PropTypes.validateWithErrors(types, props, nodeName)
  } catch (e) {
    validationError = e
  }

  return validationError
}

export function transform (props, mappings) {
  return Object.entries(mappings).reduce((mapped, [key, mappedKey]) => {
    if (!props.hasOwnProperty(key) || !mappedKey) {
      return mapped
    }

    return { ...mapped, [mappedKey]: props[key], [key]: null }
  }, {})
}

export function merge (props, transformedProps) {
  return Object.entries(transformedProps).reduce((merged, [transformedKey, value]) => {
    if (value === null) {
      // eslint-disable-next-line no-unused-vars
      const { [transformedKey]: deleteValue, ...rest } = merged
      return rest
    }

    return { ...merged, [transformedKey]: value }
  }, { ...props })
}
