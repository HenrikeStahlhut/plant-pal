import { RoomType } from "@prisma/client";
import error from "next/error";
import { type } from "os";
import { title } from "process";
import { useState } from "react";
import {
  StyledOpenBtn,
  StyledModal,
  StyledOverlay,
  StyledModalContent,
  StyledModalHeadline,
  StyledLabel,
  StyledAddButton,
  StyledCloseModalBtn,
  StyledInput,
  StyledSelect,
} from "./AddRoomModal.styled";

export default function AddRoomModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState(undefined);
  const [error, setError] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddRoom = () => {
    if (!title || !type) {
      setError("Please fill in all fields");
      return;
    }
    toggleModal();
    setError("");
  };

  //?: Error not working? useState(null) not working

  return (
    <>
      <StyledOpenBtn onClick={toggleModal}>Add Room</StyledOpenBtn>
      {modalOpen && (
        <>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModal>
            <StyledModalContent>
              <StyledModalHeadline>Add Room</StyledModalHeadline>

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
              <StyledLabel htmlFor="room">Room</StyledLabel>
              <StyledSelect>
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
              </StyledSelect>
              <br />
              <StyledAddButton type="submit" onClick={handleAddRoom}>
                Add
              </StyledAddButton>
              {error && <p>{error}</p>}
              <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
            </StyledModalContent>
          </StyledModal>
        </>
      )}
    </>
  );
}
