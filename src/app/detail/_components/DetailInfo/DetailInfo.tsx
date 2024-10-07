"use client";

import { EvaluationType } from "@/constant/detail.const";
import { S } from "./styles";
import React, { forwardRef, useMemo } from "react";
import {
  AccordInfo,
  FragranticaEvaluationItem,
  mostVotedOptionInfo,
  NoteInfo,
  NoteType,
} from "@/types/res/perfumeDetail";
import {
  getAccordsNotes,
  getFragranticaEvaluation,
} from "@/service/client/perfumeDetail";
import { useQuery } from "@tanstack/react-query";
import { PERFUME_ACCORD_COLORS } from "@/constant/perfumeAccord/perfumeAccordColors";
import SeasonGraph from "../SeasonGraph/SeasonGraph";

interface DetailInfoProps {
  perfumeId: string;
}

type TempNoteObj = {
  type: NoteType;
  name: string;
  notes: string[];
};

const DetailInfo = forwardRef<HTMLDivElement, DetailInfoProps>(
  ({ perfumeId }, ref) => {
    // 향수 상세 정보 조회
    const { data: accordNoteInfo } = useQuery({
      queryKey: ["accordNoteInfo", perfumeId],
      queryFn: () => getAccordsNotes(perfumeId),
      enabled: !!perfumeId,
      retry: false,
    });

    // 프라그란티카 평가 상세 정보 조회
    const { data: fragranticaEvaluationInfo } = useQuery({
      queryKey: ["fragranticaEvaluationInfo", perfumeId],
      queryFn: () => getFragranticaEvaluation(perfumeId),
      enabled: !!perfumeId,
      retry: false,
    });

    const noteInfoList = useMemo(() => {
      if (!accordNoteInfo?.notes) {
        return [];
      }

      const tempNoteObjList: TempNoteObj[] = [
        {
          type: "TOP",
          name: "탑 노트",
          notes: [],
        },
        {
          type: "MIDDLE",
          name: "미들 노트",
          notes: [],
        },
        {
          type: "BASE",
          name: "베이스 노트",
          notes: [],
        },
      ];

      accordNoteInfo.notes.forEach((note: NoteInfo) => {
        const target = tempNoteObjList.find(item => item.type === note.type);
        if (target) {
          target.notes.push(note.name);
        }
      });

      return tempNoteObjList;
    }, [accordNoteInfo]);

    return (
      <S.Wrapper ref={ref}>
        <S.PersistenceWrap>
          <S.InfoTitle>
            <img src="/assets/images/test.svg" alt="test image" />
            <span>메인어코드</span>
          </S.InfoTitle>
          <S.GraphWrap>
            {accordNoteInfo &&
              accordNoteInfo?.accords.map((item: AccordInfo) => {
                const accordColor = PERFUME_ACCORD_COLORS.filter(
                  accord => accord.accordName === item.accordName,
                )[0].hexColor;

                return (
                  <div
                    style={{
                      width: `${item.accordValue}%`,
                      backgroundColor: accordColor,
                    }}
                    key={item.order}
                  >
                    <span>{item.accordName}</span>
                  </div>
                );
              })}
          </S.GraphWrap>
        </S.PersistenceWrap>
        <S.NoteInfoWrap>
          <S.InfoTitle>
            <img src="/assets/images/test.svg" alt="test image" />
            <span>노트정보</span>
          </S.InfoTitle>
          <S.NoteInfo>
            {noteInfoList.map((item: TempNoteObj, index) => {
              return (
                <S.NoteContent key={index}>
                  <span>{item.name} :</span>
                  <div>{item.notes.join(", ")}</div>
                </S.NoteContent>
              );
            })}
          </S.NoteInfo>
        </S.NoteInfoWrap>
        <S.EvaluationWrap>
          <S.InfoTitle>
            <img src="/assets/images/test.svg" alt="test image" />
            <span>프라그란티카 평가</span>
          </S.InfoTitle>
          <S.EvaluationInfo>
            {fragranticaEvaluationInfo &&
              (() => {
                const filteredItems =
                  fragranticaEvaluationInfo.fragranticaEvaluation.filter(
                    (item: FragranticaEvaluationItem) =>
                      item.fieldCode !== "EF003",
                  );
                const lastItem =
                  fragranticaEvaluationInfo.fragranticaEvaluation.find(
                    (item: FragranticaEvaluationItem) =>
                      item.fieldCode === "EF003",
                  );

                return (
                  <>
                    {filteredItems.map((item: FragranticaEvaluationItem) => (
                      <S.InfoWrap key={item.fieldCode}>
                        <span>{item.fieldName}</span>
                        <div className="outer-bar">
                          <div
                            className="inner-bar"
                            style={{
                              backgroundColor: `#${item.mostVotedOptions[0].optionCode}`,
                              width: `${item.mostVotedOptions[0].votePercent}%`,
                            }}
                          >
                            <p>{item.mostVotedOptions[0].optionName}</p>
                          </div>
                        </div>
                      </S.InfoWrap>
                    ))}

                    {lastItem && (
                      <S.InfoWrap key={lastItem.fieldCode}>
                        <span>{lastItem.fieldName}</span>
                        <S.SeasonGraph>
                          {lastItem.mostVotedOptions.map(
                            (votedOption: mostVotedOptionInfo) => (
                              <SeasonGraph
                                infoData={votedOption}
                                key={votedOption.optionCode}
                              />
                            ),
                          )}
                        </S.SeasonGraph>
                      </S.InfoWrap>
                    )}
                  </>
                );
              })()}
          </S.EvaluationInfo>
        </S.EvaluationWrap>
      </S.Wrapper>
    );
  },
);

DetailInfo.displayName = "DetailInfo";
export default DetailInfo;
