import Link from "next/link";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header";
import Greeting from "@/components/Greeting/Greeting";

export default function Home() {
  return (
    <>
      <Header>
        <Greeting />
        <Menu />
      </Header>
      <Link href={"/rooms/all"}> go to rooms</Link>
    </>
  );
}
