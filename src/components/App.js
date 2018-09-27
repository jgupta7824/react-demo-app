import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import PropTypes from 'prop-types';

import Sidenav from './Sidenav';

import '../assets/stylesheets/base.css';


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
