import { RiPencilFill } from "react-icons/ri";
import { StyledEditButton } from "./EditButton.styled";
import { useState } from "react";
import {
  StyledOverlay,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledLabel,
  StyledInput,
  StyledAddButton,
  StyledCloseModalBtn,
} from "../AddRoomModal/AddRoomModal.styled";

//TODO: Think of better prop name
type EditButtonProps = {
  contentType: string;
};

export default function EditButton({ contentType }: EditButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <StyledEditButton onClick={toggleModal}>
        <RiPencilFill size={25} />
      </StyledEditButton>
      {modalOpen && (
        <>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModal>
            <StyledModalContent>
              <StyledModalHeadline>Rename {contentType}</StyledModalHeadline>

              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="name"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
              ></StyledInput>
              <br />
              <StyledAddButton type="submit">Save</StyledAddButton>

              <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
            </StyledModalContent>
          </StyledModal>
        </>
      )}
    </>
  );
}
