"use client";

import { useSearchParams } from "next/navigation";
import styled from "@emotion/styled";
import { useEffect } from "react";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DetailPageContent from "./_components";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import { postVisitHistory } from "@/service/client/perfumeDetail";
import ShareButton from "@/components/atom/ShareButton/ShareButton";

function DetailPage() {
  const searchParams = useSearchParams();
  const perfumeId = searchParams.get("perfumeId");

  useEffect(() => {
    perfumeId && postVisitHistory(perfumeId);
    return () => {
      // 컴포넌트가 언마운트되기 직전에 향수 상세정보 데이터 삭제
    };
  }, [perfumeId]);

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
          <ShareButton />
        </div>
      </NavHeader>
      <HeaderBottomContents>
        {perfumeId && <DetailPageContent perfumeId={perfumeId} />}
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
