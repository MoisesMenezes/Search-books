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

const ModalBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("AAA");

  return (
    <>
      <Button as="a" onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>MODAL</h1>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBook;
