"use client";

import { useState } from "react";
import { S } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { TEXT_LENGTH } from "@/constant/common/textLength";
import { updateUserNickname } from "@/service/client/userInfo";
import { useRouter } from "next/navigation";
import Button from "@/components/atom/Button";
import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "../../../components/navHeaderLayout/NavHeaderInner";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";

type FormData = {
  nickName: string;
};

function NickNameOnBoarding() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const [focusInput, setFocusInput] = useState(false);

  const nickName = watch("nickName", "");

  const onSubmit: SubmitHandler<FormData> = async (data: {
    nickName: string;
  }) => {
    const cleanedNickName = data.nickName.replace(/\s+/g, "");

    const params = {
      nickname: cleanedNickName,
      isChanged: false,
      picture: null,
    };

    const response = await updateUserNickname(params);

    if (response) {
      const { status, data } = response;

      if (status === 200) {
        router.push(
          `/onBoarding/step/oneStep?username=${data.responseData.nickname}`,
          { scroll: false },
        );
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
      <NavHeader hasBackBtn={false} style={{ justifyContent: "center" }}>
        <NavHeaderInner text="평가향수" />
      </NavHeader>
      <HeaderBottomContents>
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
                autoComplete="off"
                onFocus={() => setFocusInput(true)}
                onBlur={() => setFocusInput(false)}
              />
              {focusInput && <span>{nickName.length}/10</span>}
            </S.NickNameInputWrap>
            <S.ErrorText className={errors.nickName?.message ? "has-text" : ""}>
              {typeof errors.nickName?.message === "string"
                ? errors.nickName.message
                : ""}
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
      </HeaderBottomContents>
    </>
  );
}
export default NickNameOnBoarding;
