import { S } from "./styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useRouter } from "next/navigation";
import { DetailPerfumeInfo } from "@/types/res/perfume";
import { usePerfumeDetailStore } from "@/store/perfumeDetailStore";

type Props = { perfumeInfo: DetailPerfumeInfo; type?: "SCROLL" | "GRID" };

const ProductCard = ({ perfumeInfo, type = "GRID" }: Props) => {
  const TYPE_CLASS = type === "SCROLL" ? "type-scroll" : "type-grid";
  const { updatePerfumeInfo } = usePerfumeDetailStore();

  const {
    perfumeId,
    perfumeName,
    brandName,
    imageUrl,
    averageScore,
    accordName,
  } = perfumeInfo || {};
  const router = useRouter();

  const handleClickProduct = () => {
    updatePerfumeInfo(perfumeInfo);
    router.push(`/detail?perfumeId=${perfumeId}`);
  };

  return (
    <S.Wrapper className={TYPE_CLASS} onClick={handleClickProduct}>
      <S.Card>
        <S.ImageBox>
          <img src={imageUrl} alt={perfumeName} />
        </S.ImageBox>
        <S.TextBox className={TYPE_CLASS}>
          <span>{brandName}</span>
          <p>{perfumeName}</p>
          <S.RatingWrap>
            <StarRateIcon sx={{ fontSize: "1.2rem", color: "#FF4647" }} />
            {averageScore} ∙ {accordName}
          </S.RatingWrap>
        </S.TextBox>
      </S.Card>
    </S.Wrapper>
  );
};

export default ProductCard;
