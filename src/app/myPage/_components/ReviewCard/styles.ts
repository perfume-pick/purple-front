import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 1.6rem 0;
`;

const ReviewBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const PerfumeImage = styled.img`
  width: 5.4rem;
  height: 5.4rem;

  object-fit: cover;
`;

const ReviewBoxRightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const S = {
  Wrapper,
  ReviewBox,
  PerfumeImage,
  ReviewBoxRightSection,
};
