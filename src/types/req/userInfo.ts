export interface UpdateNicknameRequestDTO {
  picture: File;
}

export interface UpdateProfileParams {
  nickname: string;
  isChanged: boolean; // 닉네임만 변경 : false, 닉네임, 사진 변경 : true
}

export interface UpdateProfileBody {
  picture: FormData | null;
  // picture: string | null;
}

export interface ProfilePreview {
  preview: string | null;
}
