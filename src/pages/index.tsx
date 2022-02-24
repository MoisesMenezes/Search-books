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
  const { favorites } = useAppSelector(SelectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  console.log("favorite", favorites);

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
