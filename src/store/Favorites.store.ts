import { createSlice ,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { Book } from '../types/book';
import { RootState } from './store';



interface FavoritesProps {
  favorites: Book[];
}


const initialState:FavoritesProps = {
  favorites: []
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Book>) => {
      const bookFilter = state.favorites.find((book) => {
        return book.id === action.payload.id
      })

      if(bookFilter) return;

      state.favorites = [...state.favorites,action.payload]
      localStorage.setItem('books', JSON.stringify(state.favorites))
    },

    removeFavorite: (state, action: PayloadAction<Book>) => {
      const newArray = state.favorites.filter((item) => {
        return item.id !== action.payload.id
      })

      state.favorites = newArray;
      localStorage.setItem('books', JSON.stringify(state.favorites))
    },

    getFavorites: (state) => {
      var books = JSON.parse(localStorage.getItem('books') || '[]');
      state.favorites = books;
    },

  },
})

export const {addFavorite, removeFavorite, getFavorites } = FavoriteSlice.actions;
export const SelectFavorites = (state: RootState) => state.favorites;

export default FavoriteSlice.reducer;