import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  padding-right: 3.2rem;
`;

const TitleContainer = styled.div`
  margin: 57px 0 47px;
`;

const TitleBox = styled.div`
  width: 19.6rem;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  line-height: 1.4;
  padding: 1.6rem 3.7rem 1.6rem 1.6rem;
`;

const Bar = styled.div`
  height: 10.6rem;
  border-radius: 0.8rem;
  background: #fb9191;
`;

const EmphasizeText = styled.span`
  color: ${props => props.theme.color.primary.coral[400]};
`;

const DescriptionBox = styled.span`
  font-size: 2.4rem;
`;

const Message = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem;
  position: relative;
  background-color: #ffe2e0;
  color: ${props => props.theme.color.primary.coral[400]};
  font-weight: ${props => props.theme.fontWeight.regular};
  border-radius: 0.6rem;
  font-size: ${props => props.theme.fontSize.sm};

  &::before {
    z-index: 0;
    content: "";
    width: 0;
    height: 0;
    border-left: 0.7rem solid transparent;
    border-right: 0.7rem solid transparent;
    border-top: 1rem solid #ffe2e0;

    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
  }
`;

const MyBar = styled(Bar)`
  height: 16.8rem;
  border-radius: 0.8rem;
  background: linear-gradient(180deg, #ffe3e3 0%, #f76161 100%);
`;

const BarContainer = styled.div`
  display: flex;
  gap: 2.8rem;
`;

const BarBox = styled.div<{ isDisabled?: boolean }>`
  width: 4.7rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.8rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.color.textColor[100]};

  ${props =>
    props.isDisabled &&
    `
    color: ${props.theme.color.textDisabled};
    font-weight: 500;
  `};
`;

const ReviewPerfumeButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 5rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1;
  padding: 1.6rem 0;
  cursor: pointer;
  margin-top: 2.8rem;
  border-radius: 1rem;

  color: ${props => props.theme.color.textDisabled};
  border: 1px solid #dfdfdf;

  ${props => props.disabled && `cursor: not-allowed;`}
`;

export const S = {
  Wrapper,
  TitleContainer,
  TitleBox,
  Bar,
  MyBar,
  EmphasizeText,
  DescriptionBox,
  Message,
  BarContainer,
  BarBox,
  ReviewPerfumeButton,
};
