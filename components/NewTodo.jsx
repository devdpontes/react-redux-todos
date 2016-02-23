import React from 'react';

const {
  Component
} = React;

class NewTodo extends Component {
  render() {
    return (
      <div>
        <h3>New</h3>
        <input type="text" onKeyUp={this.props.onAction}/>
      </div>
    );
  }
}

export default NewTodo;
