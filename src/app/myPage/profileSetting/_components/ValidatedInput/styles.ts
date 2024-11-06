import styled from "@emotion/styled";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > label {
    padding-bottom: 1.6rem;
    font-weight: ${props => props.theme.fontWeight.semiBold};
  }

  & > input {
    background: #f7f8f9;
    padding: 2rem 2.4rem;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #e8ecf4;
    color: ${props => props.theme.color.textDisabled};

    &:focus {
      background: ${props => props.theme.color.white};
      color: ${props => props.theme.color.textColor[100]};
    }

    &.redline {
      border: 1px solid #ff3b3b;
      background: ${props => props.theme.color.white};
    }
  }
`;

const ErrorText = styled.p`
  color: ${props => props.theme.color.error};
  font-size: ${props => props.theme.fontSize.xs};
  padding-top: 0.8rem;
`;

export const S = {
  InputWrapper,
  ErrorText,
};
