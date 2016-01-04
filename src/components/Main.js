require('normalize.css');
require('styles/App.css');
require('styles/badges.less');

const interviewBadgeSVG = require('../images/badges/interview-hero.svg');
const bugPatrolBadgeSVG = require('../images/badges/bug-patrol.svg');
const wikiContribBadgeSVG = require('../images/badges/wiki-contributor.svg');
const fiveOfficesBadgeSVG = require('../images/badges/5-offices.svg');
const tenOfficesBadgeSVG = require('../images/badges/10-offices.svg');
const mobileBPBadgeSVG = require('../images/badges/mobile-bug-patrol.svg');
const interviewerBadgeSVG = require('../images/badges/interviewer.svg');
const hackerBadgeSVG = require('../images/badges/hack-presentor.svg');
const i18nBadgeSVG = require('../images/badges/i18n.svg');

import React from 'react';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Badges svg</h1>
        <ul className="list">
          <li className="shine star"><img height="64" width="64" src={interviewBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={bugPatrolBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={wikiContribBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={fiveOfficesBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={tenOfficesBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={mobileBPBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={interviewerBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={hackerBadgeSVG} /></li>
          <li className="shine circle"><img  height="64" width="64" src={i18nBadgeSVG} /></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
