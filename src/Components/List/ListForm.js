import React from "react";

const ListForm = ({
  id,
  listName,
  editName,
  editListName,
  // handleListNameChange,
  handleSubmitListName
}) => (
  <form onSubmit={handleSubmitListName}>
    <input
      type="text"
      placeholder="Enter list title..."
      value={listName}
      onChange={e => editName(id, e.target.value)}
      // onChange={handleListNameChange}
    />
    {editListName === false && <button type="submit">Add List</button>}
  </form>
);

export default ListForm;
