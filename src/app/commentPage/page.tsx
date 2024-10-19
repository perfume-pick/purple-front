"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "./styles";
import Product from "./_components/Product/Product";
import {
  CommentType,
  FieldDefinitions,
  FieldDefinitionsWithCode,
} from "@/constant/comment.const";
import Rating from "@/components/atom/Rating/Rating";
import Button from "@/components/atom/Button";
import { TEXTAREA_LENGTH } from "@/constant/common/textLength";
import { RadioForm } from "./_components/CheckLists/RadioType/RadioForm";
import { useForm } from "react-hook-form";
import { FieldDefinitionsType } from "@/types/commentTypes";
import { validationMessages } from "@/constant/validation/commentValidation";
import { CheckboxForm } from "./_components/CheckLists/CheckboxType/CheckboxForm";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import { useEffect, useState } from "react";
import { getCommentEvaluationForm } from "@/service/client/commentRegistration";
import { useCommentRegStore } from "@/store/commentRegStore";

const CommentPage = () => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    clearErrors,
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldDefinitionsType>();
  const [selectedCommentIdx, setSelectedCommentIdx] = useState(0);
  const { updateCommentEvaluationForm, commentEvaluationForm } =
    useCommentRegStore();

  const onSubmit = async (data: FieldDefinitionsType) => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (commentEvaluationForm.length < 1) {
      getCommentEvaluationForm().then(res => {
        console.log(res?.responseData);
        updateCommentEvaluationForm(res?.responseData);

        setTimeout(() => {
          console.log(commentEvaluationForm);
        }, 100);
      });
    }
    console.log(commentEvaluationForm);
  }, []);

  useEffect(() => {
    if (watch("rating")) {
      clearErrors("rating");
    }
  }, [watch, clearErrors]);

  useEffect(() => {
    reset();
  }, [selectedCommentIdx, reset]);

  const handleClick = (idx: number) => {
    setSelectedCommentIdx(idx);
  };

  const allValues =
    selectedCommentIdx === 0
      ? watch("rating") && watch("textReview")
      : watch("rating") &&
        watch("textReview") &&
        watch("persistence") &&
        watch("residualScent") &&
        watch("season") &&
        watch("gender") &&
        watch("mood");

  return (
    <>
      <NavHeader style={{ justifyContent: "center" }}>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          코멘트 작성
        </div>
      </NavHeader>
      <HeaderBottomContents>
        <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
          <Product />
          <S.CommentWrap>
            {Object.values(CommentType).map((comment, idx) => (
              <S.CommentBtn
                key={idx}
                isSelected={idx === selectedCommentIdx}
                onClick={() => handleClick(idx)}
              >
                {comment}
              </S.CommentBtn>
            ))}
          </S.CommentWrap>
          <S.EvaluationWrap>
            <span>{FieldDefinitions.rating.label}</span>
            <S.RatingWrap {...register("rating", validationMessages.rating)}>
              <Rating
                getValues={getValues}
                setValue={setValue}
                selectedCommentIdx={selectedCommentIdx}
              />
              <div>향이 마음에 들어요</div>
            </S.RatingWrap>
            {errors.rating && (
              <ErrorMessage error={errors.rating.message || ""} />
            )}
          </S.EvaluationWrap>
          <S.ReviewWrap>
            <S.ReviewTitle>
              <span>{FieldDefinitions.textReview.label}</span>
            </S.ReviewTitle>
            <S.TextAreaWrap
              {...register("textReview", validationMessages.textReview)}
            >
              <textarea
                maxLength={TEXTAREA_LENGTH}
                name="textReview"
                placeholder="개인적인 향의 느낌, 어울리는 스타일이나 분위기 등을 작성해보세요."
              />
              <div>
                {watch("textReview") === undefined ||
                watch("textReview")?.length === 0
                  ? "0 "
                  : `${watch("textReview")?.length} `}
                / {TEXTAREA_LENGTH}자
              </div>
            </S.TextAreaWrap>
            {errors.textReview && (
              <ErrorMessage error={errors.textReview.message || ""} />
            )}
          </S.ReviewWrap>
          {/* 자세한 코멘트 */}
          {selectedCommentIdx === 1 && commentEvaluationForm && (
            <>
              <RadioForm
                control={control}
                options={
                  commentEvaluationForm.evaluationFields[0].evaluationOptions
                }
                name="persistence"
                rules={validationMessages.persistence}
                label={FieldDefinitionsWithCode.persistence.fieldName}
                errors={errors}
              />
              <RadioForm
                control={control}
                options={
                  commentEvaluationForm.evaluationFields[1].evaluationOptions
                }
                name="residualScent"
                rules={validationMessages.residualScent}
                label={FieldDefinitionsWithCode.residualScent.fieldName}
                errors={errors}
              />
              <CheckboxForm
                control={control}
                options={
                  commentEvaluationForm.evaluationFields[2].evaluationOptions
                }
                name="season"
                rules={validationMessages.season}
                label={FieldDefinitionsWithCode.season.fieldName}
                errors={errors}
              />
              <RadioForm
                control={control}
                options={
                  commentEvaluationForm.evaluationFields[3].evaluationOptions
                }
                name="gender"
                rules={validationMessages.gender}
                label={FieldDefinitionsWithCode.gender.fieldName}
                errors={errors}
              />
              <CheckboxForm
                control={control}
                options={commentEvaluationForm.moods}
                name="mood"
                rules={validationMessages.mood}
                label={FieldDefinitions.mood.label}
                errors={errors}
              />
            </>
          )}
          <S.CommentButton>
            <Button
              type="submit"
              buttonText="코멘트 등록"
              disabled={!allValues}
              styleProps={{ fontWeight: "bold" }}
              size="primary"
            />
            {/* <button>click</button> */}
          </S.CommentButton>
        </S.Wrapper>
      </HeaderBottomContents>
    </>
  );
};
export default CommentPage;
