import { useFormContext } from "react-hook-form";
import * as S from "./styled.ts";
import { FC } from "react";

interface IDescriptionInputProps {
  defaultValue?: string | null;
}

const DescriptionInput: FC<IDescriptionInputProps> = ({ defaultValue }) => {
  const { register } = useFormContext();

  return (
    <S.DescriptionInput
      {...register("description", { required: "Описание статьи обязательно для заполнения" })}
      placeholder={"Описание статьи "}
      defaultValue={defaultValue !== null ? defaultValue : ""}
    />
  );
};

export default DescriptionInput;
