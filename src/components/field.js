import { COMPONENT_TYPE } from '../symbols'

export function Field (props) {
  return { ...props, [COMPONENT_TYPE]: 'field' }
}
