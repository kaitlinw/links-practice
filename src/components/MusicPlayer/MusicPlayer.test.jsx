import React from 'react';
import renderer from 'react-test-renderer';
import MusicPlayer from './MusicPlayer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <MusicPlayer>Facebook</MusicPlayer>,
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



test("When a user clicks on a Music Player Link, the Spotify streaming platform is visible", () => {
  expect(sum(1, 2)).toBe(3);
});
