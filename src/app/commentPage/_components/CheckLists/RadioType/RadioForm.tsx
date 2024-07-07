import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import RadioBtnGroup from "@/components/Radio/RadioGroup";
import { RadioBtnOption } from "@/components/Radio/radio.type";
import { theme } from "@/styles/theme";
import { FieldDefinitionsType, RadioType } from "@/types/commentTypes";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  RegisterOptions,
} from "react-hook-form";

type Rules = Omit<
  RegisterOptions<RadioType>,
  "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
>;

interface RadioProps {
  name: keyof RadioType;
  label: string;
  value?: string | number;
  control: Control<FieldDefinitionsType>;
  errors: FieldErrors<FieldDefinitionsType>;
  children?: ReactNode;
  options: RadioBtnOption[];
  rules?: Rules;
}

export const RadioForm: React.FC<RadioProps> = ({
  name,
  control,
  label,
  options,
  errors,
  rules,
}) => {
  return (
    <S.Wrap>
      <S.RadioTitle>{label}</S.RadioTitle>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          <RadioBtnGroup
            options={options}
            value={field.value as string}
            onChange={field.onChange}
          />
        )}
      />

      {errors[name] && (
        <div>
          <ErrorMessage error={errors[name]?.message || ""} />
        </div>
      )}
    </S.Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

const RadioTitle = styled.div`
  font-size: ${theme.fontSize.base};
  margin: 1rem 0;
  font-weight: ${theme.fontWeight.semiBold};
`;

const S = { Wrap, RadioTitle };
