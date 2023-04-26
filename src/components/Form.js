import React, { useState } from "react";
import {IconButton, Input } from "@mui/material";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import AddTaskIcon from "@mui/icons-material/AddTask";

const Form = ({ addTodo, clearAllFinished }) => {
  const [formValue, setFormValue] = useState({
    content: "",
    isDone: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(formValue);
    setFormValue({ content: "", isDone: false });
  };

  return (
    <div id="form-container">
      <form id="todo-form" onSubmit={handleSubmit}>
        <Input
          autoFocus
          inputProps={{ maxLength: 40 }}
          required
          variant="outlined"
          value={formValue.content}
          onChange={(e) =>
            setFormValue({ ...formValue, content: e.target.value })
          }
        />
      </form>
        <div>
          <IconButton variant="contained" color="primary" type="submit">
            <AddTaskIcon></AddTaskIcon>
          </IconButton>
          <IconButton variant="contained" onClick={clearAllFinished}>
            <RemoveDoneIcon color="primary"></RemoveDoneIcon>
          </IconButton>
        </div>
    </div>
  );
};

export default Form;
