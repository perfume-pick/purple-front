import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 32rem;
  background-color: ${props => props.theme.color.white};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2.4rem 2rem;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const TitleBox = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSize.md};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  text-align: left;
  padding: 1rem 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 2.2rem 0.9rem;
  background-color: #f7f8fb;
  border-radius: 1.1rem;
  margin-top: 0.8rem;
`;

const DescriptionBox = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${props => props.theme.color.textDisabled};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.regular};
`;

const DescriptionCheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const WithdrawButton = styled.button`
  width: 100%;
  padding: 1.2rem 0;
  background-color: ${props => props.theme.color.primary.coral[400]};
  color: ${props => props.theme.color.white};
  border: 0.1rem solid transparent;
  border-radius: 0.9rem;
  font-size: ${props => props.theme.fontSize.base};
  font-weight: ${props => props.theme.fontWeight.semiBold};

  :disabled {
    border: 0.1rem solid #dfdfdf;
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.textDisabled};
    font-weight: ${props => props.theme.fontWeight.regular};
    cursor: not-allowed;
  }
`;

const ConfirmTextBox = styled.div`
  display: flex;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border: 0.1rem solid #c8cfd8;
  border-radius: 0.4rem;
`;

const CheckboxInput = styled.input`
  display: none;
`;

const ConfirmText = styled.p`
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 500;
  color: ${props => props.theme.color.textDisabled};
`;

export const S = {
  Wrapper,
  TitleBox,
  Title,
  ContentBox,
  DescriptionContainer,
  DescriptionBox,
  DescriptionCheckBox,
  WithdrawButton,
  CheckboxLabel,
  CheckboxInput,
  ConfirmTextBox,
  ConfirmText,
};
