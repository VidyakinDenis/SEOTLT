import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews, INewsForm, IUpdateNews } from "./types/news-types.ts";
import { v1 } from "uuid";
import dayjs from "dayjs";

interface IInitialState {
  news: INews[];
  selectedNews: INews | null;
}
const localStorageStore = localStorage.getItem("news");

const initialState: IInitialState = {
  news: localStorageStore ? JSON.parse(localStorageStore) : [],
  selectedNews: null,
};

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // создание новости
    create(state, action: PayloadAction<INewsForm>) {
      const id = v1();
      const date = dayjs().format("HH:mm DD.MM.YYYY");
      const { name, description } = action.payload;
      state.news.push({
        id,
        date,
        name,
        description,
      });
      localStorage.setItem("news", JSON.stringify(state.news));
    },

    // установка новости для подробного отображения
    setSelectedNews(state, action: PayloadAction<string>) {
      const selectedNews = state.news.find((news) => news.id === action.payload);
      if (selectedNews) {
        state.selectedNews = selectedNews;
      } else {
        state.selectedNews = null;
      }
    },

    // удаление новости из списка
    deleteNews(state, action: PayloadAction<string>) {
      state.news = state.news.filter((news) => news.id !== action.payload);
      localStorage.setItem("news", JSON.stringify(state.news));
    },

    // обновление имеющейся новости
    update(state, action: PayloadAction<IUpdateNews>) {
      const date = dayjs().format("HH:mm DD.MM.YYYY");

      const { id, name, description } = action.payload;

      const editedItem = state.news.find((item) => item.id === id);
      if (editedItem) {
        editedItem.date = date;
        editedItem.name = name;
        editedItem.description = description;
      }
      localStorage.setItem("news", JSON.stringify(state.news));
    },
  },
});

export const { create, deleteNews, update, setSelectedNews } = NewsSlice.actions;

export default NewsSlice.reducer;
