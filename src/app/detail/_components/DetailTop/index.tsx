import DetailEvaluation from "./DetailEvaluation";
import DetailPageBanner from "./DetailPageBanner";

type Props = {
  perfumeId: string;
};

function DetailTop({ perfumeId }: Props) {
  return (
    <>
      <DetailPageBanner />
      <DetailEvaluation perfumeId={perfumeId} />
    </>
  );
}
export default DetailTop;
