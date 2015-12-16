require('normalize.css');
require('styles/App.css');

const InterviewBadgeSVG = require('../images/badges/interview-hero.svg');

import React from 'react';
import { Link } from 'react-router';

import InterviewBadge from './badges/interview';
import BootcampBadge from './badges/bootcamp-mentor';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Badges font (normal)</h1>
        <ul className="list">
          <li><InterviewBadge /></li>
          <li><BootcampBadge /></li>
        </ul>
        <h1>Badges font (lg)</h1>
        <ul className="list">
          <li><InterviewBadge className="lg" /></li>
          <li><BootcampBadge className="lg" /></li>
        </ul>
        <h1>Badges svg</h1>
        <img height="64" width="64" src={InterviewBadgeSVG} />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
