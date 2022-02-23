import { Box, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";
import SearchInput from "../Components/SearchInput";
import { useAppSelector } from "../store/store";
import { SelectBooks } from "../store/Books.store";
import Card from "../Components/Card";
import Paginate from "../Components/Paginate";

const Home: NextPage = () => {
  const { books } = useAppSelector(SelectBooks);

  return (
    <>
      <Box p="2rem">
        <SearchInput />
      </Box>

      <Box>
        {books.map((book) => (
          <Card key={book.id} title={book.title} />
        ))}
      </Box>

      <Box>
        <Paginate />
      </Box>
    </>
  );
};

export default Home;
