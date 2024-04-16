import React, { useState } from "react";
import TodoItem from "./TodoItem.js";
import TodoForm from "./TodoForm.js";

const markCompleate = (id, items) => {
  console.log(id, items);
  return items.map((item) => {
    if (item.id === id) return { ...item, compleated: true };
    return item;
  });
};

const removeItem = (id, items) => items.filter((item) => item.id !== id);

function TodoApp() {
  const [items, setItems] = useState([]);

  const handleAddItems = (value) =>
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: prevItems.length,
          value: value,
          compleated: false,
        },
      ];
    });

  const handleCompleteItem = (id) => setItems(markCompleate(id, items));
  const handleRemoveItem = (id) => setItems(removeItem(id, items));

  console.log(items);

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm handleAdd={handleAddItems} />
        {items.map((item) => (
          <TodoItem
            item={item}
            handleCompleate={() => handleCompleteItem(item.id)}
            handleRemove={() => handleRemoveItem(item.id)}
          ></TodoItem>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
