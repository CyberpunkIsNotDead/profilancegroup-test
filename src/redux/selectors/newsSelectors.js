import { createSelector } from '@reduxjs/toolkit';

import { selectUser } from './authSelectors';

export const selectNews = state => state.news.records;

export const selectFilteredForUser = createSelector(selectNews, selectUser, (news, user) => {
  if (!user) {
    return news.filter(r => r.isApproved);
  }

  return news;
});
