import React from "react";
import { useState } from "react";
import ToDo from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, item];
    });

    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((todoItem) => (
            <ToDo key={todoItem} text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
