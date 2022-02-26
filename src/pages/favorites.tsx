import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getFavorites, SelectFavorites } from "../store/Favorites.store";
import { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "../Components/Card";

const Home: NextPage = () => {
  const { favorites } = useAppSelector(SelectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <Box flex="1 0  auto">
      <Heading textAlign="center" p="3rem 1rem">
        Livros Favoritos
      </Heading>
      <Box>
        <Box
          p={{ base: "2rem 0.5rem", md: "1rem 2rem" }}
          margin="0 auto"
          display="flex"
          gap="2rem"
          flexWrap="wrap"
          justifyContent="center"
        >
          {favorites.length > 0 ? (
            <>
              {favorites.map((book) => (
                <Card key={book.id} book={book} />
              ))}
            </>
          ) : (
            <Text fontSize="1.2rem" mt="2rem" fontWeight="500">
              Você não possui livros favoritados ;(
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
