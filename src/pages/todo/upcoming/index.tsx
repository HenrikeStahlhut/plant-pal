import Headline from "@/components/Headline/Headline";
import TodoContainer from "@/components/TodoContainer/TodoContainer";

export default function TodoUpcoming() {
  return (
    <>
      <Headline>Upcoming Todo</Headline>
      <TodoContainer today={false} />
    </>
  );
}
