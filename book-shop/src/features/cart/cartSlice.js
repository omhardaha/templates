import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  books: [
    { id: 'buc0AAAAMAAJ', qty: 1 },
    { id: "0r-ztgEACAAJ", qty: 4 },
    { id: "zxsiBQAAQBAJ", qty: 2 },
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = action.payload.book;
      state.books.push(newBook);
    },
    decrementBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload.id)
    }

  },
})

export const { addBook, remove } = cartSlice.actions
export default cartSlice.reducer
