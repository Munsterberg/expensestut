import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let wrapper = null;

beforeEach(() => {
  wrapper = shallow(<ExpenseForm />);
});

test('should render ExpenseForm', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'new desc';
  wrapper.find('input').at(0).simulate('change', { target: { value, name: 'description' } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set amount on amount input change', () => {
  const value = '1413';
  wrapper.find('input').at(1).simulate('change', { target: { value }} );
  expect(wrapper.state('amount')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused with on focus change', () => {
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
  expect(wrapper.state('calendarFocused')).toEqual(true);
});