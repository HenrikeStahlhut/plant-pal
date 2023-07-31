import styled from "styled-components";

export const StyledOpenBtn = styled.button`
  padding: 5px 7px;
  border: none;
  background-color: transparent;
  color: var(--highlight-green);

  @media (max-width: 600px) {
    margin-right: 50px;
  }
`;

export const StyledModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const StyledOverlay = styled.div`
  background: rgba(165, 172, 121, 0.5);
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  backdrop-filter: blur(2px);
`;
export const StyledModalContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: var(--background-green);
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 15px;
`;
export const StyledCloseModalBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 8px;
  border: none;
  background-color: var(--dark-green);
  border-radius: 50%;
  color: var(--white);
`;

export const StyledModalHeadline = styled.h2`
  font-size: 20px;
`;

export const StyledAddButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  background-color: var(--dark-green);
`;

export const StyledConfirmButton = styled.button`
  color: white;
  border: none;
  border-radius: 20px;
  padding: 7px;
  margin: 10px 0px;
  background-color: var(--dark-green);

  :hover {
    background-color: var(--highlight-green);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 15em;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  margin: 10px 0px;
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 15px;
  padding: 7px 15px;
`;

export const StyledSelect = styled.select`
  border: none;
  border-radius: 15px;
  padding: 7px 15px;
`;
