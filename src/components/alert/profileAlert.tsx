import { ProfileAlertType } from "@/types/alertTypes";
import ModalLayout from "../modalLayout/modalLayout";
import { S } from "./styles";
import { useEffect, useRef } from "react";
import { UpdateProfileBody } from "@/types/req/userInfo";

const ProfileAlert = ({
  message,
  setOpenAlert,
  setPicture,
}: {
  message: ProfileAlertType;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setPicture: React.Dispatch<
    React.SetStateAction<UpdateProfileBody["picture"]>
  >;
}) => {
  // profile alert 문구 import해서 사용하기

  const contentRef = useRef<HTMLDivElement>(null);

  const handleProfilePictureChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result?.toString() ?? "");
    };
    reader.readAsDataURL(file);
  };

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
          <label>
            {message.ok}
            <S.ProfilePictureInput
              type="file"
              onChange={handleProfilePictureChange}
            />
          </label>
          {/* TODO: 추후 setState로직 수정 필요*/}
          <div>{message.delete}</div>
        </S.ProfileBtn>
      </S.ProfileWrapper>
    </ModalLayout>
  );
};
export default ProfileAlert;
