import { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function EditTodoDialog({
  openDialog,
  handleDialog,
  handleEditTodo,
  todo,
}) {
  const [newtext, setNewText] = useState(todo.text);

  const handleText = () => {
    handleEditTodo(todo.id, newtext);
    handleDialog();
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      handleText();
    }
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{"Editando Tarefa"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            fullWidth
            defaultValue={newtext}
            onChange={(evt) => setNewText(evt.target.value)}
            onKeyDown={(evt) => {
              handleKeyPress(evt);
            }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialog}>Cancelar</Button>
        <Button
          onClick={() => {
            handleText();
          }}
          autoFocus
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
