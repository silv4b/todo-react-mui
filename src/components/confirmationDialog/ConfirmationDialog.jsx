import { React, forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmationDialog = forwardRef(
  ({ openDelDialog, handleDelDialog, handleDeleteTodo, todo }, ref) => {
    return (
      <Dialog open={openDelDialog} onClose={handleDelDialog}>
        <DialogTitle>{"Confirmação"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Deseja remover a terefa selecionada?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelDialog}>Cancelar</Button>
          <Button
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
            autoFocus
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

export default ConfirmationDialog;

// Obs.: Melhorar a forma em que o componente foi escrito
