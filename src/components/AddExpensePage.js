import React from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    static propTypes = {
      dispatch: func,
      history: object,
      addExpense: func
    }

  _addExpense = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this._addExpense} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
