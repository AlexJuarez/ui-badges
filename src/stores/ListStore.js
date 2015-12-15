import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

var _data = [1, 2, 3, 4];

var ListStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _data;
  }
});

export default ListStore;
