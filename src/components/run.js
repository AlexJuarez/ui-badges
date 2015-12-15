import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routeConfig from './Routes';

// Render the main component into the dom
render(
  <Router history={createBrowserHistory()} routes={routeConfig} />
  , document.getElementById('app'));
