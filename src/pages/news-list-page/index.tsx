import * as S from "./styled.ts";
import { useAppSelector } from "../../store/hooks";
import { NewsListItem } from "./news-list-item";

const NewsListPage = () => {
  const news = useAppSelector((store) => store.news.news);
    console.log(news,'here')

    if(!news.length){
        return (
            <h1>Новостей пока нет</h1>
        )
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
