import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import type { NextPage } from "next";
import SearchInput from "../Components/SearchInput";
import { useAppSelector } from "../store/store";
import { SelectBooks } from "../store/Books.store";

const Home: NextPage = () => {
  const { books } = useAppSelector(SelectBooks);

  console.log("BOOKS", books);
  return (
    <Box p="2rem">
      <SearchInput />
    </Box>
  );
};

export default Home;
