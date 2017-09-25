import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state values', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Chocolate Bar',
      note: '',
      amount: 120,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit expense if id exists', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      description: 'Water bill -- EDIT'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toEqual(action.updates.description);
});

test('should not edit expense if no id found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '51',
    updates: {
      description: 'Water bill -- EDIT'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});