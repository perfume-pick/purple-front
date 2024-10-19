import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

type Option = {
  optionCode: string;
  optionName: string;
};

type ButtonGroupOptions<T extends "mood" | "season"> = T extends "mood"
  ? { name: string }[]
  : Option[];

interface ButtonGroupProps<T extends "mood" | "season"> {
  options: ButtonGroupOptions<T>;
  selectBtn: string[];
  onChange: (selectBtn: string[]) => void;
  name?: "mood" | "season";
}

const ButtonGroup = <T extends "mood" | "season">({
  options,
  selectBtn,
  onChange,
  name,
}: ButtonGroupProps<T>) => {
  const handleClickBox = (value: string) => {
    const isSelected = selectBtn.includes(value);
    let newSelectedValues: string[] = [];

    if (isSelected) {
      newSelectedValues = selectBtn.filter(val => val !== value);
    } else {
      newSelectedValues = [...selectBtn, value];
    }
    onChange(newSelectedValues);
  };

  return (
    <S.ButtonWrap>
      {name === "season"
        ? (options as Option[]).map(option => (
            <S.Box
              key={option.optionCode}
              onClick={() => handleClickBox(option.optionCode)}
              selected={selectBtn.includes(option.optionCode)}
            >
              {option.optionName}
            </S.Box>
          ))
        : (options as { name: string }[]).map(option => (
            <S.Box
              key={option.name}
              onClick={() => handleClickBox(option.name)}
              selected={selectBtn.includes(option.name)}
            >
              {option.name}
            </S.Box>
          ))}
    </S.ButtonWrap>
  );
};

const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Box = styled.div<{ selected: boolean }>`
  background-color: ${props =>
    props.selected ? `${theme.color.primary}` : `${theme.color.white}`};
  color: ${props =>
    props.selected ? ` ${theme.color.white}` : `${theme.color.textDisabled}`};
  border: ${props =>
    props.selected
      ? `1px solid ${theme.color.primary}`
      : `1px solid ${theme.color.grayColor[500]}`};
  border-radius: 0.5rem;
  padding: 0.5rem 1.39rem;
  margin: 0.4rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${theme.fontSize.base};
`;

const S = { ButtonWrap, Box };

export default ButtonGroup;
