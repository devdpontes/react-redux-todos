import React from 'react';

const {
  Component
} = React;

class DeleteTodo extends Component {
  render() {
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault();
           this.props.onClick();
         }}
      >X</a>
    );
  }
}

export default DeleteTodo;
