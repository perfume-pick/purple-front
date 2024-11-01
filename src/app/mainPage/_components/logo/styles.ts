import styled from "@emotion/styled";
import Image from "next/image";

const Wrapper = styled.div`
  width: 100%;
  height: 4.4rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0.4rem 0;
`;

const LogoImage = styled(Image)`
  cursor: pointer;
`;

export const S = {
  Wrapper,
  LogoImage,
};
