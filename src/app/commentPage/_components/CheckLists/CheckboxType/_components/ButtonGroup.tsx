import React from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

interface ButtonGroupProps {
  options: Record<string, string>;
  selectBtn: string[];
  onChange: (selectBtn: string[]) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  selectBtn,
  onChange,
}) => {
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
      {Object.entries(options).map(([key, label]) => (
        <S.Box
          key={key}
          onClick={() => handleClickBox(key)}
          selected={selectBtn.includes(key)}
        >
          {label}
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
    props.selected
      ? `${theme.color.primary.coral[400]}`
      : `${theme.color.white}`};
  color: ${props =>
    props.selected ? ` ${theme.color.white}` : `${theme.color.textDisabled}`};
  border: ${props =>
    props.selected
      ? `1px solid ${theme.color.primary.coral[400]}`
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
