import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  getFavorites,
  removeFavorite,
  SelectFavorites,
} from "../store/Favorites.store";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { favorites } = useAppSelector(SelectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  console.log("favorite", favorites);

  return (
    <>
      <button onClick={() => dispatch(removeFavorite("teste4"))}>
        REMOVER item
      </button>
    </>
  );
};

export default Home;
