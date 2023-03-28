import { React, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const ConfirmationDialog = forwardRef((props, ref) => {
  return (
    <Dialog open={props.openDelDialog} onClose={props.handleDelDialog}>
      <DialogTitle>{"Confirmação"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Deseja remover a terefa selecionada?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleDelDialog}>Cancelar</Button>
        <Button
          onClick={() => {
            props.handleDeleteTodo(props.todo.id);
          }}
          autoFocus
        >
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default ConfirmationDialog;

// Obs.: Melhorar a forma em que o componente foi escrito
