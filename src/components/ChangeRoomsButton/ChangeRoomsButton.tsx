import { fetcher } from "@/lib/fetcher";
import { GetRoomsSuccessResponse } from "@/pages/api/rooms";
import { Room } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import useSWR, { mutate } from "swr";
import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledLabel,
  StyledModal,
  StyledModalContent,
  StyledOverlay,
  StyledSelect,
} from "../AddRoomModal/AddRoomModal.styled";

const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  color: white;
  background-color: var(--dark-green);
  padding: 10px 15px;
  margin: 10px 0px;
`;

export default function ChangeRoomsButton() {
  const router = useRouter();
  const { id } = router.query;

  const [modalOpen, setModalOpen] = useState(false);
  const [roomId, setRoomId] = useState<Room["id"] | null>(null);
  const [modalError, setModalError] = useState<string | null>(null);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // fetch room data for edit plant
  const { data, error, isLoading } = useSWR<GetRoomsSuccessResponse>(
    "/api/rooms",
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return <div>Failed to load</div>;
  }

  if (isLoading || !data) {
    return <div>loading...</div>;
  }

  const handleEditPlantRoom = () => {
    if (!roomId) {
      setModalError("Please fill in all fields");
      return;
    }

    //? name und roomid uebergeben?
    fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomId,
      }),
    }).then(() => {
      mutate(`/api/plants/${id}`);
    });

    toggleModal();
    setModalError(null);
  };

  return (
    <>
      <StyledButton onClick={toggleModal}>Move to another room</StyledButton>

      {modalOpen && (
        <>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModal>
            <StyledModalContent>
              <StyledLabel htmlFor="roomId">Change room</StyledLabel>
              <StyledSelect
                id="roomId"
                name="roomId"
                value={roomId ?? ""}
                onChange={(e) => setRoomId(e.target.value)}
              >
                <option value="" disabled selected>
                  Select room
                </option>
                {data.rooms.map((room, index) => (
                  <option key={index} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </StyledSelect>
              <br />
              <StyledAddButton type="submit" onClick={handleEditPlantRoom}>
                Save
              </StyledAddButton>
              <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
              {modalError && <p>{modalError}</p>}
            </StyledModalContent>
          </StyledModal>
        </>
      )}
    </>
  );
}
