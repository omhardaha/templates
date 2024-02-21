import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  books: [
    { id: 1234, title: "book1", desc: "This is first book" },
    { id: 1235, title: "book2", desc: "This is secon book" },
    { id: 1237, title: "book3", desc: "This is third book" }
  ]
}

const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = { id: nanoid(), title: action.payload.title, desc: action.payload.desc };
      state.books.push(newBook);
    }
    
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
