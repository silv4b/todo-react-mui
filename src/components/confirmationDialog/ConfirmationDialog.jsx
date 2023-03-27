import { React } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmationDialog() {
  return (
    <Dialog>
      <DialogTitle>{"Confirmação"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Deseja remover a terefa selecionada?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Não</Button>
        <Button>Sim</Button>
      </DialogActions>
    </Dialog>
  );
}
