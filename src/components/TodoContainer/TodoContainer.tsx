import { Fragment } from "react";
import { Container, TodoInput, TodoLabel } from "./TodoContainer.styled";

//TODO: add if completed, add logic for completed todos, add CRUD operations for todos

// TODO: marc
const dummyTodos: Todo[] = [
  {
    id: 1,
    content: "Water Monstera in living room",
    today: true,
    // createdAt: "2021-06-01",
    // updatedAt: "2021-06-01",
    // completed: false,
  },
  {
    id: 2,
    content: "Repot Basil in kitchen",
    today: true,
  },
  {
    id: 3,
    content: "Water Monstera in bedroom",
    today: false,
  },
  {
    id: 4,
    content: "Repot String of Hearts in bedroom",
    today: false,
  },
];

interface Todo {
  id: number;
  content: string;
  today: boolean;
}

type TodoContainerProps = {
  today: boolean;
  // todos: Todo;
};

// @ts-ignore
export default function TodoContainer({ today }: TodoContainerProps) {
  //?: remove name="r" from TodoInput?
  return (
    <Container>
      {dummyTodos
        .filter((todo) => todo.today)
        .map((todo) => (
          <Fragment key={todo.id}>
            <TodoInput
              type="checkbox"
              id={todo.id.toString()}
              value={todo.id}
              name="r"
              onClick={() => console.log("clicked")}
            />
            <TodoLabel htmlFor={todo.id.toString()}>{todo.content}</TodoLabel>
          </Fragment>
        ))}
    </Container>
  );
}
