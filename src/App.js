import "./App.css";
import AppOne from "./components/AppOne";
import AppTwo from "./components/AppTwo";
import AppThree from "./components/AppThree";
import AppFour from "./components/AppFour";
import AppFive from "./components/AppFive";
import AppSix from "./components/AppSix";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState(["do stuff", "do more stuff"]);
  const [item, setItem] = useState("");

  function addToList(event) {
    event.preventDefault();
    setList((prevList) => {
      return [...prevList, item];
    });
    setItem("");
  }

  return (
    <div className="App">
      <form>
        <input type="text" onChange={(e) => setItem(e.target.value)} />
        <button onClick={addToList}>Add</button>
      </form>
      <AppSix list={list} />
    </div>
  );
}

export default App;
