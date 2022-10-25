import React from "react";
import { useState } from "react";

const items = [];

function App() {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    items.push(item);
    setItem("");
    console.log(items);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
