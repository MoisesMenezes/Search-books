import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  return (
    <InputGroup>
      <InputRightElement pointerEvents="none">
        <SearchIcon />
      </InputRightElement>
      <Input
        border="2px"
        type="text"
        placeholder="Digite o livro"
        borderColor="gray.400"
        focusBorderColor="gray.800"
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
