import styled from "@emotion/styled";

const Wrapper = styled.div`
  & > div {
    & > div:last-child:not(.filter-wrap) {
      padding-top: 3rem;
    }
  }
`;

const HeaderInner = styled.div`
  text-align: center;
  span {
    font-size: 1.7rem;
  }
`;

export const S = {
  Wrapper,
  HeaderInner,
};
