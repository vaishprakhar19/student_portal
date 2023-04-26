import React from "react";
import { Container, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Done } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
const Todo = ({ todo, handleMark, handleDelete, index }) => {
  return (
    <div className="todo">
      <IconButton
        onClick={() => handleMark(index)}
        style={{ color: "#50fa7b" }}
      >
        {todo.isDone ? <Cancel></Cancel> : <Done></Done>}
      </IconButton>
      <Typography
        variant="h5"
        style={
          todo.isDone
            ? {
              textDecoration: "line-through",
              color: "gray",
            }
            : {}
        }
      >
        {todo.content}
      </Typography>

      <IconButton
        onClick={() => handleDelete(index)}
        style={{ color: "#ff5555" }}
      >
        <Delete></Delete>
      </IconButton>
    </div>
  );
};

export default Todo;
