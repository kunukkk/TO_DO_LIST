import React, { useState } from "react";
import Insert from "./Insert";
import "../styles/Header.css";

const Header = ({ onInsert, setReadyTodos, setIngTodos, setDoneTodos }) => {
  const [display, setDisplay] = useState(false);

  const onClick = () => {
    console.log("22");
    setDisplay(true);
  };

  const clearList = () => {
    const chk = window.confirm("Are you sure to clear all?");
    if (chk) {
      setReadyTodos([]);
      setIngTodos([]);
      setDoneTodos([]);
    } else return;
  };

  return (
    <>
      <div className="header_btns">
        <div onClick={onClick}>할 일 추가하기</div>
        <div onClick={clearList}>초기화 하기</div>
      </div>
      <div className="input_screen" id={display ? "visible" : "hidden"}>
        <Insert onInsert={onInsert} setDisplay={setDisplay} />
      </div>
    </>
  );
};

export default Header;
