import PropTypes from 'prop-types'
import { COMPONENT_TYPE } from '../symbols'

export function Field (props) {
  return { ...props, [COMPONENT_TYPE]: 'field' }
}

Field.propTypes = {
  title: { type: PropTypes.string, key: 'title' },
  value: { type: PropTypes.string, key: 'value' },
  short: { type: PropTypes.boolean, key: 'short' }
}
