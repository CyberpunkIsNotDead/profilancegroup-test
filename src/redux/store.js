import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices/authSlice';
import { newsSlice } from './slices/newsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    news: newsSlice.reducer,
  },
});
