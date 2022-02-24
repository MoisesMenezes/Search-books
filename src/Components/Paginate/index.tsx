import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { getBooksWithTerms, SelectBooks } from "../../store/Books.store";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

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

    a: {
      transition: "all 0.1s",
      padding: { base: "0.8rem", md: "1rem" },
      "font-weight": "bold",
      "line-height": "2.5rem",
    },

    ".selected": {
      color: "white",
      background: "black",
      "border-color": "transparent",
      " border-radius": "4px",
    },
  };

  const handlePage = async (page: number): Promise<void> => {
    await dispatch(getBooksWithTerms({ page, terms }));
  };

  return (
    <Box
      display="flex"
      width="100%"
      __css={cssPagination}
      p="2rem 1rem"
      fontSize={{ base: "0.7rem", md: "1.2rem" }}
    >
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={({ selected }) => handlePage(selected)}
        previousLabel={<ArrowLeftIcon />}
        nextLabel={<ArrowRightIcon />}
      />
    </Box>
  );
};

export default Paginate;
