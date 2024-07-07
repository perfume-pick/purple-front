import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Wrapper = styled.div`
  padding: 1.6rem;
`;

const ReviewText = styled.p`
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.textColor[200]};
  line-height: 2.24rem;
  padding-top: 1.2rem;

  &.brief-text {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-line;
  }
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.fontSize.xs};
  color: ${theme.color.textColor[200]};
  padding-top: 0.4rem;
`;

export const S = {
  Wrapper,
  ReviewText,
  BottomButtons,
};
