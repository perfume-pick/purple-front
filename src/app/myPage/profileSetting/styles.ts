import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
    color: ${theme.color.white};
  }
`;

const Contents = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 1.6rem 0;

  & > form {
    width: 100%;
    padding-top: 3rem;
  }

  button {
    width: 100%;
    background: ${theme.color.primary.coral[400]};
    padding: 1.8rem;
    border-radius: 0.8rem;
    color: ${theme.color.white};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.md};
    margin-top: 19.4rem;

    &:disabled {
      background: ${theme.color.grayColor[500]};
      color: ${theme.color.textDisabled};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.md};
    }
  }
`;

export const S = {
  HeaderInner,
  Contents,
};
