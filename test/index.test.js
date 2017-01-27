import test from 'ava'
import pragma from '../src'

test('no arguments provided', (t) => {
  t.throws(() => pragma())
})

test('node is not a function', (t) => {
  t.throws(() => pragma(true))
})

test('single child to be captured in children', (t) => {
  const node = (props, children) => {
    t.true(Array.isArray(children))
    t.is(children.length, 1)
  }

  pragma(node, {}, 'child')
})

test('single array child should be flattened into children', (t) => {
  const node = (props, [child, ...rest]) => {
    t.is(typeof child, 'string')
    t.is(rest.length, 1)
  }

  pragma(node, {}, ['child', 'second'])
})

test('multiple children should be captured in children', (t) => {
  const node = (props, children) => {
    t.true(Array.isArray(children))
    t.is(children.length, 2)
  }

  pragma(node, {}, 'child', 'second')
})

test('multiple children with first child is array should be flattened & concated as children', (t) => {
  const node = (props, children) => {
    const [child] = children
    t.false(Array.isArray(child))
    t.is(children.length, 2)
  }

  pragma(node, {}, ['child'], 'second')
})

test('multiple children with other-than-first child is array should be concated as children', (t) => {
  const node = (props, children) => {
    const [, child] = children
    t.true(Array.isArray(child))
    t.is(children.length, 2)
  }

  pragma(node, {}, 'child', ['second'])
})
