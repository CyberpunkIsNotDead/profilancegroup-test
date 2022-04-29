import { createSlice } from '@reduxjs/toolkit';

import { NEWS } from 'src/lib/constants';

const initialState = {
  records: NEWS.sort((prev, next) => next.creationDate.localeCompare(prev.creationDate)),
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    add: (state, action) => {
      const { header, text } = action.payload;

      const creationDate = new Date().toISOString();

      state.records.unshift({
        creationDate,
        header,
        text,
        isApproved: false,
      });
    },

    approve: (state, action) => {
      const recordIndex = state.records.findIndex(
        r => r.creationDate === action.payload.creationDate
      );

      state.records[recordIndex] = { ...state.records[recordIndex], isApproved: true };
    },

    remove: (state, action) => {
      state.records = state.records.filter(r => r.creationDate !== action.payload.creationDate);
    },
  },
});

export { newsSlice };
