import React from "react";
import { useState } from "react";
import ToDo from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    console.log("checked");
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      );
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onButton={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDo
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
