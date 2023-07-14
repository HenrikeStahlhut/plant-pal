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
import { RoomType } from "@prisma/client";
import { formatRoomType } from "@/lib/formatRoomType";
import { mutate } from "swr";

export default function AddRoomModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [type, setType] = useState<RoomType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setName("");
    setType(null);
    setError(null);
  };

  const handleAddRoom = () => {
    if (!name || !type) {
      setError("Please fill in all fields");
      return;
    }

    fetch("/api/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        type,
      }),
    }).then(() => {
      mutate("/api/rooms");
    });

    toggleModal();
    setName(null);
    setType(null);
    setError(null);
  };

  //TODO: <br> to margin

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
                value={name ?? ""}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
              <br />

              <StyledLabel htmlFor="room">Room</StyledLabel>
              <StyledSelect
                onChange={(e) => setType(e.target.value as RoomType)}
              >
                {Object.values(RoomType).map((type, index) => (
                  <option key={index} value={type}>
                    {formatRoomType(type)}
                  </option>
                ))}
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
