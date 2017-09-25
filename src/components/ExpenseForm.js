import React from 'react';
import moment from 'moment';
import { func, object } from 'prop-types';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  static propTypes = {
    onSubmit: func,
    expense: object
  };

  _onInputChange = (e) => {
    const element = e.target;
    const stateObj = {};

    stateObj[element.name] = element.value;
    this.setState(() => (stateObj));
  }

  _onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  _onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  _onCalendarFocus = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  _onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please submit both description and an amount!' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  }

  render() {
    const { error, description, note, amount, createdAt, calendarFocused } = this.state;
    return (
      <div>
        {
          error && <p>{ error }</p>
        }
        <form onSubmit={this._onSubmit}>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={this._onInputChange}
            autoFocus
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this._onAmountChange}
          />
          <textarea
            placeholder="Add a note...(optional)"
            name="note"
            value={note}
            onChange={this._onInputChange}
          >
          </textarea>
          <SingleDatePicker
            date={createdAt}
            onDateChange={this._onDateChange}
            focused={calendarFocused}
            onFocusChange={this._onCalendarFocus}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
