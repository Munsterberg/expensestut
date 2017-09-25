import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Waterbill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 3000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'FEM', amount: 2000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
