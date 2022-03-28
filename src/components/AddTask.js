import React, { useState } from "react";

export default function AddTask(props) {
  const [item, setItem] = useState("");

  function handleAdd(event) {
      event.preventDefault();
      props.add(item);
      setItem("");
  }

  return (
    <form>
      <input type="text" onChange={(e) => setItem(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
