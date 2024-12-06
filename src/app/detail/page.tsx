"use client";

import { useSearchParams } from "next/navigation";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DetailPageContent from "./_components";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import {
  getPerfumeDetail,
  postVisitHistory,
} from "@/service/client/perfumeDetail";
import ShareButton from "@/components/atom/ShareButton/ShareButton";
import OneLineTextToast from "@/components/toast/OneLineTextToast";
import { useQuery } from "@tanstack/react-query";

function DetailPage() {
  const searchParams = useSearchParams();
  const perfumeId = searchParams.get("perfumeId");
  const [toast, setToast] = useState(false);

  const { data: perfumeDetailInfo } = useQuery({
    queryKey: ["perfumeDetailInfo", perfumeId],
    queryFn: () => getPerfumeDetail(perfumeId),
    enabled: !!perfumeId,
    retry: false,
  });
  console.log(perfumeDetailInfo);

  useEffect(() => {
    perfumeId && postVisitHistory(perfumeId);
    return () => {};
  }, [perfumeId]);

  const handleToast = () => {
    setToast(true);
  };

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
          {perfumeId && (
            <ShareButton
              perfumeId={perfumeId}
              imageUrl={perfumeDetailInfo?.imageUrl ?? ""}
              perfumeName={perfumeDetailInfo?.perfumeName ?? "향수"}
              handleClick={handleToast}
            />
          )}
        </div>
      </NavHeader>
      <HeaderBottomContents>
        {perfumeId && <DetailPageContent perfumeId={perfumeId} />}
      </HeaderBottomContents>
      {toast && <OneLineTextToast text="복사되었습니다." setToast={setToast} />}
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
