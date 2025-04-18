import * as S from "./styled.ts";
import { INewsForm } from "../../store/slices/news-slice/types/news-types.ts";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TitleInput from "./inputs/title-input";
import DescriptionInput from "./inputs/desription-input";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { create, setSelectedNews, update } from "../../store/slices/news-slice";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const NewsFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const methods = useForm<INewsForm>({ mode: "onSubmit" });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const selectedItem = id && useAppSelector((store) => store.news.selectedNews);

  useEffect(() => {
    if (id) {
      dispatch(setSelectedNews(id));
    }
  }, [id]);

  const submit: SubmitHandler<INewsForm> = (data) => {
    if(data.name!== undefined && data.description !== undefined) {
      if (id) {
        dispatch(update({ ...data, id: id }));
      } else {
        dispatch(create(data));
      }
      navigate("/");
    }
  };

  return (
    <FormProvider {...methods}>
      <S.NewsFormPageWrapper onSubmit={handleSubmit(submit)}>
        <S.InputBlock>
          <S.InputTitle>Название статьи</S.InputTitle>
          <TitleInput defaultValue={selectedItem && selectedItem.name} />
          {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
        </S.InputBlock>
        <S.InputBlock>
          <S.InputTitle>Статья</S.InputTitle>
          <DescriptionInput defaultValue={selectedItem && selectedItem.description} />
          {errors.name && <S.ErrorMessage>{errors?.description?.message}</S.ErrorMessage>}
        </S.InputBlock>
        <S.SubmitButton>{id ? "Завершить редактирование" : "Опубликовать новость"}</S.SubmitButton>
      </S.NewsFormPageWrapper>
    </FormProvider>
  );
};

export default NewsFormPage;
