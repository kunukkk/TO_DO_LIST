import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Ready from "./components/Ready";
import Ing from "./components/Ing";
import Done from "./components/Done";
import "./App.css";

const App = () => {
  const [readyTodos, setReadyTodos] = useState([]);
  const [ingTodos, setIngTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const nextId = useRef(1);

  const onInsert = (plan, date) => {
    const todo = {
      id: nextId.current,
      plan,
      date,
    };
    setReadyTodos((readyTodos) => readyTodos.concat(todo));
    nextId.current += 1;
  };

  const readyClick = (todo) => {
    setReadyTodos(readyTodos.filter((readyTodo) => readyTodo.id !== todo.id));
    setIngTodos((ingTodos) => ingTodos.concat(todo));
  };

  const ingClick = (todo) => {
    setIngTodos(ingTodos.filter((ingTodo) => ingTodo.id !== todo.id));
    setDoneTodos((doneTodos) => doneTodos.concat(todo));
  };

  const doneClick = (todo) => {
    setDoneTodos(doneTodos.filter((doneTodo) => doneTodo.id !== todo.id));
  };

  return (
    <>
      <div>
        <Header
          onInsert={onInsert}
          setReadyTodos={setReadyTodos}
          setIngTodos={setIngTodos}
          setDoneTodos={setDoneTodos}
        />
      </div>
      <div className="contents">
        <Ready todos={readyTodos} onClick={readyClick} />
        <Ing todos={ingTodos} onClick={ingClick} />
        <Done todos={doneTodos} onClick={doneClick} />
      </div>
    </>
  );
};

export default App;
