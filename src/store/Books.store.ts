import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import { BookApi } from '../services/BookApi';
import { RootState } from './store';


const { getBooks } = BookApi();

interface BooksProps {
  books: any[];
  page: number;
  totalItems: number;
}

const initialState:BooksProps = {
  books: [],
  page: 0,
  totalItems: 0,
}

export const getBooksWithTerms = createAsyncThunk('books/getBooksWithTerms', async (terms: string) => {
  const response = await getBooks(terms);
  return response;
})

export const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksWithTerms.fulfilled, (state, action) => {
      const formatBooks = action.payload.items.map((book: any) => {

        return {
          id: book.id,
          img: book.volumeInfo.imageLinks.thumbnail,
          title: book.volumeInfo.title,
        }
      })

      state.books = formatBooks;
      state.totalItems = action.payload.totalItems;
    })
  }
})

export const SelectBooks = (state: RootState) => state.books;

export default BooksSlice.reducer;