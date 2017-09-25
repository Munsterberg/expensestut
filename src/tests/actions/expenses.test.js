import {
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should setup remove expense default action object', () => {
  const action = removeExpense();
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', { description: 'New description' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      description: 'New description'
    }
  });
});

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Water bill',
    note: 'Note',
    createdAt: 1000,
    amount: 1400
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense object with default data', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      amount: 0,
      createdAt: 0,
      description: '',
      id: expect.any(String),
      note: ''
    }
  });
});