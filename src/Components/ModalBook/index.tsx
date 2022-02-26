import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { addFavorite } from "../../store/Favorites.store";
import { useAppDispatch } from "../../store/store";
import { InfoIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Book } from "../../types/book";

interface ModalBookProps {
  book: Book;
}

const ModalBook = ({ book }: ModalBookProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  return (
    <>
      <Button rightIcon={<InfoIcon fontSize="1.15rem" />} onClick={onOpen}>
        Ver Detalhes
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="3rem 1rem">
            <Box display="flex" justifyContent="center">
              <Image
                height="420px"
                width="280"
                src={book?.img}
                alt={book?.title}
              />
            </Box>

            <Box
              display="grid"
              gap="1rem"
              css={{
                p: {
                  fontWeight: "bold",
                  color: "#999999",
                },
                h3: {
                  fontWeight: "bold",
                },
              }}
            >
              <Heading textAlign="center">{book.title}</Heading>

              <Box>
                <Text as="h3">Autores:</Text>
                <Text as="p">{book.authors}</Text>
              </Box>

              <Box>
                <Text as="h3">Editora:</Text>
                <Text as="p">{book.publisher}</Text>
              </Box>
              <Box>
                <Text as="h3">Total de páginas: </Text>
                <Text as="p"> {book.pageCount}</Text>
              </Box>

              <Box
                css={{
                  display: "-webkit-box",
                  "-webkit-line-clamp": "5",
                  "-webkit-box-orient": "vertical",
                  overflow: "hidden",
                }}
              >
                <Text as="h3">Sinopse:</Text>
                <Text as="p" textOverflow="ellipsis">
                  {book.description}
                </Text>
              </Box>
            </Box>
            <Button
              position="absolute"
              top="7%"
              right="20%"
              p="8px"
              _hover={{
                background: "none",
              }}
              borderRadius="40%"
              onClick={() => dispatch(addFavorite(book))}
            >
              <Image
                width="25px"
                height="25px"
                src="/svg/heart-full.svg"
                alt="favorito"
              />
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBook;
