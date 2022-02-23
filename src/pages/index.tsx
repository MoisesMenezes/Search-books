import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import type { NextPage } from "next";
import SearchInput from "../Components/SearchInput";

const Home: NextPage = () => {
  return (
    <Box p="2rem">
      <SearchInput />
    </Box>
  );
};

export default Home;
