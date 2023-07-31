import { StyledHeadline } from "./Headline.styled";

type HeadlineProps = {
  children: React.ReactNode;
};

export default function Headline({ children }: HeadlineProps) {
  return (
    <>
      <StyledHeadline className="details">{children}</StyledHeadline>
    </>
  );
}
