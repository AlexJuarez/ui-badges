import React from 'react';
import ListStore from '../stores/ListStore';

function getListState() {
  return {
    allItems: ListStore.getAll()
  };
}

var ListComponent = React.createClass({

  getInitialState: function() {
    return getListState();
  },

  getList: function() {
    var query = this.props.location.query;
    if (query.show === 'even') {
      return this.state.allItems.filter(function(item) {
        return item % 2 === 0;
      });
    } else {
      return this.state.allItems;
    }
  },

  render: function() {
    var items = this.getList().map((item, i) => {
      return (
        <li key={i}>{item}</li>
      );
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
});

export default ListComponent;
