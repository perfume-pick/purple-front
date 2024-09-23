import { S } from "./styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useRouter } from "next/navigation";
import { DetailPerfumeInfo } from "@/types/res/perfume";

type Props = { perfumeInfo: DetailPerfumeInfo };

const ProductCard = ({ perfumeInfo }: Props) => {
  console.log(perfumeInfo);
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
    router.push("/detail");
  };

  return (
    <S.Wrapper onClick={handleClickProduct}>
      <S.Card>
        <S.ImageBox>
          <img src={imageUrl} alt={perfumeName} />
        </S.ImageBox>
        <S.TextBox>
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
