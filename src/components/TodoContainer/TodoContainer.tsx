import { Container, TodoInput, TodoLabel } from "./TodoContainer.styled";

const dummyTodo = [
  {
    id: 1,
    content: "Water Monstera in living room",
    today: true,
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
