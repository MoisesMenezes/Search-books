import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import {
  addFavorite,
  getFavorites,
  SelectFavorites,
} from "../../store/Favorites.store";
import { useAppDispatch, useAppSelector } from "../../store/store";

const ModalBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={() => dispatch(addFavorite({ name: "teste5" }))}>
              Local storage
            </Button>
            <h1>MODAL</h1>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBook;
