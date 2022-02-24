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
import { addFavorite } from "../../store/Favorites.store";
import { useAppDispatch } from "../../store/store";
import { InfoIcon } from "@chakra-ui/icons";

const ModalBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  return (
    <>
      <Button rightIcon={<InfoIcon fontSize="1.15rem" />} onClick={onOpen}>
        Ver Detalhes
      </Button>

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
