"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { theme } from "@/styles/theme";
import { S } from "./styles";
import Profile from "@/components/Profile/Profile";
import ValidatedInput from "./_components/ValidatedInput/ValidatedInput";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import ProfileAlert from "@/components/alert/profileAlert";
import { EDIT_PROFILE_ALERT } from "@/constant/alert/alertText";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserProfile, patchProfile } from "@/service/client/userInfo";
import { UpdateProfileBody, UpdateProfileParams } from "@/types/req/userInfo";
import { useRouter } from "next/navigation";

export type FormValues = {
  nickname: string;
};

type UpdateProfile = {
  params: UpdateProfileParams;
  body: UpdateProfileBody;
};

const ProfileSettingPage = () => {
  const router = useRouter();
  const { mutate: updateProfile } = useMutation({
    mutationFn: (newProfile: UpdateProfile) => patchProfile(newProfile),
  });
  const { data: profile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const { control, handleSubmit } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      nickname: "",
    },
    values: {
      nickname: profile?.nickname ?? "",
    },
  });

  const [picture, setPicture] = useState<UpdateProfileBody["picture"]>(null);
  const [openAlert, setOpenAlert] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = ({ nickname }) => {
    const body = { picture };
    const isChangePicture = !!picture;
    const params = { nickname, isChanged: isChangePicture };

    updateProfile({ params, body });
    router.back();
  };
  const handleClickProfile = () => {
    setOpenAlert(true);
  };

  return (
    <>
      <NavHeader
        iconColor={theme.color.white}
        style={{
          justifyContent: "center",
        }}
        bgColor={theme.color.primary.coral[400]}
      >
        <S.HeaderInner>
          <span>프로필 수정</span>
        </S.HeaderInner>
      </NavHeader>
      <HeaderBottomContents>
        <S.Contents>
          <Profile
            width="8rem"
            height="8rem"
            image={picture ?? profile?.imageUrl ?? ""}
            isEdit
            onClick={handleClickProfile}
          />
          {openAlert && (
            <ProfileAlert
              message={EDIT_PROFILE_ALERT}
              setOpenAlert={setOpenAlert}
              setPicture={setPicture}
            />
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <ValidatedInput label="닉네임" name="nickname" control={control} />
            <button type="submit">적용하기</button>
          </form>
        </S.Contents>
      </HeaderBottomContents>
    </>
  );
};

export default ProfileSettingPage;
