import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BookApi } from "../../services/BookApi";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { getBooks } = BookApi();
  const debounceSearch = useDebounce(search, 1000);

  const handleSearch = async (terms: string) => {
    const results = await getBooks(terms);

    return results;
  };

  useEffect(() => {
    handleSearch(search);
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

// https://www.googleapis.com/books/v1/volumes?q=React:keyes&key=AIzaSyCwi_61KeRihl2HloAUx9jGfAkpjIBXqKk
