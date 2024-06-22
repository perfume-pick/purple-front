import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

// radio group 스타일
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const RadioBtn = styled.input`
  -webkit-appearance: none;
  appearance: none;
  justify-content: space-around;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: ${theme.color.grayColor[500]};

  /* radio 내부 점 */
  ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.color.white};
  }

  /* 선택됐을 때 */
  :checked {
    background-color: ${theme.color.primary};
    ::after {
      background-color: ${theme.color.white};
    }
  }
`;

const Label = styled.label`
  font-size: ${theme.fontSize.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 5.5rem;
  text-align: center;
  white-space: pre-line;
`;

export const S = {
  Wrapper,
  RadioWrapper,
  RadioBtn,
  Label,
};
