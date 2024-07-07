import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const StaticsSection = styled.section`
  background-color: ${theme.color.white};
`;

const Title = styled.span`
  display: block;
  padding: 1.6rem;
  font-weight: ${theme.fontWeight.semiBold};
`;

const TasteStatisticsWrap = styled.div`
  padding: 0 1.6rem;
`;

export const S = {
  Title,
  TasteStatisticsWrap,
  StaticsSection,
};
