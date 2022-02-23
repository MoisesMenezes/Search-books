import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';



interface BooksProps {
  books: []
}


const initialState:BooksProps = {
  books: [],
}

export const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    consoleBooks: (state) => {
      console.log("state",state.books)
    }
  }
})


export const SelectBooks = (state: RootState) => state.books;

export default BooksSlice.reducer;