import PropTypes from 'prop-types'
import { COMPONENT_TYPE } from '../symbols'

export function Action (props, [text]) {
  return { ...props, text, type: 'button', [COMPONENT_TYPE]: 'action' }
}

const confirm = {
  title: { type: PropTypes.string, key: 'title' },
  text: { type: PropTypes.string, key: 'text' },
  okText: { type: PropTypes.string, key: 'ok_text' },
  dismissText: { type: PropTypes.string, key: 'dismiss_text' }
}

Action.propTypes = {
  name: { type: PropTypes.string, key: 'name' },
  text: { type: PropTypes.string, key: 'text' },
  type: { type: PropTypes.oneOf(['button']), key: 'type' },
  value: { type: PropTypes.string, key: 'value' },
  style: { type: PropTypes.oneOf(['default', 'primary', 'danger']), key: 'style' },
  confirm: { type: PropTypes.shape(confirm), key: 'confirm' }
}
