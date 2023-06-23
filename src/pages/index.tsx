import Link from "next/link";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Greeting from "@/components/Greeting/Greeting";
import Subheadline from "@/components/Subheadline/Subheadline";

export default function Home() {
  return (
    <>
      <Header>
        <Greeting />
        <Menu />
      </Header>

      <main>
        <Subheadline>Todays Todo</Subheadline>
        <Subheadline>Upcoming Todo</Subheadline>
      </main>
    </>
  );
}
