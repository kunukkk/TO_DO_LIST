import React from "react";
import ListItem from "./ListItem";

const Ing = ({ todos, onClick }) => {
  return (
    <div style={{ background: "orange" }}>
      <span>Ing</span>
      {todos.map((todo) => (
        <ListItem todo={todo} key={todo.id} onClick={onClick} />
      ))}
    </div>
  );
};

export default Ing;
