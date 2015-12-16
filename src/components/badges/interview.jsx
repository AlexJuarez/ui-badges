require('styles/badges/interview.less');

import React from 'react';
import classNames from 'classnames';

class InterviewBadge extends React.Component {
  render() {
    const classes = classNames(this.props.className,
      'badge-interview');

    return (
      <span className={classes}>
        <span className="background" />
        <span className="shine" />
        <span className="content" />
        <span className="dropshadow" />
        <span className="icon" />
      </span>
    );
  }
}

export default InterviewBadge;
