"use client";

import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { theme } from '@/styles/theme';
import { S } from './styles'
import Profile from '@/components/Profile/Profile';
import ValidatedInput from "./_components/ValidatedInput/ValidatedInput";
import { VALIDATED_PROFILE_NICKNAME } from '@/constant/validation/validatedProfileText'; 

type FormValues = {
  nickname: string;
};

const ProfileSettingPage = () => {
  // TODO: 임시 이미지 코드
  const [ profileImage, setProfileImage ] = useState("https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5")
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  const handleClickProfile = () => {
    console.log('click profile')
  }

  return (
    <>
      <NavHeader iconColor={theme.color.white} style={{ background: theme.color.primary }}>
        <S.HeaderInner>
          <span>프로필 수정</span>
        </S.HeaderInner>
      </NavHeader>
      <S.Contents>
        <Profile width="8rem" height="8rem" image={profileImage} isEdit onClick={handleClickProfile} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ValidatedInput
            labelText='닉네임'
            id='nickname'
            register={register}
            errors={errors}
            validation={{
              required: VALIDATED_PROFILE_NICKNAME.required,
              pattern: {
                value: /^[^\s]+$/,
                message: VALIDATED_PROFILE_NICKNAME.noWhitespace
              }
            }}
          />
          <button type="submit">적용하기</button>
        </form>
      </S.Contents>
    </>
  );
};

export default ProfileSettingPage;
