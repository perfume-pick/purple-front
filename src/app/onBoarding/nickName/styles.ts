import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 2rem;
`;

const NicknameLabel = styled.div`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  width: 25rem;
`;

const NickNameInputWrap = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme.color.white};
  align-items: center;
  padding: 1rem;
  /* margin: 6rem 0; */
  margin: 6rem 0 0.5rem 0;
  border: 1px solid ${theme.color.grayColor[200]};
  border-radius: 0.8rem;

  &.has-error {
    border: 1px solid ${theme.color.error};
  }

  & > input {
    border: none;
    background: none;
    width: 100%;
    height: 4rem;
    margin-right: 1rem;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #fff inset;
      -webkit-text-fill-color: #000;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

const ErrorText = styled.p`
  color: ${theme.color.error};
  font-size: ${theme.fontSize.xs};
  margin-bottom: calc(6rem + 1.2rem);

  &.has-text {
    margin-bottom: 6rem;
  }
`;

const FormWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  button {
    width: 100%;
  }
`;

export const S = {
  Wrapper,
  FormWrap,
  NicknameLabel,
  NickNameInputWrap,
  ErrorText,
  ButtonWrap,
};
