import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function Form({ handleAddTodo }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const handleCreate = (text) => {
    if (text.trim().length === 0) return;
    const todoObj = { text: text, id: id };
    setId(id + 1);
    handleAddTodo(todoObj);
    setText("");
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      if (evt.target.value.trim().length === 0) return;
      handleCreate(evt.target.value);
      setText("");
    }
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          onChange={(evt) => setText(evt.target.value)}
          onKeyDown={handleInputKeyDown}
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          value={text}
          fullWidth
        />
        <Button
          variant="text"
          onClick={() => {
            handleCreate(text);
          }}
        >
          ADD
        </Button>
      </div>
    </Paper>
  );
}
