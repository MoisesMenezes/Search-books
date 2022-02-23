import { Box, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";
import SearchInput from "../Components/SearchInput";
import { useAppSelector } from "../store/store";
import { SelectBooks } from "../store/Books.store";
import Card from "../Components/Card";

const Home: NextPage = () => {
  const { books, totalItems } = useAppSelector(SelectBooks);

  return (
    <>
      <Box p="2rem">
        <SearchInput />
      </Box>

      <Box>
        {books.map((book) => (
          <Card key={book.title} title={book.title} />
        ))}
      </Box>

      <h1>{totalItems}</h1>
    </>
  );
};

export default Home;
