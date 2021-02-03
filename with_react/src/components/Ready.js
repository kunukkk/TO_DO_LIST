import React from "react";
import ListItem from "./ListItem";

const Ready = ({ todos, onClick }) => {
  return (
    <div style={{ background: "red" }}>
      <span>Ready</span>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} onClick={onClick} />
      ))}
    </div>
  );
};

export default Ready;
