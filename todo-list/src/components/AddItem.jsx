import React from "react";

const AddItem = ({ onChange, onClickAdd }) => {
  return (
    <div className="Additem-container">
      <input
        className="form-control"
        rows="2"
        name="task"
        id="task"
        onChange={(e) => onChange(e)}
        placeholder="Enter Task"
      />
      <button className="btn btn-success" onClick={() => onClickAdd()}>
        Add Todo
      </button>
    </div>
  );
};

export default AddItem;
