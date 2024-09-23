"use client";

import { S } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholderText: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  isReadonly?: boolean;
};

function SearchBar({
  placeholderText,
  inputValue,
  onChange,
  onClick,
  isReadonly = false,
}: Props) {
  return (
    <S.Wrapper>
      <S.SearchWrap>
        <SearchIcon sx={{ fontSize: "2.5rem", color: "gray" }} />
        <S.SearchInput
          placeholder={placeholderText}
          value={inputValue}
          onChange={onChange}
          onClick={onClick}
          readOnly={isReadonly}
        />
      </S.SearchWrap>
    </S.Wrapper>
  );
}
export default SearchBar;
