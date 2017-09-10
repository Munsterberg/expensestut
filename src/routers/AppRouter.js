import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage.js';

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={DashboardPage} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
