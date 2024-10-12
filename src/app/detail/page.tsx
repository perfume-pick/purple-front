"use client";

import { useSearchParams } from "next/navigation";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { usePerfumeDetailStore } from "@/store/perfumeDetailStore";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import DetailPageContent from "./_components";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import { postVisitHistory } from "@/service/client/perfumeDetail";

function DetailPage() {
  const { removePerfumeInfo } = usePerfumeDetailStore();
  const searchParams = useSearchParams();
  const perfumeId = searchParams.get("perfumeId");

  useEffect(() => {
    postVisitHistory(perfumeId);
    return () => {
      // 컴포넌트가 언마운트되기 직전에 향수 상세정보 데이터 삭제
      removePerfumeInfo();
    };
  }, []);

  return (
    <S.Wrapper>
      <NavHeader
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          {/* <FavoriteBorderIcon sx={{ fontSize: "2.4rem" }} /> */}
          <IosShareIcon sx={{ fontSize: "2.4rem", marginLeft: "2.4rem" }} />
        </div>
      </NavHeader>
      <HeaderBottomContents>
        <DetailPageContent perfumeId={perfumeId} />
      </HeaderBottomContents>
    </S.Wrapper>
  );
}
export default DetailPage;

const Wrapper = styled.div`
  position: relative;
`;

const S = {
  Wrapper,
};
