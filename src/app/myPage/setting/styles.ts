import styled from "@emotion/styled";

const Layout = styled.div`
  height: 100%;
  padding-top: 4.8rem;
`;

const HeaderBottomContents = styled.div`
  padding: 3.2rem 0 5.8rem;
`;

const Block = styled.button`
  width: 100%;
  display: inline-block;
  text-align: left;
  height: 6rem;
  padding: 0 1.7rem;
  border-color: #f9f9f9;
  border-style: solid;
  border-width: 0;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${props => props.theme.color.textColor[100]};
  box-sizing: border-box;
  cursor: pointer;

  &:not(:last-child) {
    border-top-width: 3px;
  }
  &:last-child {
    border-top-width: 3px;
    border-bottom-width: 3px;
  }
`;

const Anchor = styled.a`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const S = {
  Layout,
  HeaderBottomContents,
  Block,
  Anchor,
};
