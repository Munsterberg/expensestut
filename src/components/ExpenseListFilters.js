import React from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  static propTypes = {
    filters: object,
    setTextFilter: func,
    setStartDate: func,
    setEndDate: func,
    sortByDate: func,
    sortByAmount: func
  };

  _onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  _onFocusChange = (focusedInput) => {
    this.setState(() => ({ calendarFocused: focusedInput }));
  }

  _onFilterChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  _onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div>
        <h4>Filter Expenses</h4>
        <input type="text" value={this.props.filters.text} onChange={this._onFilterChange} />
        <select
          value={this.props.filters.sortBy}
          onChange={this._onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this._onDatesChange}
          focusedInput={this.state.calendarFocused}
          numberOfMonths={1}
          onFocusChange={this._onFocusChange}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
