import { useState } from "react";
import {
  Paper,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditTodoDialog from "../editDialog/EditTodoDialog";
import ConfirmationDialog from "../confirmationDialog/ConfirmationDialog";

export default function TodoItem({ todo, handleEditTodo, handleDeleteTodo }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openDelDialog, setOpenDelDialog] = useState(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleDelDialog = () => {
    setOpenDelDialog(!openDelDialog);
  };

  return (
    <>
      <EditTodoDialog
        openDialog={openDialog}
        handleDialog={handleDialog}
        handleEditTodo={handleEditTodo}
        todo={todo}
      />

      <ConfirmationDialog
        openDelDialog={openDelDialog}
        handleDelDialog={handleDelDialog}
        handleDeleteTodo={handleDeleteTodo}
        todo={todo}
      />

      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => {
                setOpenDelDialog(true);
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText
              primary={`${todo.text}`}
              onClick={() => {
                setOpenDialog(true);
              }}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
