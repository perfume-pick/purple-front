"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import styled from "@emotion/styled";
import DetailPageContent from "./_components";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

function DetailPage() {
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
          <IosShareIcon sx={{ fontSize: "2.4rem" }} />
          <FavoriteBorderIcon sx={{ fontSize: "2.4rem", marginLeft: "2rem" }} />
        </div>
      </NavHeader>
      <HeaderBottomContents>
        <DetailPageContent />
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
