import { COMPONENT_TYPE } from '../symbols'

export function Action (props, [text]) {
  return { ...props, text, type: 'button', [COMPONENT_TYPE]: 'action' }
}
