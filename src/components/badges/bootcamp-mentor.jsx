require('styles/badges/bootcamp-mentor.less');

import React from 'react';
import classNames from 'classnames';

class BootcampMentorBadge extends React.Component {
  render() {
    const classes = classNames(this.props.className,
      'badge-bootcamp-mentor');

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

export default BootcampMentorBadge;
