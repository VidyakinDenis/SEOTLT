import * as S from './styled.ts';
import { EndOfCard } from './styled.ts';
import { FC } from 'react';
import { INews } from '../../../store/slices/news-slice/types/news-types.ts';
import { useAppDispatch } from '../../../store/hooks';
import { deleteNews } from '../../../store/slices/news-slice';

interface INewsListItemProps {
  listItem: INews;
}

export const NewsListItem: FC<INewsListItemProps> = ({ listItem }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteNews(listItem.id));
  };

  return (
    <S.NewsListItemWrapper>
      <S.NewsName href={`/news/${listItem.id}`}>{listItem.name}</S.NewsName>
      <EndOfCard>
        <S.NewsDate>{listItem.date}</S.NewsDate>
        <S.DeleteItemButton onClick={handleDelete}>удалить статью</S.DeleteItemButton>
      </EndOfCard>
    </S.NewsListItemWrapper>
  );
};
