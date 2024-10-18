import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import { theme } from "@/styles/theme";
import { CheckboxType, FieldDefinitionsType } from "@/types/commentTypes";
import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";
import ButtonGroup from "./_components/ButtonGroup";

type Rules = Omit<
  RegisterOptions<CheckboxType>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

interface CheckboxProps {
  name: keyof CheckboxType;
  label: string;
  value?: string | number;
  control: Control<FieldDefinitionsType>;
  errors: FieldErrors<FieldDefinitionsType>;
  children?: ReactNode;
  options: Record<string, string>;
  rules?: Rules;
}

export const CheckboxForm: React.FC<CheckboxProps> = ({
  name,
  control,
  label,
  options,
  errors,
  rules,
}) => {
  const [selectBtn, setSelectedValues] = useState<string[]>([]);
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
  color: ${theme.color.primary.coral[400]};
`;

const S = { Wrap, CheckboxTitleWrap, Title, Notification };
