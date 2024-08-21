import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 2rem 1.6rem;
`;

const BlockWrap = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 0.6rem;
  height: 4.8rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  font-size: ${theme.fontSize.xs};
`;

const Category = styled.span`
  color: ${theme.color.grayColor[300]};
  width: 20%;
`;

const Content = styled.div`
  font-weight: ${theme.fontWeight.bold};
  width: 30%;
`;

const Percent = styled.span`
  margin: 0 1.5rem;
`;

const Graph = styled.div`
  width: 28%;
  background-color: pink;
`;

export const S = { Wrapper, BlockWrap, Category, Content, Percent, Graph };
