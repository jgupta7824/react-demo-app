import React , {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../src/components/Home';
import About from '../src/components/About';
import Page from '../src/components/Page';

const ChildRoutes = () => (
    <childroutes>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={Page}/>
        <Route path='/about' component={About}/>
      </Switch>
    </childroutes>
  )
export default ChildRoutes
  
  