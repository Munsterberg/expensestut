import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ExpenseList expenses={expenses} />);
});

test('should render ExpenseList with expenses', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should be type div', () => {
  expect(wrapper.type()).toBe('div');
});

test('should render 3 ExpenseListItem components', () => {
  expect(wrapper.find('ExpenseListItem')).toHaveLength(3);
});