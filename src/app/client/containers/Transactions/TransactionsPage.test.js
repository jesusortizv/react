import React from 'react';
import TransactionPage from './TransactionsPage';
import renderer from 'react-test-renderer';
import transactionsData from '../../../../data/transactions.json';

beforeEach(() => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(transactionsData));
});

test('Renders correctly', () => {
  const tree = renderer.create(
    <TransactionPage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
