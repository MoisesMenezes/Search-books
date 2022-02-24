import { Box } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";
import { getBooksWithTerms, SelectBooks } from "../../store/Books.store";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Paginate = () => {
  const [page, setPage] = useState(0);
  const { totalPages, terms } = useAppSelector(SelectBooks);
  const dispatch = useAppDispatch();

  const cssPagination = {
    ul: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      listStyle: "none",
      userSelect: "none",
    },

    a: {
      transition: "all 0.1s",
      padding: { base: "0.8rem", md: "1rem" },
      fontWeight: "bold",
      lineHeight: "2.5rem",
    },

    ".selected": {
      color: "white",
      background: "black",
      borderColor: "transparent",
      borderRadius: "4px",
    },
  };

  const handlePage = async (): Promise<void> => {
    if (terms) {
      await dispatch(getBooksWithTerms({ page, terms }));
    }
  };

  useEffect(() => {
    handlePage();
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, [terms]);

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
        onPageChange={({ selected }) => setPage(selected)}
        previousLabel={<ArrowLeftIcon />}
        nextLabel={<ArrowRightIcon />}
        forcePage={page}
      />
    </Box>
  );
};

export default Paginate;
