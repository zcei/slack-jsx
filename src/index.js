export default function h (node, props, child = [], ...children) {
  const allChildren = [].concat(child, children)
  return node(props, allChildren)
}
