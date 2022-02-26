import { Box, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";
import SearchInput from "../Components/SearchInput";
import { useAppDispatch, useAppSelector } from "../store/store";
import { SelectBooks } from "../store/Books.store";
import Card from "../Components/Card";
import Paginate from "../Components/Paginate";
import ModalBook from "../Components/ModalBook";
import { getFavorites, SelectFavorites } from "../store/Favorites.store";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { books } = useAppSelector(SelectBooks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <Box p={{ base: "2rem 0.5rem", md: "1rem 2rem" }} flex="1 0  auto">
      <Heading textAlign="center" m="2rem 0">
        Pesquise pelo seu livro Favoritos
      </Heading>
      <Box p="2rem">
        <SearchInput />
      </Box>

      <Box
        margin="0 auto"
        display="flex"
        gap="2rem"
        flexWrap="wrap"
        justifyContent="center"
      >
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </Box>

      <Box>{books.length > 0 && <Paginate />}</Box>
    </Box>
  );
};

export default Home;
