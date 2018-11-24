import React, { Component } from "react";
import List from "../List/List";

import uuid from "uuid";

class Board extends Component {
  state = {
    lists: [
      {
        id: uuid(),
        name: ""
      }
    ]
  };

  editName = (id, name) => {
    const { lists } = this.state;
    lists.map(list => {
      if (list.id === id) {
        list.name = name;
      }
    });
    this.setState({ lists });
  };

  deleteList = id => {
    const { lists } = this.state;
    const newList = lists.filter(list => list.id !== id);
    this.setState({
      lists: newList
    });
  };

  addList = () => {
    const { lists } = this.state;
    this.setState({
      lists: [...lists, { id: uuid(), name: "" }]
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <div className="board">
        {/* <h1>this is the board component</h1> */}
        {// map over lists array
        lists.length
          ? lists.map(list => (
              <List
                key={list.id}
                {...list}
                deleteList={this.deleteList}
                editName={this.editName}
              />
            ))
          : // show nothing if empty
            ""}
        <button onClick={this.addList}>+ Add another list</button>
      </div>
    );
  }
}

export default Board;
