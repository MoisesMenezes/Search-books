import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { Book } from "../../types/book";
import ModalBook from "../ModalBook";

interface CardProps {
  book: Book;
}

const Card = ({ book }: CardProps) => {
  return (
    <Box
      w="550px"
      h="100%"
      bg="white"
      p="1rem"
      display="flex"
      gap="1.2rem"
      borderRadius="10px"
      boxShadow="0 2px 2px 0 rgba(0, 0, 0, 0.08)"
    >
      <Box minW="150px">
        <Image height="200px" width="150" src={book?.img} alt={book.title} />
      </Box>

      <Box display="flex" flexDir="column" gap="1rem" flex="1">
        <Heading as="h2" fontSize="1.2rem">
          {book.title}
        </Heading>

        <Heading as="h3" fontSize="0.9rem" color="gray.500">
          {book.authors}
        </Heading>

        <Box>
          <ModalBook book={book} />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
