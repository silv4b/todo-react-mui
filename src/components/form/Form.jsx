import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material'

export default function Form({ handlerAddTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = {text: text, id: id};
    setId(id + 1);
    handlerAddTodo(todoObj);
  };

  return (
    <Paper style={{padding: "1em"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <TextField
          onChange={(evt) => setText(evt.target.value)}
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="text"
          onClick={() => {todoCreate(text)}}
        >
          ADD
        </Button>
      </div>
    </Paper>
  );
};