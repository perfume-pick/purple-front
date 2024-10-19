"use client";

import { useRef, useState } from "react";
import styled from "@emotion/styled";
import DetailComment from "./Comment/DetailComment";
import DetailInfo from "./DetailInfo/DetailInfo";
import DetailTop from "./DetailTop";
import { theme } from "@/styles/theme";
import {
  SelectButtonType,
  SelectButtonValueType,
} from "@/constant/detail.const";
import { scrollRef } from "@/utils/scrollUtil";

type Props = {
  perfumeId: string;
};

function DetailPageContent({ perfumeId }: Props) {
  const [selectedComponent, setSelectedComponent] =
    useState<SelectButtonValueType>("INFO");
  const infoRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    INFO: infoRef,
    COMMENT: commentRef,
  };

  const sections: { [key in SelectButtonType]: SelectButtonValueType } = {
    "제품 정보": "INFO",
    코멘트: "COMMENT",
  };

  const handleSelectClick = (value: SelectButtonValueType) => {
    setSelectedComponent(value);
    scrollRef(sectionRefs[value]);
  };

  // TODO: 나중에 작업 끝나면 필요없을 시 삭제.
  // const renderSelectedComponent = () => {
  //   switch (selectedComponent) {
  //     case "INFO":
  //       return <DetailInfo />;
  //     case "COMMENT":
  //       return <DetailComment />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <DetailTop perfumeId={perfumeId} />
      <S.SelectBtnWrapper>
        {Object.entries(sections).map(([key, value]) => (
          <S.FocusComponent
            focus={selectedComponent === value}
            key={key}
            onClick={() => handleSelectClick(value)}
          >
            <div>{key}</div>
          </S.FocusComponent>
        ))}
      </S.SelectBtnWrapper>
      {/* {renderSelectedComponent()} */}
      <DetailInfo ref={infoRef} perfumeId={perfumeId} />
      <DetailComment perfumeId={perfumeId} ref={commentRef} />
    </>
  );
}
export default DetailPageContent;

const SelectBtnWrapper = styled.div`
  display: flex;
`;

const FocusComponent = styled.div<{ focus: boolean }>`
  display: flex;
  width: 100%;
  background-color: ${theme.color.white};
  border-bottom: 1px solid #d2d2d2;
  justify-content: space-around;
  align-items: center;
  font-size: ${theme.fontSize.base};
  & > div {
    display: flex;
    border-bottom: ${({ focus }) => (focus ? "2px solid black" : "")};
    font-weight: ${({ focus }) => (focus ? "700" : "")};
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 100%;
  }
`;

const S = {
  SelectBtnWrapper,
  FocusComponent,
};
