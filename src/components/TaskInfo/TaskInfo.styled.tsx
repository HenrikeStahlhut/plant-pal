import styled from "styled-components";

export const TaskInfoCard = styled.div<{ completed: boolean }>`
  border-radius: 15px;
  padding: 15px;
  margin: 20px 0px;

  background-color: ${({ completed }) =>
    completed ? "var(--completed)" : "var(--uncompleted)"};

  @media (max-width: 600px) {
    margin: 20px 50px;
  }
`;
