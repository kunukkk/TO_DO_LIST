import React from "react";
import "../styles/ListItem.css";

const ReadyListItem = ({ todo, onClick }) => {
  const { plan, date } = todo;

  return (
    <div className="item_wrapper">
      <div className="item_plan">{plan}</div>
      <div className="item_date">~{date}</div>
      <div className="move_next" onClick={() => onClick(todo)}>
        &gt;
      </div>
    </div>
  );
};

export default ReadyListItem;
