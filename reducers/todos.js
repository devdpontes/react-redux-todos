import Immutable from 'immutable';
import { constants, actions } from '../actions';

const defaultState = Immutable.fromJS({
  todos: []
});

const todos = (state = defaultState, action) => {
  switch(action.type) {
    case constants.ADD_TODO:
      var newState = state.get('todos').unshift({
        text: action.text,
        completed: false
      });
      return state.set('todos', newState);

    case constants.DELETE_TODO:
      var newState = state.get('todos').delete(action.index);
      return state.set('todos', newState);

    case constants.TOGGLE_TODO:
      let item = state.get('todos').get(action.index);
      let completedItem = Object.assign({}, item, {
          completed: !item.completed
        });
      return state.set('todos', state.get('todos').set(action.index, completedItem));

    default:
      return state
  }
}

export default todos;
