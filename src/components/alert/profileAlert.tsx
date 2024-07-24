import { ProfileAlertType } from "@/types/alertTypes";
import ModalLayout from "../modalLayout/modalLayout";
import { S } from "./styles";

const ProfileAlert = ({
  message,
  setOpenAlert,
}: {
  message: ProfileAlertType;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // profile alert 문구 import해서 사용하기
  return (
    <ModalLayout>
      <S.ProfileWrapper>
        <S.ProfileContentsWrap>
          <S.Title>{message.title}</S.Title>
          <div>{message.message}</div>
        </S.ProfileContentsWrap>
        <S.ProfileBtn>
          <div>{message.ok}</div>
          {/* TODO: 추후 setState로직 수정 필요*/}
          <div onClick={() => setOpenAlert(false)}>{message.delete}</div>
        </S.ProfileBtn>
      </S.ProfileWrapper>
    </ModalLayout>
  );
};
export default ProfileAlert;
