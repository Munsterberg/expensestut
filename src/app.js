import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Waterbill' }));

console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
