import React from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  static propTypes = {
    match: object,
    expense: object,
    dispatch: func,
    history: object,
    onEditExpense: func,
    onRemoveExpense: func
  }

  _onSubmit = (expense) => {
    this.props.onEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  _onRemoveExpense = () => {
    this.props.onRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Edit Expense: {this.props.expense.id}</h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this._onSubmit} />
        <button onClick={this._onRemoveExpense}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
    onRemoveExpense: (expense) => dispatch(removeExpense(expense))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);