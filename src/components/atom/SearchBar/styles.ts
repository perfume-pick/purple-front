import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: ${theme.color.grayColor[100]};
  width: 100%;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  border-radius: 3.2rem;
`;

const SearchWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  outline: 0;
  font-size: ${theme.fontSize.base};
  margin-left: 1rem;

  &::placeholder {
    color: ${theme.color.textDisabled};
  }
`;

export const S = {
  Wrapper,
  SearchWrap,
  SearchInput,
};
