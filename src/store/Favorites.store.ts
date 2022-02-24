import { createSlice ,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';



interface FavoritesProps {
  favorites: any[];
}


const initialState:FavoritesProps = {
  favorites: []
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<any>) => {
      state.favorites = [...state.favorites,action.payload]
      localStorage.setItem('books', JSON.stringify(state.favorites))
    },

    removeFavorite: (state, action: PayloadAction<any>) => {
      const newArray = state.favorites.filter((item) => {
        return item.name !== action.payload
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