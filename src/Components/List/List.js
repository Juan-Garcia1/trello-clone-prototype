import React, { Component } from "react"

import ListForm from "./ListForm"

class List extends Component {
  state = {
    listName: "",
    submittedListName: false,
    editListName: false
  }

  handleListNameChange = e => {
    this.setState({
      listName: e.target.value
    })
  }

  handleSubmitListName = e => {
    // prevent form from submitting
    e.preventDefault()
    const { listName } = this.state
    // if value is empty, alert user
    if (!listName) {
      alert("Please name your list")
    } else {
      this.setState({
        submittedListName: true,
        editListName: false
      })
    }
  }

  handleEditListName = () => {
    this.setState({
      submittedListName: false,
      editListName: true
    })
  }

  render() {
    const { listName, submittedListName, editListName } = this.state
    return (
      <div className="list">
        <div className="list-name">
          {// If form is not submitted or edit is false, show form. Else, display name of list
          !submittedListName || editListName ? (
            <ListForm
              listName={listName}
              handleListNameChange={this.handleListNameChange}
              handleSubmitListName={this.handleSubmitListName}
            />
          ) : (
            <h3 onClick={this.handleEditListName} style={{ cursor: "pointer" }}>
              {listName}
            </h3>
          )}
        </div>
      </div>
    )
  }
}

export default List
