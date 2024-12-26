"use client";

import { S } from "./styles";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholderText: string;
  inputValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  isReadonly?: boolean;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function SearchBar({
  placeholderText,
  inputValue,
  onChange,
  onClick,
  onKeyUp,
  isReadonly = false,
}: Props) {
  return (
    <S.Wrapper className="search-wrap">
      <S.SearchWrap>
        <SearchIcon sx={{ fontSize: "2.5rem", color: "gray" }} />
        <S.SearchInput
          placeholder={placeholderText}
          value={inputValue}
          onChange={onChange}
          onClick={onClick}
          readOnly={isReadonly}
          onKeyUp={onKeyUp}
        />
      </S.SearchWrap>
    </S.Wrapper>
  );
}
export default SearchBar;
