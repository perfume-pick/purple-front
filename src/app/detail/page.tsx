"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import DetailPageContent from "../_components/DetailPage";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import styled from "@emotion/styled";

function DetailPage() {
  return (
    <S.Wrapper>
      <NavHeader style={{ justifyContent: "space-between" }}>
        <div>
          <IosShareIcon sx={{ fontSize: "2.4rem" }} />
          <FavoriteBorderIcon sx={{ fontSize: "2.4rem", marginLeft: "3rem" }} />
        </div>
      </NavHeader>
      <DetailPageContent />
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
