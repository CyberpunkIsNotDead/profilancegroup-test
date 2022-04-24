import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, role } = action.payload;

      state.user = { name, role };
    },

    logout: state => {
      state.user = null;
    },
  },
});

export { authSlice };
