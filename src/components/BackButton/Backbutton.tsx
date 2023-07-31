import { WrapperLink } from "../WrapperLink/WrapperLink.styled";
import { FlexContainer } from "./Backbutton.styled";
import { BiLeftArrowAlt } from "react-icons/bi";

type BackButtonProps = {
  href: string;
};

export default function BackButton({ href }: BackButtonProps) {
  return (
    <>
      <WrapperLink href={href}>
        <FlexContainer>
          <BiLeftArrowAlt />
          <span>Back</span>
        </FlexContainer>
      </WrapperLink>
    </>
  );
}
