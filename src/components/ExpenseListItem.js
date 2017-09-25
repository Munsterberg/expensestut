import React from 'react';
import { string, number, func } from 'prop-types';
import { Link } from 'react-router-dom';

ExpenseListItem.propTypes = {
  description: string,
  amount: number,
  createdAt: number,
  id: string,
  dispatch: func
};

function ExpenseListItem({ id, description, amount, createdAt }) {
  return (
    <div>
      <Link to={`/edit/${id}`}><h3>{ description }</h3></Link>
      <p>{amount} - {createdAt}</p>
    </div>
  );
}

export default ExpenseListItem;
