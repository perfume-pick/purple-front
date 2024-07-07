"use client";

import Banner from "./banner";
import styled from "@emotion/styled";

// 임시 테스트. map돌리는곳. 나중에 api 연동하면 데이터로 교체하고 삭제.
function PublicBanners() {
  return (
    <Wrap>
      <Banner />
      <Banner />
    </Wrap>
  );
}
export default PublicBanners;

const Wrap = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  width: 100%;
  gap: 10px;
`;
