import { Taps as ConstTaps } from "@/constant/mainPage.const";
import { S } from "./styles";
import { useRecommendPerfumeType } from "@/store/recommendPerfumeTypeStore";

const Taps = () => {
  const { perfumeType, setPerfumeType } = useRecommendPerfumeType();

  return (
    <>
      <S.Wrapper>
        {ConstTaps.map(({ label, type }) => (
          <S.Tap
            focus={perfumeType === type}
            key={type}
            onClick={() => setPerfumeType(type)}
          >
            <div>{label}</div>
          </S.Tap>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Taps;
