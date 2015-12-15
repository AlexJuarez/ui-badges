require('styles/badges/interview.less');

import React from 'react';

class interviewBadge extends React.Component {
  render() {
    return (
      <span className="badge-interview">
        <span className="background" />
        <span className="shine" />
        <span className="content" />
        <span className="dropshadow" />
        <span className="icon" />
      </span>
    );
  }
}

export default interviewBadge;
