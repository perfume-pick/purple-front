import {
  AlertType,
  ConfirmAlertType,
  ProfileAlertType,
} from "@/types/alertTypes";

export const SEND_MAIL_ALERT: AlertType = {
  message: `인증 메일을 발송했습니다.\n메일함을 확인해주세요.`,
  ok: "확인",
};

export const CHANGE_PW_ALERT: AlertType = {
  message: "비밀번호가 변경되었습니다!",
  ok: "확인",
};

export const VERIFY_ALERT: AlertType = {
  message: "인증이 확인되었습니다!",
  ok: "확인",
};

export const ONBOARDING_ALERT: ConfirmAlertType = {
  title: "온보딩을 건너뛰시겠어요?",
  message: `취향에 맞는 향수 추천 정확도가\n떨어질 수도 있어요.`,
  ok: "건너뛰기",
  cancel: "취소하기",
};

export const EDIT_PROFILE_ALERT: ProfileAlertType = {
  title: "프로필 수정하기",
  message: "프로필 라이팅",
  ok: "앨범에서 선택",
  delete: "프로필사진 삭제",
};
