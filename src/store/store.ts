import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import BooksReducer from "./Books.store";
import FavoriteReducer from "./Favorites.store";




const store = configureStore({
  reducer: {
    books: BooksReducer,
    favorites: FavoriteReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;