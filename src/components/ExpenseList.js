import React from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';

import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const requiredProps = {
  expenses: array
};

export const ExpenseList = (props) => {
  return (
    <div>
      <h2>Expense List</h2>
      {
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      }
    </div>
  );
};

ExpenseList.propTypes = requiredProps;

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
