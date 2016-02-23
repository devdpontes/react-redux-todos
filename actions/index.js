/*
 * action constants
 */

export const constants = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
export const actions = {
  addTodo: function(text) {
    return { type: constants.ADD_TODO, text }
  },
  deleteTodo: function(index) {
    return { type: constants.DELETE_TODO, index }
  },
  toggleTodo: function(index) {
    return { type: constants.TOGGLE_TODO, index }
  },
  setVisibilityFilter: function(filter) {
    return { type: constants.SET_VISIBILITY_FILTER, filter }
  }
};
