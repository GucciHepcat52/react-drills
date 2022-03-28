import React from "react";

export default function AppSix(props) {
  const displayList = props.list.map((items) => {
    return <h4 key={items}>{items}</h4>;
  });

  return <div>{displayList}</div>;
}
