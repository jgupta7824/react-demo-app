
import React from 'react';
import PropTypes from 'prop-types';

import Sidenav from './Sidenav';

import '../assets/stylesheets/base.css';

//  Third Party libraries 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/Jquery';
import '../lib/Popper';
import 'bootstrap/dist/js/bootstrap.min';

const App = ({ children }) => {
  return (
    <div>
      <Sidenav />
      <div className="container">
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
