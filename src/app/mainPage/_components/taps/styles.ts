import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
`;

const Tap = styled.div<{ focus: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  justify-content: space-around;
  align-items: center;
  font-size: ${props => props.theme.fontSize.base};

  & > div {
    display: flex;
    border-bottom: ${({ focus, theme }) =>
      focus
        ? `2px solid ${theme.color.primary.coral[400]}`
        : `1px solid #d2d2d2`};
    font-weight: ${({ focus }) => (focus ? "700" : "")};
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 100%;
    cursor: pointer;
  }
`;

export const S = {
  Wrapper,
  Tap,
};
