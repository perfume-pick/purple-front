import DetailEvaluation from "./DetailEvaluation";
import DetailPageBanner from "./DetailPageBanner";

type Props = {
  perfumeId: string;
};

function DetailTop({ perfumeId }: Props) {
  return (
    <>
      <DetailPageBanner perfumeId={perfumeId} />
      <DetailEvaluation perfumeId={perfumeId} />
    </>
  );
}
export default DetailTop;
