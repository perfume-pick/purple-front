import { ProfileAlertType } from "@/types/alertTypes";
import ModalLayout from "../modalLayout/modalLayout";
import { S } from "./styles";
import { useEffect, useRef } from "react";

const ProfileAlert = ({
  message,
  setOpenAlert,
}: {
  message: ProfileAlertType;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // profile alert 문구 import해서 사용하기

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickEvent = (e: MouseEvent) => {
      const { target } = e;
      if (
        !contentRef.current ||
        contentRef.current.contains(target as HTMLElement)
      )
        return;
      setOpenAlert(false);
    };
    document.addEventListener("mousedown", clickEvent);

    return () => {
      document.removeEventListener("mousedown", clickEvent);
    };
  }, [setOpenAlert]);

  return (
    <ModalLayout>
      <S.ProfileWrapper ref={contentRef}>
        <S.ProfileContentsWrap>
          <S.Title>{message.title}</S.Title>
          <div>{message.message}</div>
        </S.ProfileContentsWrap>
        <S.ProfileBtn>
          <div>{message.ok}</div>
          {/* TODO: 추후 setState로직 수정 필요*/}
          <div>{message.delete}</div>
        </S.ProfileBtn>
      </S.ProfileWrapper>
    </ModalLayout>
  );
};
export default ProfileAlert;
