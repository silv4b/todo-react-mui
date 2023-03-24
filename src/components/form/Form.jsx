import React, { useState, useCallback } from 'react';
import { TextField, Button, Paper } from '@mui/material'

export default function Form({ handlerAddTodo }) {
  const [text, setText] = useState('');
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    if (text.trim().length === 0) return;
    const todoObj = {text: text, id: id};
    setId(id + 1);
    handlerAddTodo(todoObj);
    setText('');
  };

  const handleInputKeyDown = useCallback((evt) => {
    if (evt.key === 'Enter') {
      if (evt.target.value.trim().length === 0 ) return;
      todoCreate(evt.target.value);
      evt.target.value = '';
      setText(evt.target.value);

    }
  }, [todoCreate]);

  return (
    <Paper style={{padding: "1em"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
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
          onClick={() => {todoCreate(text)}}
        >
          ADD
        </Button>
      </div>
    </Paper>
  );
};