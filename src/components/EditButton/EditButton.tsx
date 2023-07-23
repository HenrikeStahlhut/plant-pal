import { fetcher } from "@/lib/fetcher";
import { GetRoomsSuccessResponse } from "@/pages/api/rooms";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import useSWR, { mutate } from "swr";
import {
  StyledAddButton,
  StyledCloseModalBtn,
  StyledInput,
  StyledLabel,
  StyledModal,
  StyledModalContent,
  StyledModalHeadline,
  StyledOverlay,
} from "../AddRoomModal/AddRoomModal.styled";
import { StyledEditButton } from "./EditButton.styled";

export enum EditButtonContentType {
  ROOM = "ROOM",
  PLANT = "PLANT",
}

type EditButtonProps = {
  contentType: EditButtonContentType;
};

export default function EditButton({ contentType }: EditButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [modalError, setModalError] = useState<string | null>(null);

  const router = useRouter();
  const { id } = router.query;

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // fetch room data for edit plant
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

  // function for edit room
  const handleEditRoom = () => {
    if (!name) {
      setModalError("Please fill in all fields");
      return;
    }

    fetch(`/api/rooms/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
      }),
    }).then(() => {
      mutate(`/api/rooms/${id}`);
    });

    toggleModal();
    setName(null);
    setModalError(null);
  };

  //! Fix fetch

  // function for edit plant
  const handleEditPlant = () => {
    if (!name) {
      setModalError("Please fill in all fields");
      return;
    }

    fetch(`/api/plants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        roomId,
      }),
    }).then(() => {
      mutate(`/api/plants/${id}`);
    });

    toggleModal();
    setName(null);
    setModalError(null);
  };

  // edit Room logic
  if (contentType === EditButtonContentType.ROOM) {
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
                <StyledModalHeadline>Rename this room</StyledModalHeadline>

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
                <StyledAddButton type="submit" onClick={handleEditRoom}>
                  Save
                </StyledAddButton>

                <StyledCloseModalBtn onClick={toggleModal}>
                  ✕
                </StyledCloseModalBtn>
                {modalError && <p>{modalError}</p>}
              </StyledModalContent>
            </StyledModal>
          </>
        )}
      </>
    );
  }

  // edit plant name
  if (contentType === EditButtonContentType.PLANT) {
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
                <StyledModalHeadline>Rename this plant</StyledModalHeadline>

                <StyledLabel htmlFor="name">New name</StyledLabel>
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

                <StyledAddButton type="submit" onClick={handleEditPlant}>
                  Save
                </StyledAddButton>

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
