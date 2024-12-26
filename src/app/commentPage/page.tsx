"use client";

import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import { S } from "./styles";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getMyReview } from "@/service/client/perfumeDetail";
import Product from "./_components/Product/Product";
import {
  CommentType,
  FieldDefinitions,
  FieldDefinitionsWithCode,
} from "@/constant/comment.const";
import Button from "@/components/atom/Button";
import { TEXTAREA_LENGTH } from "@/constant/common/textLength";
import { RadioForm } from "./_components/CheckLists/RadioType/RadioForm";
import { useForm } from "react-hook-form";
import { FieldDefinitionsType } from "@/types/commentTypes";
import { validationMessages } from "@/constant/validation/commentValidation";
import { CheckboxForm } from "./_components/CheckLists/CheckboxType/CheckboxForm";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
import { useEffect, useState, useMemo } from "react";
import {
  getCommentEvaluationForm,
  patchDetailReview,
  patchSimpleReview,
  postDetailReview,
  postSimpleReview,
} from "@/service/client/commentRegistration";
import { useCommentRegStore } from "@/store/commentRegStore";
import EditableRating from "@/components/atom/Rating/EditableRating";
import {
  CommentRegForm,
  CommonFields,
  OptionFields,
} from "@/types/res/commentRegForm";
import { COMMENT_STAR_RATING_MESSAGE_LIST } from "@/constant/comment/starRatingText";

const CommentPage = () => {
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    register,
    watch,
    clearErrors,
    // getValues,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldDefinitionsType>();

  const router = useRouter();
  const searchParams = useSearchParams();
  const perfumeId = searchParams.get("perfumeId");
  const { updateCommentEvaluationForm, commentEvaluationForm } =
    useCommentRegStore() as {
      updateCommentEvaluationForm: (data: CommentRegForm) => void;
      commentEvaluationForm: CommentRegForm;
    };

  const [isInitialized, setIsInitialized] = useState(false); // 초기화 상태 관리
  const [selectedCommentIdx, setSelectedCommentIdx] = useState(0);

  const [isModify, setIsModify] = useState(false);

  // 향수 리뷰 조회
  const { data: myReviewInfo } = useQuery({
    queryKey: ["myReviewInfo", perfumeId],
    queryFn: () => (perfumeId ? getMyReview(perfumeId) : Promise.resolve(null)),
    enabled: !!perfumeId,
    retry: false,
  });

  const onSubmit = async (data: FieldDefinitionsType) => {
    const {
      gender,
      mood,
      persistence,
      rating,
      residualScent,
      season,
      textReview,
    } = data;

    const simpleCommentParams = {
      perfumeId: perfumeId ? perfumeId : "",
      score: rating ?? 0,
      content: textReview ?? "",
    };
    const detailCommentParams = {
      perfumeId: perfumeId ? perfumeId : "",
      score: rating ?? 0,
      content: textReview ?? "",
      evaluationFieldVOs: [
        {
          fieldCode: commentEvaluationForm.evaluationFields.filter(
            (item: CommonFields) => item.fieldName === "지속력",
          )[0].fieldCode,
          optionCodes: persistence ? [persistence] : [],
        },
        {
          fieldCode: commentEvaluationForm.evaluationFields.filter(
            (item: CommonFields) => item.fieldName === "시야주",
          )[0].fieldCode,
          optionCodes: residualScent ? [residualScent] : [],
        },
        {
          fieldCode: commentEvaluationForm.evaluationFields.filter(
            (item: CommonFields) => item.fieldName === "계절감/시간",
          )[0].fieldCode,
          optionCodes: Array.isArray(season) ? season : [],
        },
        {
          fieldCode: commentEvaluationForm.evaluationFields.filter(
            (item: CommonFields) => item.fieldName === "성별",
          )[0].fieldCode,
          optionCodes: gender ? [gender] : [],
        },
      ],
      moodNames: Array.isArray(mood) ? mood : [],
    };

    try {
      if (!isModify) {
        // 신규 등록
        if (selectedCommentIdx === 0) {
          // 간단한 코멘트
          await postSimpleReview(simpleCommentParams);
        } else {
          // 자세한 코멘트
          await postDetailReview(detailCommentParams);
        }
      } else {
        // 수정
        if (!myReviewInfo) {
          return;
        }
        if (selectedCommentIdx === 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { perfumeId, ...paramsWithoutPerfumeId } = simpleCommentParams;
          // 간단한 코멘트
          await patchSimpleReview(
            myReviewInfo.review.reviewId,
            paramsWithoutPerfumeId,
          );
        } else {
          // 자세한 코멘트
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { perfumeId, ...paramsWithoutPerfumeId } = detailCommentParams;
          await patchDetailReview(
            myReviewInfo.review.reviewId,
            paramsWithoutPerfumeId,
          );
        }
      }

      // 캐시 무효화 및 재조회
      if (perfumeId) {
        await queryClient.invalidateQueries({
          queryKey: ["myReviewInfo", perfumeId as string],
        });
      }

      await queryClient.invalidateQueries({
        queryKey: ["reviewsInDetail"],
      });

      // 이전 페이지로
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!commentEvaluationForm) {
      getCommentEvaluationForm().then(res => {
        updateCommentEvaluationForm(res?.responseData);
      });
    }

    if (myReviewInfo?.review.reviewId) {
      if (myReviewInfo.review.reviewType === "DETAIL") {
        setSelectedCommentIdx(1);
      }

      setIsModify(true);
    } else {
      setIsModify(false);
    }
  }, [perfumeId]);

  useEffect(() => {
    if (watch("rating")) {
      clearErrors("rating");
    }
  }, [watch, clearErrors]);

  // useEffect(() => {
  //   reset();
  // }, [selectedCommentIdx, reset]);

  useEffect(() => {
    if (myReviewInfo?.review && !isInitialized) {
      const { score, content, perfumeEvaluation, moodNames } =
        myReviewInfo.review;
      if (!commentEvaluationForm) {
        return;
      }

      const persistenceOption =
        (perfumeEvaluation &&
          perfumeEvaluation.length > 0 &&
          commentEvaluationForm.evaluationFields[0].evaluationOptions?.find(
            (item: OptionFields) =>
              item.optionName === perfumeEvaluation[0]?.options[0]?.optionName,
          )) ||
        null;

      const residualScentOption =
        perfumeEvaluation &&
        perfumeEvaluation.length > 0 &&
        commentEvaluationForm.evaluationFields[1].evaluationOptions.find(
          (item: OptionFields) =>
            item.optionName === perfumeEvaluation[1]?.options[0]?.optionName,
        );

      const selectedSeasonOptions =
        (perfumeEvaluation &&
          perfumeEvaluation.length > 0 &&
          perfumeEvaluation[2]?.options.map(
            (option: { optionName: string }) => option.optionName,
          )) ||
        [];
      const seasonCodes =
        commentEvaluationForm.evaluationFields[2].evaluationOptions
          .filter((option: OptionFields) =>
            selectedSeasonOptions.includes(option.optionName),
          )
          .map((option: OptionFields) => option.optionCode); //

      const genderOption =
        perfumeEvaluation &&
        perfumeEvaluation.length > 0 &&
        commentEvaluationForm.evaluationFields[3]?.evaluationOptions.find(
          (item: OptionFields) =>
            item.optionName === perfumeEvaluation[3]?.options[0]?.optionName,
        );

      const formValues: FieldDefinitionsType = {
        rating: score,
        textReview: content,
        persistence: persistenceOption?.optionCode || "",
        residualScent: residualScentOption
          ? residualScentOption.optionCode
          : "",
        season: seasonCodes,
        gender: genderOption ? genderOption.optionCode : "",
        mood: moodNames || [],
      };

      reset(formValues);

      setIsInitialized(true); // 초기화 상태 변경
    }
  }, [myReviewInfo, reset, isInitialized, commentEvaluationForm]);

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

  const getWatchedValues = (
    fieldName: keyof FieldDefinitionsType,
  ): string[] => {
    const value = watch(fieldName);
    return Array.isArray(value) ? value : [];
  };

  const rating = watch("rating");

  const ratingText = useMemo(() => {
    const starRating = Math.ceil(rating ?? 0);
    const matchedItem = COMMENT_STAR_RATING_MESSAGE_LIST.find(
      item => item.value === starRating,
    );
    return matchedItem ? matchedItem.text : "";
  }, [rating]);

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
          <Product perfumeId={perfumeId ?? ""} />
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
              <EditableRating
                rate={watch("rating") || 0}
                size={38}
                gap={1.5}
                onRateChange={newRate => setValue("rating", newRate)}
              />
              <p className="rating-text">{ratingText}</p>
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
                  : `${watch("textReview")?.length ?? 0} `}
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
                initialValues={getWatchedValues("season")}
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
                initialValues={getWatchedValues("mood")}
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
