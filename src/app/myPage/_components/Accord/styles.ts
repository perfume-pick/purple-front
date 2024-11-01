import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const TitleTabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: ${props => props.theme.fontWeight.semiBold};
  font-size: ${props => props.theme.fontSize.md};
  line-height: 1.5rem;
  color: ${props => props.theme.color.textColor};
`;

const TabContainer = styled.div`
  padding: 0.4rem;
  border: 1px solid #f2f2f2;
  border-radius: 2.2rem;
`;

const Tab = styled.div<{ isSelected: boolean }>`
  display: inline-block;
  padding: 0.63rem 1.9rem;
  border-radius: 1.7rem;
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1.9rem;

  color: ${props => props.theme.color.textColor};

  ${props =>
    props.isSelected &&
    `
    color: ${props.theme.color.white};
    background-color: ${props.theme.color.primary.coral[400]};
    `}
`;

const ProgressBarTitle = styled.p`
  color: ${props => props.theme.color.primary.coral[400]};
  background-color: ${props => props.theme.color.primary.coral[5]};
  padding: 1.1rem 1.4rem;
  margin: 2.8rem 0;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.sm};
  line-height: 1.4;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2.8rem;
  display: flex;
  gap: 0.4rem;
`;

const ProgressBar = styled.div<{ width: string; backgroundColor: string }>`
  width: ${props => props.width};

  background-color: ${props => props.backgroundColor};

  &:nth-of-type(1) {
    border-radius: 0.6rem 0 0 0.6rem;
  }
  &:nth-of-type(3) {
    border-radius: 0 0.6rem 0.6rem 0;
  }
`;

const ProgressBarSegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.4rem;
`;

const ProgressBarSegment = styled.div`
  color: ${props => props.theme.color.textColor[100]};
  border: 2px solid #ffe2e0;
  padding: 1.4rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressBarSegmentLabelBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const ProgressBarSegmentColorCircle = styled.div<{ backgroundColor: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${props => props.backgroundColor};
`;

const ProgressBarSegmentCountText = styled.span`
  font-size: ${props => props.theme.fontSize.sm};
`;

const ProgressBarSegmentDescription = styled.p`
  text-align: right;
  color: ${props => props.theme.color.textColor[100]};
  font-size: ${props => props.theme.fontSize.xs};
`;

export const S = {
  Wrapper,
  TitleTabContainer,
  Title,
  TabContainer,
  Tab,
  ProgressBarTitle,
  ProgressBarContainer,
  ProgressBar,
  ProgressBarSegmentContainer,
  ProgressBarSegment,
  ProgressBarSegmentLabelBox,
  ProgressBarSegmentCountText,
  ProgressBarSegmentColorCircle,
  ProgressBarSegmentDescription,
};
