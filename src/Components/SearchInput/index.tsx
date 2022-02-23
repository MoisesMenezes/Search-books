import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import {
  cleanStates,
  getBooksWithTerms,
  setTerms,
} from "../../store/Books.store";
import { useAppDispatch } from "../../store/store";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  const debounceSearch = useDebounce(search, 1000);

  const handleSearch = async (terms: string) => {
    dispatch(setTerms(terms));
    dispatch(getBooksWithTerms({ page: 0, terms }));
  };

  useEffect(() => {
    if (search) {
      handleSearch(search);
      return;
    }

    dispatch(cleanStates());
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
