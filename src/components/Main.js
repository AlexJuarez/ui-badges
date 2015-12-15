require('normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router';

import InterviewBadge from './badges/interview';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <ul>
          <li><Link to="list">/list all</Link></li>
          <li><Link to="list" query={{show: 'even'}}>/list even</Link></li>
          <li><Link to="/">/home</Link></li>
          <li><InterviewBadge /></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
