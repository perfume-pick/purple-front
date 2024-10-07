import { S } from "./styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProgressBar from "@/components/atom/ProgressBar/ProgressBar";
import { useMemo, useState } from "react";
import { EvaluationOptionInfo } from "@/types/res/perfumeDetail";

type Props = {
  fieldName: string;
  evaluationOptions: EvaluationOptionInfo[];
};

function Topic({ fieldName, evaluationOptions }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const sortedData = useMemo(() => {
    return [...evaluationOptions].sort((a, b) => b.votePercent - a.votePercent);
  }, [evaluationOptions]);

  const highestVoteOption: EvaluationOptionInfo = useMemo(() => {
    return sortedData[0];
  }, [sortedData]);

  const restOfData = useMemo(() => {
    return sortedData.slice(1);
  }, [sortedData]);

  return (
    <>
      <S.BlockWrap onClick={() => setIsOpen(prev => !prev)}>
        <S.Category>{fieldName}</S.Category>
        <S.ContentsList>
          <div>
            <S.Content>
              <b>{highestVoteOption.optionName}</b>
            </S.Content>
            <S.Graph>
              <ProgressBar
                progressValue={highestVoteOption.votePercent}
                height="0.4rem"
              />
            </S.Graph>
            <S.Percent>{`${highestVoteOption.votePercent}%`}</S.Percent>

            {isOpen ? (
              <ExpandLessIcon style={{ fontSize: "2.8rem" }} />
            ) : (
              <ExpandMoreIcon style={{ fontSize: "2.8rem" }} />
            )}
          </div>
          {sortedData &&
            isOpen &&
            restOfData.map((item: EvaluationOptionInfo) => {
              return (
                <div key={item.optionCode}>
                  <S.Content>{item.optionName}</S.Content>
                  <S.Graph className="blur">
                    <ProgressBar
                      progressValue={item.votePercent}
                      height="0.4rem"
                    />
                  </S.Graph>
                  <S.Percent>{`${item.votePercent}%`}</S.Percent>
                  <S.EmptyBox></S.EmptyBox>
                </div>
              );
            })}
        </S.ContentsList>
      </S.BlockWrap>
    </>
  );
}

export default Topic;
