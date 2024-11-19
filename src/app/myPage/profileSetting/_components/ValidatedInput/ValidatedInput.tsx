import React from "react";
import { S } from "./styles";
import { useController, UseControllerProps } from "react-hook-form";
import { FormValues } from "../../page";
import { VALIDATED_PROFILE_NICKNAME } from "../../../../../constant/validation/validatedProfileText";

type ValidatedInputProps = {
  label: string;
} & UseControllerProps<FormValues>;

const errorMessages = {
  required:
    VALIDATED_PROFILE_NICKNAME.find(item => item.type === "REQUIRED")?.text ??
    "",
  disallowBlank:
    VALIDATED_PROFILE_NICKNAME.find(item => item.type === "NO_WHITESPACE")
      ?.text ?? "",
};

const ValidatedInput = ({ label, name, control }: ValidatedInputProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      required: errorMessages.required,
      pattern: {
        value: /^[^\s]+$/,
        message: errorMessages.disallowBlank,
      },
    },
  });

  return (
    <S.InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input {...field} />
      {fieldState.error && (
        <S.ErrorText>{fieldState.error?.message}</S.ErrorText>
      )}
    </S.InputWrapper>
  );
};

export default ValidatedInput;
