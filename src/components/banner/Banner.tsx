"use client";

import { S } from "./styles";
import { FiberManualRecord, Star } from "@mui/icons-material";

function Banner() {
  return (
    <S.Wrapper>
      <S.BannerImg src={"/assets/images/test_image.png"} />
      <S.ContentWrap>
        <span>바이레도</span>
        <S.Title>모하비 고스트 오 드 퍼퓸</S.Title>
        <S.Score>
          <Star style={{ color: "red" }} />
          <div>4.8</div>
          <S.CategoryWrap>
            <FiberManualRecord style={{ width: "4px" }} />
            <span>플로럴, 앰버</span>
          </S.CategoryWrap>
        </S.Score>
        <S.BannerInfo>
          안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.
          안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.
          안개가 자욱한 시원한 향기입니다.안개가 자욱한 시원한 향기입니다.
        </S.BannerInfo>
      </S.ContentWrap>
    </S.Wrapper>
  );
}

export default Banner;
