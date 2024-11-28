import React from "react";
import { IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Done } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
const Todo = ({ todo, handleMark, handleDelete, index }) => {
  return (
    <div className="todo">
      <IconButton
        onClick={() => handleMark(index)}
        style={{ color: "#50fa7b" }}
        className="todo-icon"
      >
        {todo.isDone ? <Cancel></Cancel> : <Done></Done>}
      </IconButton>
      <Typography
        variant="h5"
        style={
          todo.isDone
            ? {
              textDecoration: "line-through",
            }
            : {}
        }
      >
        {todo.content}
      </Typography>

      <IconButton
      className="todo-icon"
        onClick={() => handleDelete(index)}
        style={{ color: "#ff5555" }}
      >
        <Delete></Delete>
      </IconButton>
    </div>
  );
};

export default Todo;
