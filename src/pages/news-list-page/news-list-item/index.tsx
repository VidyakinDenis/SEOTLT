import * as S from "./styled.ts";
import { EndOfCard } from "./styled.ts";
import { FC } from "react";
import { INews } from "../../../store/slices/news-slice/types/news-types.ts";
import { useAppDispatch } from "../../../store/hooks";
import { deleteNews } from "../../../store/slices/news-slice";
import { useNavigate } from "react-router-dom";

interface INewsListItemProps {
  listItem: INews;
}

export const NewsListItem: FC<INewsListItemProps> = ({ listItem }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    dispatch(deleteNews(listItem.id));
  };

  const handleRedirectToDetails = () => {
    navigate(`/news/${listItem.id}`);
  };

  return (
    <S.NewsListItemWrapper onClick={handleRedirectToDetails}>
      <S.NewsName>{listItem.name}</S.NewsName>
      <EndOfCard>
        <S.NewsDate>{listItem.date}</S.NewsDate>
        <S.DeleteItemButton onClick={(event) => handleDelete(event)}>удалить статью</S.DeleteItemButton>
      </EndOfCard>
    </S.NewsListItemWrapper>
  );
};
