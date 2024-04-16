import React, { useState } from "react";

function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setValue(text);
    props.handleAdd(text);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={value} type="text" className="itemInput" />
      <button  disabled={!value} className="addItemButton">Add Item</button>
    </form>
  );
}

export default TodoForm;
