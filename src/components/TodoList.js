import React, { useState,useEffect } from "react";
import Todo from './Todo';
import Form from './Form';
import { v4 as uuidv4 } from "uuid";
import './TodoList.css';

function TodoList() {
const [todos, setTodos] = useState(
    !localStorage.getItem("todos-list")
      ? []
      : JSON.parse(localStorage.getItem("todos-list"))
  );

  //everytime todos list changes, save the current state to local storage
  useEffect(() => {
    localStorage.setItem("todos-list", JSON.stringify(todos));
  }, [todos]);
  const handleMark = (index) => {
    todos[index].isDone = !todos[index].isDone;
    setTodos([...todos]);
  };
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handleDelete = (index) => {
    //delete one item at index given
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  const clearAllFinished = () => {
    setTodos(todos.filter((todo) => todo.isDone === false));
  };
  
  return ( <>
  <div className="page">
    <h1 className="heading-space">ToDo List</h1>
    <Form id="todo-form" addTodo={addTodo} clearAllFinished={clearAllFinished} />
      <div className="todos-container">
        {todos.map((todo, index) => (
          <Todo
            key={uuidv4()}
            index={index}
            todo={todo}
            handleMark={handleMark}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  </>
  );

}

export default TodoList;
