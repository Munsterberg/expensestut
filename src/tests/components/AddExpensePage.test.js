import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let wrapper;
const _addExpense = jest.fn();
const history = { push: jest.fn() };

beforeEach(() => {
  wrapper = shallow(<AddExpensePage addExpense={_addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle addExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(_addExpense).toHaveBeenLastCalledWith(expenses[1]);
});