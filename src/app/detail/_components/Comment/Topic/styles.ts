import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const BlockWrap = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
  align-items: baseline;
  font-size: ${theme.fontSize.xs};
`;

const Category = styled.span`
  color: ${theme.color.grayColor[300]};
  width: 20%;
`;

const ContentsList = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Content = styled.div`
  /* font-weight: ${theme.fontWeight.bold}; */
  width: 40%;
`;

const Percent = styled.span`
  margin-left: 1.5rem;
  display: block;
  width: 10%;
`;

const Graph = styled.div`
  width: 25%;

  &.blur {
    opacity: 50%;
  }
`;

const EmptyBox = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background: transparent;
`;

export const S = {
  BlockWrap,
  Category,
  Content,
  Percent,
  Graph,
  ContentsList,
  EmptyBox,
};
