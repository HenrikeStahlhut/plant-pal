import Headline from "@/components/Headline/Headline";
import Menu from "@/components/Menu/Menu";
import Backbutton from "@/components/BackButton/Backbutton";
import Header from "@/components/Header/Header";
import { ROUTES } from "@/routes";
import TodoContainer from "@/components/TodoContainer/TodoContainer";
import Subheadline from "@/components/Subheadline/Subheadline";
import Layout from "@/components/Layout/Layout";

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join(".");
}

const todaysdate: string = formatDate(new Date());

export default function TodoToday() {
  return (
    <>
      <Header>
        <Backbutton href={ROUTES.HOME} />
        <Menu />
      </Header>

      <Layout>
        <Headline>Todays Todo</Headline>
        <Subheadline>{todaysdate}</Subheadline>
        <TodoContainer today={true} />
      </Layout>
    </>
  );
}
