import CommentPerfumes from "../commentPerfumes/CommentPerfumes";
import NotePerfumes from "../notePerfumes/NotePerfumes";
import { useRecommendPerfumeType } from "@/store/recommendPerfumeTypeStore";
import styled from "@emotion/styled";

const Perfumes = () => {
  const { perfumeType } = useRecommendPerfumeType();

  return (
    <S.Wrapper>
      {perfumeType === "note" ? <NotePerfumes /> : <CommentPerfumes />}
    </S.Wrapper>
  );
};

export default Perfumes;

const Wrapper = styled.div`
  height: calc(100vh - 8.1rem - 5.2rem - 6rem - 3rem);
  overflow-y: scroll;
  height: 100%;
`;

const S = {
  Wrapper,
};
