import { createSelector } from '@reduxjs/toolkit';

import { selectUser } from './authSelectors';

export const selectNews = state => state.news.records;

export const selectFiltered = createSelector(selectNews, selectUser, (news, user) => {
  const newsArray = Object.values(news);

  if (!user) {
    return newsArray.filter(r => r.isApproved);
  }

  return newsArray;
});

export const selectSorted = createSelector(selectFiltered, filteredNews =>
  filteredNews.sort((prev, next) => next.creationDate.localeCompare(prev.creationDate))
);
