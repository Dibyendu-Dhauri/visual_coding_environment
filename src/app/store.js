import { configureStore } from '@reduxjs/toolkit'
import motionReducers from '../features/motionSlice'
import looksReducers from '../features/looksSlice'

export const store = configureStore({
  reducer: {
    motion: motionReducers,
    looks:looksReducers
  },
})