import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// Diffrence between browser route and has router is simplly has when u required a acurate path then use browser route else has route
import RootComponent from './App';

const RouterFile = (props) => {
  return (
    <BrowserRouter>
    <RootComponent />
  </BrowserRouter>
  );
};

export default RouterFile;
