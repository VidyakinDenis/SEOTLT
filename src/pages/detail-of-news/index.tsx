import * as S from './styled.ts';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSelectedNews } from '../../store/slices/news-slice';
import { useNavigate, useParams } from 'react-router-dom';
import EditingImage from '../../public/images/detail-of-news/edit-icon.svg';

const DetailsOfNews = () => {
  const dispatch = useAppDispatch();
  const selectedNews = useAppSelector((store) => store.news.selected);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getSelectedNews(id));
    }
  }, [id, dispatch]);

  if (!selectedNews) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    navigate(`/editing/${id}`);
  };

  return (
    <S.DetailsOfNewsWrapper>
      <S.NewsHeader>
        <S.NewsInfo>
          <S.NewsName>{selectedNews.name}</S.NewsName>
          <S.NewsDate>{selectedNews.date}</S.NewsDate>
        </S.NewsInfo>
        <S.EditingButton
          img={EditingImage}
          onClick={handleEdit}
        />
      </S.NewsHeader>
      <S.News>{selectedNews.description}</S.News>
    </S.DetailsOfNewsWrapper>
  );
};

export default DetailsOfNews;
