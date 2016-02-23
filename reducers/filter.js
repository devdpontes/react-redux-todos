import Immutable from 'immutable';
import { constants, actions } from '../actions';

const defaultState = Immutable.fromJS({
  visibilityFilter: constants.SHOW_ALL
});

const filter = (state = defaultState, action) => {
  switch(action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return state.set('visibilityFilter', action.filter);

    default:
      return state
  }
}

export default filter;
