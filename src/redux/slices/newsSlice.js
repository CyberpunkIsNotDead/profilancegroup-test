import { createSlice } from '@reduxjs/toolkit';

import { NEWS } from 'src/lib/constants';

const initialState = {
  records: NEWS.reduce((acc, curr) => ({ ...acc, [curr.creationDate]: curr }), {}),
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    add: (state, action) => {
      const { header, text } = action.payload;

      const creationDate = new Date().toISOString();

      state.records[creationDate] = {
        creationDate,
        header,
        text,
        isApproved: false,
      };
    },

    approve: (state, action) => {
      const creationDate = action.payload;

      state.records[creationDate] = { ...state.records[creationDate], isApproved: true };
    },

    remove: (state, action) => {
      const creationDate = action.payload;

      delete state.records[creationDate];
    },
  },
});

export { newsSlice };
