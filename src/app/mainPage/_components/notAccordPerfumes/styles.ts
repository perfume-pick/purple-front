import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  font-size: ${props => props.theme.fontSize.big};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  text-align: center;
`;

const Description = styled.div`
  margin-top: 2.9rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  padding: 0 1.9rem;
`;

const DirectButton = styled.button`
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.md};
  font-weight: ${props => props.theme.fontWeight.bold};
  text-align: center;

  width: 100%;
  height: 6rem;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.color.primary.coral[400]};
  margin: 10rem 0 0;
  cursor: pointer;
`;

export const S = {
  Wrapper,
  Description,
  ButtonBox,
  DirectButton,
};
