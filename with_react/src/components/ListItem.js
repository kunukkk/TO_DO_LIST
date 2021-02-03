import React from "react";

const ReadyListItem = ({ todo, onClick }) => {
  const { plan, date } = todo;

  return (
    <div>
      <div>
        <div>{plan}</div>
        <div>~{date}</div>
      </div>
      <div onClick={() => onClick(todo)}>&gt;</div>
    </div>
  );
};

export default ReadyListItem;
