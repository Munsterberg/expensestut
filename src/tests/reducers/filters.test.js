import moment from 'moment';

import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT'
  });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testing 123' });
  expect(state.text).toBe('testing 123');
});

test('should set startDate', () => {
  const dateObj = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: dateObj
  });
  expect(state.startDate).toBe(dateObj);
});

test('should set endDate', () => {
  const dateObj = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: dateObj
  });
  expect(state.endDate).toBe(dateObj);
});