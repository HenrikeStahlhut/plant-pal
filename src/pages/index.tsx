import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/rooms/all"}> go to rooms</Link>
    </>
  );
}
