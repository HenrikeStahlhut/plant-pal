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

// ? Room/Plant lowercase?
type DeleteButtonProps = {
  contentType: DeleteButtonContentType;
  handleDelete: () => void;
  error: string | null;
  setError: (error: string | null) => void;
  plants: number;
};

export default function DeleteButton({
  contentType,
  handleDelete,
  error,
  setError,
  plants,
}: DeleteButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [disclaimer, setDisclaimer] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setError(null);
  };

  const dislaimerMessage = () => {
    setDisclaimer("Room with plants cannot be deleted");
  };
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
                <StyledConfirmButton
                  type="submit"
                  onClick={plants ? dislaimerMessage : handleDelete}
                >
                  Yes, I am sure!
                </StyledConfirmButton>
                {disclaimer}
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

  throw new Error("Unexpected type for delete button");
}
