import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

// Topic
const Wrapper = styled.div`
  padding: 2rem 1.6rem;
`;

const BlockWrap = styled.div`
  border: 1px solid #f9f9f9;
  border-radius: 0.6rem;
  min-height: 4.8rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: ${theme.fontSize.xs};
  margin-bottom: 1rem;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Category = styled.span<{ dis: boolean }>`
  color: ${theme.color.grayColor[300]};
  width: 20%;
`;

const Content = styled.div`
  font-weight: ${theme.fontWeight.bold};
  width: 30%;
`;

const Percent = styled.span`
  margin: 0 2rem;
`;

const Graph = styled.div`
  width: 20%;
  background-color: ${theme.color.grayColor[100]};
  border-radius: 8px;
  height: 0.5rem;
  margin: 0 1rem;
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 1rem 0;
`;

const DetailItem = styled.div`
  width: 20%;
  background-color: red;
`;

const Title = styled(Content)`
  font-weight: ${theme.fontWeight.regular};
`;

// PercentGraph
const GraphWidth = styled.div<{ percent: number }>`
  background-color: ${theme.color.primary};
  width: ${({ percent }) => `${percent}%`};
  height: 100%;
  border-radius: 8px;
  &.first {
    background-color: ${theme.color.subPrimary};
  }
`;

export const S = {
  Wrapper,
  Wrap,
  BlockWrap,
  Category,
  Content,
  Percent,
  Graph,
  Details,
  DetailItem,
  Title,
  GraphWidth,
};
