import { RiDeleteBin2Fill } from "react-icons/ri";
import { StyledDeleteButton } from "./DeleteButton.styled";
import {
  StyledOverlay,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledCloseModalBtn,
  StyledConfirmButton,
} from "../AddRoomModal/AddRoomModal.styled";
import { useState } from "react";

//TODO: Think of better prop name
type DeleteButtonProps = {
  contentType: string;
};

export default function DeleteButton({ contentType }: DeleteButtonProps) {
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
                Do you really want to delete this {contentType}?
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
