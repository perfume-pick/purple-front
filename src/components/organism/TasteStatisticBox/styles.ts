import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
  box-shadow: 0px 4rem 3.2rem 0px #0000000d;
  border-radius: 6px;
  padding: 3rem 0;

  ul {
    width: 64%;
    margin: 0 auto;
    padding: 2.4rem 0;
  }

  a {
    width: calc(100% - 3.2rem);
    padding: 1.6rem 0;
    text-align: center;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.bold};
    border: 1px solid #dfdfdf;
    color: ${theme.color.textDisabled};
    border-radius: 1rem;
    margin: 0 auto;
  }
`;

const ChartLineText = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.textColor[100]};

  & + li {
    padding-top: 1.4rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1.4rem;

    & > div {
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 3px;
    }
  }
`;

export const S = {
  Wrapper,
  ChartLineText,
};
