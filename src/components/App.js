
import React, { Component } from 'react';
import Sidenav from './Sidenav';
import  ChildRoutes from '../childRoutes';
import {Header} from './header/header'

class RootComponent extends Component {
  render(){
    return (
      <div className='container'>
        <div className='row'>
            <Header />
        </div>
        <div className='row'>
          <div className='col-xs-10 col-offset-1'>
            <ChildRoutes />
          </div>
        </div>
      </div>
    )
  }
}

export default RootComponent;