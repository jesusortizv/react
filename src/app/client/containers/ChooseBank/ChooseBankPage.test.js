import React from 'react';
import { ChooseBankPage } from './ChooseBankPage';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test('Renders correctly', () => {
  const mockFnc = jest.fn(() => {
    return;
  });

  const context = {
    router: {
      push: mockFnc,
      replace: mockFnc,
      go: mockFnc,
      goBack: mockFnc,
      goForward: mockFnc,
      setRouteLeaveHook: mockFnc,
      isActive: mockFnc,
    },
  };

  const tree = renderer.create(
    mount(<ChooseBankPage />, { context })
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
