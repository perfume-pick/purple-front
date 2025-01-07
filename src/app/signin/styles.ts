import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgb(253, 150, 143);
  background: linear-gradient(
    0deg,
    rgba(253, 150, 143, 1) 0%,
    rgba(251, 104, 139, 1) 50%,
    rgba(141, 105, 214, 1) 100%
  );

  & > img {
    width: 75%;
  }
`;

export const S = {
  Wrapper,
};
