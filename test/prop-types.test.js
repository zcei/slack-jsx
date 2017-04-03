import test from 'ava'
import PropTypes from 'prop-types'

import pragma from '../src'
import makeTestComponent from './_test-component'

test('required propType missing', (t) => {
  const propTypes = {
    requiredText: { type: PropTypes.string.isRequired }
  }
  const TestComponent = makeTestComponent(propTypes)

  t.throws(() => {
    pragma(TestComponent)
  })
})

test('no propTypes provided', (t) => {
  const TestComponent = makeTestComponent()
  const rendered = pragma(TestComponent, { pass: 'through' })

  t.is(rendered.pass, 'through')
})

test('additional props than propTypes are allowed', (t) => {
  const propTypes = {
    knownProp: { type: PropTypes.number }
  }
  const TestComponent = makeTestComponent(propTypes)
  const rendered = pragma(TestComponent, { unknownProp: 'passes through', knownProp: 42 })

  t.is(rendered.unknownProp, 'passes through')
  t.is(rendered.knownProp, 42)
})

test('propTypes are validated', (t) => {
  const propTypes = {
    knownProp: { type: PropTypes.number }
  }
  const TestComponent = makeTestComponent(propTypes)

  t.throws(() => pragma(TestComponent, { knownProp: 'wrong type' }))
})

test('transformes propTypes with key attribute', (t) => {
  const propTypes = {
    knownProp: { type: PropTypes.number, key: 'known_prop' }
  }
  const TestComponent = makeTestComponent(propTypes)
  const rendered = pragma(TestComponent, { knownProp: 42 })

  t.is(rendered.known_prop, 42)
  t.is(rendered.knownProp, undefined)
})
