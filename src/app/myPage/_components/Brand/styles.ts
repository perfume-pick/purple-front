import styled from "@emotion/styled";
import { S as AccordStyles } from "../Accord/styles";

const Wrapper = styled.div<{ hasBrand: boolean }>`
  margin-top: 2.1rem;
  ${props => !props.hasBrand && `margin-top: 5.1rem;`};
`;

const Title = styled.h3`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSize.md};
  line-height: 1.5rem;
  color: ${props => props.theme.color.textColor};
`;

const BrandSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.4rem;
`;

const BrandSegment = styled.div`
  color: ${props => props.theme.color.textColor[100]};
  border: 2px solid #ffe2e0;
  padding: 1.4rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandSegmentLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const BrandCount = styled.span<{ isFirst: boolean }>`
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.isFirst && "#ff4647"};
`;

const BrandRatio = styled.span<{ isFirst: boolean }>`
  font-size: ${props => props.theme.fontSize.xs};
  color: ${props => props.isFirst && "#ff4647"};
`;

const BrandDescription = styled.p`
  text-align: right;
  color: ${props => props.theme.color.textColor[100]};
  font-size: ${props => props.theme.fontSize.xs};
`;

export const S = {
  Wrapper,
  Title,
  BrandSegmentContainer,
  BrandSegment,
  BrandSegmentLeftBox,
  BrandCount,
  BrandRatio,
  BrandDescription,
  ProgressBarTitle: AccordStyles.ProgressBarTitle,
};
