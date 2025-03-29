import { useFormContext } from "react-hook-form";
import * as S from "./styled";
import { FC } from "react";

interface ITitleInputProps {
  defaultValue?: string | null;
}

const TitleInput: FC<ITitleInputProps> = ({ defaultValue }) => {
  const { register } = useFormContext();
  return (
    <S.TitleInput
      {...register("name", { required: "Название статьи обязательно для заполнения" })}
      placeholder={"Название статьи "}
      type="string"
      defaultValue={defaultValue !== null ? defaultValue : ""}
    />
  );
};

export default TitleInput;
