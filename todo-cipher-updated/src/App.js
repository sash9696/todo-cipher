import "./App.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

//useState hook (used to manage state)

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // todoList.push(todoText);
    setTodoList((arr) => [...arr, todoText]);
    setTodoText("");
  };

  const deleteTodo = (index) => {
    todoList.splice(index, 1);
    setTodoList((arr) => [...arr, todoText]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className="todolabel">What do you want to do today?</label>
        <br />
        <input
          value={todoText}
          type="text"
          className="input"
          onChange={(event) => handleChange(event)}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>

      {todoList.map(
        (td, index) =>
          td !== "" && (
            <div className="todo">
              <br />
              <input type="checkbox" />
              <label>{td}</label>
              <IconButton onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          )
      )}
    </div>
  );
}

export default App;
