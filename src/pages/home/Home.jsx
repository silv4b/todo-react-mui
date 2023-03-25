import { Container, List } from "@mui/material";
import Form from "../../components/form/Form";
import TodoItem from "../../components/itemList/TodoItem";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const handlerAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handlerDeleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form handlerAddTodo={handlerAddTodo} />
      <List>
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                marginTop: "1em",
              }}
            >
              <TodoItem todo={todo} handlerDeleteTodo={handlerDeleteTodo} />
            </div>
          );
        })}
      </List>
    </Container>
  );
}
