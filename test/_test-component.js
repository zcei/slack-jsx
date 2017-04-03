export default function makeTestComponent (propTypes) {
  const TestComponent = (props, attachments) => {
    return {
      ...props,
      attachments
    }
  }

  return Object.assign(TestComponent, { propTypes })
}
