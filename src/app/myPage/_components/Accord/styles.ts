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
    background-color: ${props.theme.color.primary};
    `}
`;

export const S = {
  Wrapper,
  TitleTabContainer,
  Title,
  TabContainer,
  Tab,
};
