import { Container, TodoInput, TodoLabel } from "./TodoContainer.styled";

//TODO: add if completed, add logic for completed todos, add CRUD operations for todos

const dummyTodo = [
  {
    id: 1,
    content: "Water Monstera in living room",
    today: true,
    createdAt: "2021-06-01",
    updatedAt: "2021-06-01",
    completed: false,
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

type TodoContainerProps = {
  today: boolean;
};

export default function TodoContainer({ today }: TodoContainerProps) {
  //?: remove name="r" from TodoInput?
  return (
    <Container>
      {dummyTodo.map((todo) => {
        if (today === todo.today) {
          return (
            <>
              <TodoInput
                type="checkbox"
                id={todo.id.toString()}
                value={todo.id}
                name="r"
              />
              <TodoLabel htmlFor={todo.id.toString()}>{todo.content}</TodoLabel>
            </>
          );
        }
      })}
    </Container>
  );
}
