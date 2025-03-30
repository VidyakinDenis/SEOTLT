import * as S from "./styled.ts";
import { useAppSelector } from "../../store/hooks";
import { NewsListItem } from "./news-list-item";

const NewsListPage = () => {
  const news = useAppSelector((store) => store.news.news);
  if (!news.length) {
    return <S.EmptyNews>Новостей пока нет :(</S.EmptyNews>;
  }

  return (
    <S.HomePageWrapper>
      <S.PageName>News</S.PageName>
      <S.NewsList>
        {!!news.length &&
          news.map((listItem) => (
            <NewsListItem
              listItem={listItem}
              key={listItem.id}
            />
          ))}
      </S.NewsList>
    </S.HomePageWrapper>
  );
};

export default NewsListPage;
