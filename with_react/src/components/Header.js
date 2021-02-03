import React, { useCallback, useState } from "react";
import Insert from "./Insert";

const Header = ({ onInsert }) => {
  const [display, setDisplay] = useState(false);
  const [clear, setClear] = useState(false);

  const onClick = () => {
    setDisplay(true);
  };

  const clearList = () => {
    const chk = window.confirm("Are you sure to clear all?");
    if (chk) setClear(true);
    else return;
  };

  return (
    <div>
      <div onClick={onClick}>할 일 추가하기</div>
      <div onClick={clearList}>초기화 하기</div>
      <Insert onInsert={onInsert} id={display ? "visible" : "none"} />
    </div>
  );
};

export default Header;
