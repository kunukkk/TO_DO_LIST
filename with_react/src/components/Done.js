import React from "react";
import ListItem from "./ListItem";

const Done = ({ todos, onClick }) => {
  return (
    <div style={{ background: "yellow" }}>
      <span>Done</span>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} onClick={onClick} />
      ))}
    </div>
  );
};

export default Done;
