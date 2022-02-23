import { createSlice ,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { BookApi } from '../services/BookApi';
import { RootState } from './store';


const { getBooks } = BookApi();

interface BooksProps {
  books: any[];
  totalPages: number;
  terms: string;
  totalItemsPerPage: number;
}

interface getBooksWithTermsProps {
  terms: string;
  page: number;
}

const initialState:BooksProps = {
  books: [],
  totalItemsPerPage: 10,
  totalPages: 0,
  terms: "",
}



export const getBooksWithTerms = createAsyncThunk<any,getBooksWithTermsProps>('books/getBooksWithTerms', async ({ terms,page}) => {
  const response = await getBooks(terms,page);
  return response;
})


export const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setTerms: (state, action: PayloadAction<string>) => {
      state.terms = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksWithTerms.fulfilled, (state, action) => {
      const formatBooks = action.payload.items.map((book: any) => {

        return {
          id: book.id,
          img: book.volumeInfo?.imageLinks?.thumbnail,
          title: book.volumeInfo?.title,
        }
      })

      state.books = formatBooks;
      state.totalPages = Math.ceil(action.payload.totalItems / state.totalItemsPerPage);
    })
  }
})

export const {setTerms } = BooksSlice.actions;
export const SelectBooks = (state: RootState) => state.books;

export default BooksSlice.reducer;