"use client";

import { ConfirmAlertType } from "@/types/alertTypes";
import ModalLayout from "../modalLayout/modalLayout";
import { S } from "./styles";
import { useRouter } from "next/navigation";

const ConfirmAlert = ({
  message,
  setOpenAlert,
}: {
  message: ConfirmAlertType;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <ModalLayout>
      <S.Wrapper>
        <S.ContentsWrap>
          <S.Title>{message.title}</S.Title>
          <div>{message.message}</div>
        </S.ContentsWrap>
        <S.ButtonWrap>
          <button onClick={() => setOpenAlert(false)}>{message.cancel}</button>
          <button onClick={() => router.push("/onBoarding/step/twoStep")}>
            {message.ok}
          </button>
        </S.ButtonWrap>
      </S.Wrapper>
    </ModalLayout>
  );
};
export default ConfirmAlert;
