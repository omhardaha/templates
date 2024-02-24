import { configureStore } from '@reduxjs/toolkit'
import favBookSlice from "../features/fav-book/favBookSlice"

export default configureStore({
  reducer: { favBookSlice }
})
