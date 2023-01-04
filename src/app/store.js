import { configureStore } from '@reduxjs/toolkit'
import volumeReducer from '../features/volume/volumeSlice'


export default configureStore({
    reducer: {
      volume: volumeReducer,
    },
  })

  