import Headline from "@/components/Headline/Headline";
import Menu from "@/components/Menu/Menu";
import Backbutton from "@/components/BackButton/Backbutton";
import Header from "@/components/Header/Header";
import { ROUTES } from "@/routes";
import TodoContainer from "@/components/TodoContainer/TodoContainer";
import Subheadline from "@/components/Subheadline/Subheadline";

export default function TodoUpcoming() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.HOME} />
        <Menu />
      </Header>
      <Headline>Upcoming Todo</Headline>
      <TodoContainer today={false} />
    </>
  );
}
