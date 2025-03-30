import NewsListPage from "../pages/news-list-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsOfNews from "../pages/detail-of-news-page";
import NewsFormPage from "../pages/news-form-page";
import { Header } from "../UI/header";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<NewsListPage />}
          />
          <Route
            path="/news/:id"
            element={<DetailsOfNews />}
          />
          <Route
            path="/editing/:id"
            element={<NewsFormPage />}
          />
          <Route
            path="/add_news"
            element={<NewsFormPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
