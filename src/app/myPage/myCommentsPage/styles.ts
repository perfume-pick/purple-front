import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  padding: 0 1.6rem 4.7rem;
`;

const SnackbarBox = styled.div`
  padding: 5.7rem 0 0;
`;

const Snackbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.1rem 1.6rem 1rem;
  background-color: #f8f8f8;
  color: ${props => props.theme.color.textColor[100]};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

const NumberEmphasize = styled.span`
  color: ${props => props.theme.color.primary.coral[400]};
`;

const NothingReviews = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S = {
  Wrapper,
  Container,
  SnackbarBox,
  Snackbar,
  NumberEmphasize,
  NothingReviews,
};
