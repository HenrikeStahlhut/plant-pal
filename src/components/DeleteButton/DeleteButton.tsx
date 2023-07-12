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

export enum DeleteButtonContentType {
  ROOM = "ROOM",
  PLANT = "PLANT",
}

//? Room/Plant lowercase?
type DeleteButtonProps = {
  contentType: DeleteButtonContentType;
  handleDelete: () => void;
  error: string | null;
  setError: (error: string | null) => void;
};

export default function DeleteButton({
  contentType,
  handleDelete,
  error,
  setError,
}: DeleteButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setError(null);
  };

  // TODO: disclaimer when plants are in the room thats supposed to be deleted

  // delete room

  if (contentType === DeleteButtonContentType.ROOM) {
    return (
      <>
        <StyledDeleteButton onClick={toggleModal}>
          <RiDeleteBin2Fill size={25} />
        </StyledDeleteButton>

        {modalOpen && (
          <>
            <StyledOverlay onClick={toggleModal} />
            <StyledModal>
              <StyledModalContent>
                <StyledModalHeadline>
                  Do you really want to delete this {contentType}?
                </StyledModalHeadline>
                <br />
                <StyledConfirmButton type="submit" onClick={toggleModal}>
                  No, go back!
                </StyledConfirmButton>
                <StyledConfirmButton type="submit" onClick={handleDelete}>
                  Yes, I am sure!
                </StyledConfirmButton>

                <StyledCloseModalBtn onClick={toggleModal}>
                  ✕
                </StyledCloseModalBtn>
              </StyledModalContent>
            </StyledModal>
          </>
        )}
      </>
    );
  }

  // delete plant

  if (contentType === DeleteButtonContentType.PLANT) {
    return (
      <>
        <StyledDeleteButton onClick={toggleModal}>
          <RiDeleteBin2Fill size={25} />
        </StyledDeleteButton>

        {modalOpen && (
          <>
            <StyledOverlay onClick={toggleModal} />
            <StyledModal>
              <StyledModalContent>
                {error && <div>Error: {error}</div>}

                <StyledModalHeadline>
                  Do you really want to delete this {contentType}?
                </StyledModalHeadline>
                <br />
                <StyledConfirmButton type="submit" onClick={toggleModal}>
                  No, go back!
                </StyledConfirmButton>
                <StyledConfirmButton type="submit" onClick={handleDelete}>
                  Yes, I am sure!
                </StyledConfirmButton>

                <StyledCloseModalBtn onClick={toggleModal}>
                  ✕
                </StyledCloseModalBtn>
              </StyledModalContent>
            </StyledModal>
          </>
        )}
      </>
    );
  }
}
