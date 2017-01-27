import PropTypes from 'prop-types'

const HEX_COLOR = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/

export function hexColor (props, propName, descriptiveName) {
  const value = props[propName]

  if (HEX_COLOR.test(value)) {
    return
  }

  return new Error(`Prop '${propName}' is not a valid color in '${descriptiveName}'`)
}

export const color = PropTypes.oneOfType([
  PropTypes.oneOf(['good', 'warning', 'danger']),
  hexColor
])
