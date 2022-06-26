import "./App.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO</h1>
      </header>
      <form>
        <label className="todolabel">What do you want to do today?</label>
        <br />
        <input type="text" className="input" />
        <button className="button" type="submit">
          Add
        </button>
      </form>
      <div className="todo">
        <br />
        <input type="checkbox" />
        <label>learn react</label>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
