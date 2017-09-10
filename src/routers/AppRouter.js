import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Layout from '../components/Layout';

function DashBoard() {
  return (
    <div>
      hi
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={DashBoard} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
