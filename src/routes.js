import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="portfolio" component={Portfolio} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
);
