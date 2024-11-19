import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 1.6rem 0;
`;

const ReviewBox = styled.div`
  display: flex;
  position: relative;
  gap: 0.4rem;
`;

const MoreButtonBox = styled.div`
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  cursor: pointer;
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
  MoreButtonBox,
  PerfumeImage,
  ReviewBoxRightSection,
};
