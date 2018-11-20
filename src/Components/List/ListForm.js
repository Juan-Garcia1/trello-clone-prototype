import React from "react"

const ListForm = ({ listName, handleListNameChange, handleSubmitListName }) => (
  <form onSubmit={handleSubmitListName}>
    <input
      type="text"
      placeholder="Add a list..."
      value={listName}
      onChange={handleListNameChange}
    />
    <button type="submit">Save</button>
  </form>
)

export default ListForm
