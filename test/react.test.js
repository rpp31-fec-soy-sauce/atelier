// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Link from './react-test';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// think it's helpful to think of your test-writing as iterative as well.
// Write tests for your components that show that "it renders". 
// Expand your unit test to show that it renders given such and such props
// Expand your component testing to handle user interactions and verify that it behaves as expected
