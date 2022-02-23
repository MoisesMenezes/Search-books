import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { getBooksWithTerms, SelectBooks } from "../../store/Books.store";
import { useAppDispatch, useAppSelector } from "../../store/store";

const Paginate = () => {
  const { totalPages, terms } = useAppSelector(SelectBooks);
  const dispatch = useAppDispatch();

  const cssPagination = {
    ul: {
      display: "flex",
      width: "100%",
      "justify-content": "center",
      "list-style": "none",
      "user-select": "none",
    },

    ".selected": {
      color: "red",
    },
  };

  const handlePage = async (page: number): Promise<void> => {
    await dispatch(getBooksWithTerms({ page, terms }));
  };

  return (
    <Box display="flex" width="100%" __css={cssPagination}>
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={({ selected }) => handlePage(selected)}
      />
    </Box>
  );
};

export default Paginate;
