import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const SearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  font-weight: 600;

  & > span:last-child {
    font-size: ${theme.fontSize.sm};
    font-weight: 400;
    color: ${theme.color.textDisabled};
  }
`;

const SearchBarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;

  & > div {
    width: calc(100% - 2.8rem - 1.3rem);
  }

  & > button {
    font-size: ${theme.fontSize.base};
    border: 0;
    background: transparent;
    padding: 0;
    margin-left: 1.3rem;
  }
`;

const EmptyWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 7.4rem);
  border-top: 1px solid #d9d9de;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    line-height: 3.2rem;
    font-size: ${theme.fontSize.big};
    text-align: center;
    margin: 0 0 1.3rem 0;
  }

  a {
    background-color: transparent;
    border: 1px solid #cccccc;
    padding: 1.2rem 2rem;
    border-radius: 0.6rem;
    color: ${theme.color.black};
  }
`;

const SearchAutoCompleteArea = styled.div`
  width: 100%;
  height: calc(100vh - 7.4rem);
  border-top: 1px solid #d9d9de;
  background: ${theme.color.white};
  padding: 0;

  & > ul {
    padding: 0;
    margin: 0;

    & > li {
      padding: 1.6rem;
    }
  }
`;

export const S = {
  SearchTitle,
  SearchBarWrap,
  EmptyWrap,
  SearchAutoCompleteArea,
};
