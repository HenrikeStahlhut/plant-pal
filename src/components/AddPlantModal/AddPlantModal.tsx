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
} from "@/components/AddRoomModal/AddRoomModal.styled";
import useSWR, { mutate } from "swr";
import { GetRoomsSuccessResponse } from "@/pages/api/rooms";
import { fetcher } from "@/lib/fetcher";
import { PlantType, Room } from "@prisma/client";
import { formatPlantType } from "@/lib/formatPlantTypes";

export default function AddPlantModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState<Room["id"] | null>(null);
  const [type, setType] = useState<PlantType | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const { data, error, isLoading } = useSWR<GetRoomsSuccessResponse>(
    "/api/rooms",
    fetcher
  );

  if (error || (!isLoading && !data)) {
    return <div>failed to load</div>;
  }

  if (isLoading || !data) {
    return <div>loading...</div>;
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddPlant = () => {
    if (!name || !roomId) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    fetch("/api/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        roomId,
      }),
    }).then(() => {
      mutate("/api/plants");
    });

    toggleModal();
    setErrorMessage("");
    setName("");
    setRoomId(null);
  };

  // ?: Error not working? useState(null) not working
  // TODO: <br> to margin
  return (
    <>
      <StyledOpenBtn onClick={toggleModal}>Add Plant</StyledOpenBtn>
      {modalOpen && (
        <>
          <StyledOverlay onClick={toggleModal}></StyledOverlay>
          <StyledModal>
            <StyledModalContent>
              <StyledModalHeadline>Add Plant</StyledModalHeadline>
              {/* -- Name Plant --  */}
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              ></StyledInput>
              <br />
              {/* -- Select Room --  */}
              <StyledLabel htmlFor="roomId">Room</StyledLabel>
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
              {/* -- Select Planttype --  */}
              <StyledLabel htmlFor="planttype">Plant type</StyledLabel>
              <StyledSelect
                id="planttype"
                name="planttype"
                value={type ?? ""}
                onChange={(e) => setType(e.target.value as PlantType)}
              >
                {Object.values(PlantType).map((type, index) => (
                  <option key={index} value={type}>
                    {formatPlantType(type)}
                  </option>
                ))}
              </StyledSelect>

              <StyledAddButton type="submit" onClick={handleAddPlant}>
                Add
              </StyledAddButton>
              {errorMessage && <p>{errorMessage}</p>}
              <StyledCloseModalBtn onClick={toggleModal}>✕</StyledCloseModalBtn>
            </StyledModalContent>
          </StyledModal>
        </>
      )}
    </>
  );
}

console.log(Object.values(PlantType));
