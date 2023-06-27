import { RiDeleteBin2Fill } from "react-icons/ri";
import { StyledDeleteButton } from "./DeleteButton.styled";
import { title } from "process";
import {
  StyledOverlay,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledCloseModalBtn,
  StyledConfirmButton,
} from "../AddRoomModal/AddRoomModal.styled";
import { useState } from "react";

export default function DeleteButton() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <StyledDeleteButton onClick={toggleModal}>
        <RiDeleteBin2Fill size={25} />
      </StyledDeleteButton>

      {modalOpen && (
        <>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModal>
            <StyledModalContent>
              <StyledModalHeadline>
                Do you really want to delete this room?
              </StyledModalHeadline>
              <br />
              <StyledConfirmButton type="submit">
                No, go back!
              </StyledConfirmButton>
              <StyledConfirmButton type="submit">
                Yes, I am sure!
              </StyledConfirmButton>

              <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
            </StyledModalContent>
          </StyledModal>
        </>
      )}
    </>
  );
}
