import { Container, List, Paper } from "@mui/material";
import Form from "../../components/form/Form";
import TodoItem from "../../components/itemList/TodoItem";

function Home() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
        <Paper>
          <List sx={{ bgcolor: 'background.paper', marginTop: "1em", borderRadius: "4px" }}>
            <TodoItem />
          </List>
      </Paper>
    </Container>
  );
}

export default Home;