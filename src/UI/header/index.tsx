import * as S from './styled.ts';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
  };

  const onCreate = () => {
    navigate('/add_news');
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderLogo onClick={onHome}>News</S.HeaderLogo>
      <S.PublicButton onClick={onCreate}>Опубликовать новость</S.PublicButton>
    </S.HeaderWrapper>
  );
};
