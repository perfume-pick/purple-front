"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";
import { S } from "./styles";
import { logout, withdraw } from "@/service/client/auth";
import WithdrawAlert from "./_components/WithdrawAlert";
import { useState } from "react";

const Setting = () => {
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = () => setChecked(!checked);
  const closeWithdrawModal = () => setIsModalOpen(false);
  const openWithdrawModal = () => setIsModalOpen(true);

  const handleCloseWithdrawModalClick = () => {
    closeWithdrawModal();
    setChecked(false);
  };

  return (
    <>
      <NavHeader>
        <NavHeaderInner text="설정" />
      </NavHeader>
      <WithdrawAlert
        checked={checked}
        isOpen={isModalOpen}
        onCloseModal={handleCloseWithdrawModalClick}
        onCheckboxChange={handleCheckboxChange}
        onWithdrawClick={withdraw}
      />
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
          <S.Block as="button" onClick={openWithdrawModal}>
            계정 삭제
          </S.Block>
        </S.HeaderBottomContents>
      </S.Layout>
    </>
  );
};

export default Setting;
