import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { actions } from '../actions';
import { constants } from '../actions';

import NewTodo from './NewTodo';
import DeleteTodo from './DeleteTodo';
import TodoItem from './TodoItem';

const {
  Component
} = React;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.SHOW_ALL:
      return todos;
    case constants.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case constants.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
}

class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
          <NewTodo onAction={e => {
            if (e.keyCode == 13) {
              this.props.onNewTodo(e.target.value);
              e.target.value = ''
            }
          }}/>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (<div key={index}>
              <TodoItem
                {...todo}
                onClick={() => this.props.onTodoClick(index)}
              />
              <DeleteTodo onClick={() => this.props.onDeleteTodo(index)} />
            </div>)
          })}
        </ul>
      </div>
    );
  }
}

Todos.proTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onNewTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  let todos = state.todos.get('todos');
  return { todos: getVisibleTodos(todos, state.filter.get('visibilityFilter')) };
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodo: (value) => {
      dispatch(actions.addTodo(value));
    },
    onDeleteTodo: (index) => {
      dispatch(actions.deleteTodo(index));
    },
    onTodoClick: (index) => {
      dispatch(actions.toggleTodo(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
