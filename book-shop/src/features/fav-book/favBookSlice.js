import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  books: [
    { id: 1234, title: "book1", desc: "This is first book", link: "http://books.google.com/books/content?id=0r-ztgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" },
    { id: 1235, title: "book2", desc: "This is secon book", link: "http://books.google.com/books/content?id=0r-ztgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" },
    { id: 1237, title: "book3", desc: "This is third book", link: "http://books.google.com/books/content?id=0r-ztgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" }
  ]
}

const favBookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = { id: nanoid(), title: action.payload.title, desc: action.payload.desc };
      state.books.push(newBook);
    },
    removeBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload.id)
    }

  },
})

export const { addBook, remove } = favBookSlice.actions
export default favBookSlice.reducer
