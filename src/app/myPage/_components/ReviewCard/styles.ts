import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 1.6rem 0;
`;

const ReviewBox = styled.div`
  display: flex;
  position: relative;
  gap: 0.4rem;
`;

const MoreButtonBox = styled.div`
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  cursor: pointer;
`;

const PerfumeImage = styled.img`
  width: 5.4rem;
  height: 5.4rem;

  object-fit: cover;
`;

const ReviewBoxRightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Content = styled.p<{ showOverflowContent: boolean }>`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.color.textColor[200]};
  line-height: 2.24rem;
  padding-top: 1.2rem;

  ${props =>
    !props.showOverflowContent &&
    `
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-line;
  `}
`;

const InteractionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.xs};
`;

const OverflowText = styled.span`
  cursor: pointer;
`;

const PerfumeInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1.2rem;
  margin: 1rem 0;
`;

const PerfumeInfoBox = styled.div`
  display: flex;
  gap: 1.1rem;
  font-size: ${props => props.theme.fontSize.sm};
`;

const PerfumeFieldName = styled.span`
  color: ${props => props.theme.color.textColor[200]};
`;

const PerfumeFieldValue = styled.span`
  color: ${props => props.theme.color.textColor[100]};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

const Keyword = styled.div`
  display: flex;
  gap: 0.4rem;
  font-size: ${props => props.theme.fontSize.sm};
`;

export const S = {
  Wrapper,
  ReviewBox,
  MoreButtonBox,
  PerfumeImage,
  Content,
  InteractionBox,
  OverflowText,
  ReviewBoxRightSection,
  PerfumeInfoContainer,
  PerfumeInfoBox,
  PerfumeFieldName,
  PerfumeFieldValue,
  Keyword,
};
