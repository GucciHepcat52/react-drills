import "./App.css";
import AppOne from "./components/AppOne";
import AppTwo from "./components/AppTwo";
import AppThree from "./components/AppThree";
import AppFour from "./components/AppFour";
import AppFive from "./components/AppFive";
import AppSix from "./components/AppSix";
import AddTask from "./components/AddTask.js";
import AppEight from "./components/AppEight.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import router from "./router";

function App() {
  // const [list, setList] = useState(["do stuff", "do more stuff"]);

  // function addToList(task) {
  //   setList((prevList) => {
  //     return [...prevList, task];
  //   });
  // }

  return (
    <div className="App">
      <h1>This is app</h1>
      {/* <AddTask add={addToList}/>
      <AppSix list={list} /> */}
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/details">Details</Link>
        </ul>
      </nav>

      <br />

      {router}
    </div>
  );
}

export default App;
