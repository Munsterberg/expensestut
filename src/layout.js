import React from 'react';
import { object } from 'prop-types';

Layout.propTypes = {
  children: object.isRequired
};

function Layout(props) {
  return (
    <div>
      <header>
        This is the header
      </header>
      {props.children}
      <footer>
        this is the footer
      </footer>
    </div>

  );
}

export default Layout;
