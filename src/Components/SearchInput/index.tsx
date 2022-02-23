import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 1000);

  useEffect(() => {
    console.log("SEARCH", search);
  }, [debounceSearch]);

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
