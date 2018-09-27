import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const Sidenav = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/"><img src={logo} height="50" alt="logo" /></a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">

          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pages/1">Page 1</Link></li>
            <li><Link to="/pages/2">Page 2</Link></li>
            <li><Link to="/pages/3">Page 3</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidenav;
