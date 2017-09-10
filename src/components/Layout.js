import React from 'react';
import { object } from 'prop-types';

import Header from './common/Header';
import Footer from './common/Footer';

Layout.propTypes = {
  children: object.isRequired
};

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>

  );
}

export default Layout;
