import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { theme } from "@/styles/theme";
import { CheckboxType, FieldDefinitionsType } from "@/types/commentTypes";
import { OptionFields } from "@/types/res/commentRegForm";
import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";
import ButtonGroup from "./_components/ButtonGroup";

type Rules<T extends keyof CheckboxType> = Omit<
  RegisterOptions<FieldDefinitionsType, T>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

type CheckboxOptions<T extends keyof CheckboxType> = T extends "mood"
  ? { name: string }[]
  : OptionFields[];
interface CheckboxProps<T extends keyof CheckboxType> {
  name: T;
  label: string;
  value?: string | number;
  control: Control<FieldDefinitionsType>;
  errors: FieldErrors<FieldDefinitionsType>;
  children?: ReactNode;
  options: CheckboxOptions<T>;
  // rules?: Rules;
  rules?: Rules<T>;
  initialValues: string[];
}

export const CheckboxForm = <T extends keyof CheckboxType>({
  name,
  control,
  label,
  options,
  errors,
  rules,
  initialValues,
}: CheckboxProps<T>) => {
  const [selectBtn, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    setSelectedValues(initialValues);
  }, [initialValues]);

  return (
    <S.Wrap>
      <S.CheckboxTitleWrap>
        <S.Title>{label}</S.Title>
        <S.Notification>*복수 선택 가능</S.Notification>
      </S.CheckboxTitleWrap>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          <ButtonGroup
            options={options}
            selectBtn={selectBtn}
            onChange={values => {
              setSelectedValues(values);
              field.onChange(values);
            }}
            name={name}
          />
        )}
      />

      {errors[name] && <ErrorMessage error={errors[name]?.message || ""} />}
    </S.Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const CheckboxTitleWrap = styled.div`
  margin: 1rem 0;
`;

const Title = styled.div`
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.semiBold};
`;

const Notification = styled.div`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.semiBold};
  color: ${theme.color.primary};
`;

const S = { Wrap, CheckboxTitleWrap, Title, Notification };
