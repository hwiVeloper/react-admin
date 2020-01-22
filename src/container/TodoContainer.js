import { inject } from "mobx-react";
import React, { Component } from "react";

@inject(({ store }) => ({
  todo: store.todo
}))
class TodoContainer extends Component {
  state = {
    title: ""
  };

  _handleInput = e => {
    this.setState({
      title: e.target.value
    });
  };

  _handleAdd = () => {
    const { title } = this.state;
    if (title.length) {
      this.props.todo.addTodo({
        title
      });
      this.setState({
        title: ""
      });
    }
  };

  _handleCheckboxChange = id => {
    console.log(id);
    this.props.todo.toggleTodo(id);
  };

  render() {
    const { list } = this.props.todo;
    const { title } = this.state;
    return (
      <div>
        <input type="text" value={title} onChange={this._handleInput} />
        <button type="button" onClick={this._handleAdd}>
          입력
        </button>
        <table>
          <tbody>
            {list.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={item.isDone}
                    onChange={this._handleCheckboxChange(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoContainer;
