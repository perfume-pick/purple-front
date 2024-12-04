import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 7.2rem;
  gap: 10px;
  justify-content: center;
  background-color: ${theme.color.white};
  overflow-y: hidden;
`;

const SearchBarContainer = styled.div`
  margin: 1.6rem;
`;

export const S = {
  Wrapper,
  SearchBarContainer,
};
