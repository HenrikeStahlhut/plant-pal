import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledDiv = styled.div`
  color: red;
`;

export default function Home() {
  return (
    <>
      <StyledDiv>Styled Div</StyledDiv>
    </>
  );
}
