import { configureStore } from '@reduxjs/toolkit'
import volumeReducer from '../VolumeControl/volumeSlice'


export default configureStore({
    reducer: {
      volume: volumeReducer,
    },
  })

  