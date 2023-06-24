import Link from "next/link";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Greeting from "@/components/Greeting/Greeting";
import Subheadline from "@/components/Subheadline/Subheadline";
import TodoContainer from "@/components/TodoContainer/TodoContainer";

export default function Home() {
  return (
    <>
      <Header>
        <Greeting />
        <Menu />
      </Header>

      <main>
        <Subheadline>Todays Todo</Subheadline>
        <TodoContainer today={true} />
        <Subheadline>Upcoming Todo</Subheadline>
        <TodoContainer today={false} />
      </main>
    </>
  );
}
