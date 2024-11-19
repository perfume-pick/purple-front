export const VALIDATED_PROFILE_NICKNAME = [
  {
    text: "닉네임을 입력해주세요!",
    type: "REQUIRED",
  },
  {
    text: "이미 사용하고 있는 이름이에요!",
    type: "NICKNAME_IN_USE",
  },
  {
    text: "닉네임은 띄어쓰기가 불가능해요",
    type: "NO_WHITESPACE",
    pattern: /^[^\s]+$/,
  },
] as const;
