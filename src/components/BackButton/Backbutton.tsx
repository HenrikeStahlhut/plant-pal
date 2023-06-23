import { WrapperLink } from "../WrapperLink/WrapperLink.styled";
import { ROUTES } from "@/routes";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { FlexContainer } from "./Backbutton.styled";
import { BiLeftArrowAlt } from "react-icons/bi";

type BackbuttonProps = {
  href: string;
};

export default function Backbutton({ href }: BackbuttonProps) {
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
