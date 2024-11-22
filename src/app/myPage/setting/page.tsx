"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";
import { S } from "./styles";
import { logout } from "@/service/client/auth";

const Setting = () => {
  return (
    <>
      <NavHeader>
        <NavHeaderInner text="설정" />
      </NavHeader>
      <S.Layout>
        <S.HeaderBottomContents>
          <S.Block>
            <S.Anchor
              href="https://forms.gle/qrm7mewTK12KM6R16"
              target="_blank"
              rel="noopener noreferrer"
            >
              향수 요청하기
            </S.Anchor>
          </S.Block>
          <S.Block as="button" onClick={logout}>
            로그아웃
          </S.Block>
          <S.Block as="button">계정 삭제</S.Block>
        </S.HeaderBottomContents>
      </S.Layout>
    </>
  );
};

export default Setting;
