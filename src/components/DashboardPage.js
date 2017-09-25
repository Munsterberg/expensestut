import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

function DashboardPage() {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}

export default DashboardPage;
