import Link from "next/link";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Greeting from "@/components/Greeting/Greeting";
import Subheadline from "@/components/Subheadline/Subheadline";
import TodoContainer from "@/components/TodoContainer/TodoContainer";
import { WrapperLink } from "@/components/WrapperLink/WrapperLink.styled";
import { ROUTES } from "@/routes";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Header>
        <Greeting />
        <Menu />
      </Header>

      <Layout>
        <WrapperLink href={ROUTES.TODO_TODAY}>
          <Subheadline>Todays Todo</Subheadline>
        </WrapperLink>
        <TodoContainer today={true} />
        <WrapperLink href={ROUTES.TODO_UPCOMING}>
          <Subheadline>Upcoming Todo</Subheadline>
        </WrapperLink>
        <TodoContainer today={false} />
      </Layout>
    </>
  );
}
