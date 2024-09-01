"use client";

import { useState } from "react";
import { S } from "./styles";
import { useForm } from "react-hook-form";
import { TEXT_LENGTH } from "@/constant/common/textLength";
import { updateUserNickname } from "@/service/client/userInfo";
import { useRouter } from "next/navigation";
import Button from "@/components/atom/Button";

function NickNameOnBoarding() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm();

  const [focusInput, setFocusInput] = useState(false);

  const nickName = watch("nickName", "");

  const onSubmit = async (data: { nickName: string }) => {
    const params = {
      nickname: data.nickName.trim(),
      isChanged: false,
      picture: null,
    };

    const response = await updateUserNickname(params);

    if (response) {
      const { status, data } = response;

      if (status === 204) {
        router.push("/onBoarding/step/oneStep");
      } else {
        setError("nickName", {
          type: "manual",
          message: data.responseStatus,
        });
      }
    }
  };

  return (
    <>
      <div>NavHeader</div>
      <S.Wrapper>
        <S.NicknameLabel>
          반가워요! 당신을 뭐라고 부르면 좋을까요?
        </S.NicknameLabel>
        <S.FormWrap>
          <S.NickNameInputWrap className={errors.nickName ? "has-error" : ""}>
            <input
              maxLength={TEXT_LENGTH}
              placeholder="2~10자 닉네임을 입력해주세요"
              {...register("nickName", {
                required: true,
                maxLength: TEXT_LENGTH,
              })}
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
            />
            {focusInput && <span>{nickName.length}/10</span>}
          </S.NickNameInputWrap>
          <S.ErrorText className={errors.nickName?.message ? "has-text" : ""}>
            {errors.nickName?.message ?? ""}
          </S.ErrorText>
          <S.ButtonWrap>
            <Button
              type="submit"
              disabled={nickName.length === 0}
              buttonText="다음으로"
              size="primary"
              clickCallback={handleSubmit(onSubmit)}
            />
          </S.ButtonWrap>
        </S.FormWrap>
      </S.Wrapper>
    </>
  );
}
export default NickNameOnBoarding;
