import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INews, INewsForm, IUpdateNews } from './types/news-types.ts';
import { v1 } from 'uuid';
import dayjs from 'dayjs';

interface IInitialState {
  news: INews[];
  selected: INews | null;
}

const initialState: IInitialState = {
  news: [],
  selected: null,
};

export const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    create(state, action: PayloadAction<INewsForm>) {
      const id = v1();
      const date = dayjs().format('HH:mm DD.MM.YYYY');
      const { name, description } = action.payload;
      state.news.push({
        id,
        date,
        name,
        description,
      });
      localStorage.setItem('news', JSON.stringify(state.news));
    },
    getSelectedNews(state, action: PayloadAction<string>) {
      const localStorageStore = localStorage.getItem('news');
      if (localStorageStore) state.news = JSON.parse(localStorageStore);
      const selectedNews = state.news.find((news) => news.id === action.payload);
      state.selected = selectedNews || null;
    },
    deleteNews(state, action: PayloadAction<string>) {
      const deletedItemIndex = state.news.findIndex((news) => news.id === action.payload);
      if (deletedItemIndex >= 0) {
        state.news = [
          ...state.news.slice(0, deletedItemIndex),
          ...state.news.slice(deletedItemIndex + 1),
        ];
      }
      localStorage.setItem('news', JSON.stringify(state.news));
    },

    update(state, action: PayloadAction<IUpdateNews>) {
      const date = dayjs().format('HH:mm-DD.MM.YYYY');

      const { id, name, description } = action.payload;

      const editedItem = state.news.find((item) => item.id === id);
      if (editedItem) {
        editedItem.date = date;
        editedItem.name = name;
        editedItem.description = description;
      }
      localStorage.setItem('news', JSON.stringify(state.news));
    },

    initializeState(state) {
      const localStorageStore = localStorage.getItem('news');
      if (localStorageStore) {
        state.news = JSON.parse(localStorageStore);
      } else {
        state.news = [];
      }
      state.selected = null;
    },
  },
});

export const { create, deleteNews, update, initializeState, getSelectedNews } = NewsSlice.actions;

export default NewsSlice.reducer;
