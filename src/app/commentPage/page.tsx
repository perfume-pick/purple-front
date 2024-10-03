// "use client";

// import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
// import { S } from "./styles";
// import Product from "./_components/Product/Product";
// import { CommentType, FieldDefinitions } from "@/constant/comment.const";
// import Rating from "@/components/atom/Rating/Rating";
// import Button from "@/components/atom/Button";
// import { TEXTAREA_LENGTH } from "@/constant/common/textLength";
// import { RadioForm } from "./_components/CheckLists/RadioType/RadioForm";
// import { useForm } from "react-hook-form";
// import { FieldDefinitionsType } from "@/types/commentTypes";
// import { validationMessages } from "@/constant/validation/commentValidation";
// import { CheckboxForm } from "./_components/CheckLists/CheckboxType/CheckboxForm";
// import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
// import HeaderBottomContents from "@/components/headerBottomContents/HeaderBottomContents";
// import { useEffect, useState } from "react";

// const CommentPage = () => {
//   const {
//     handleSubmit,
//     control,
//     register,
//     watch,
//     clearErrors,
//     getValues,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm<FieldDefinitionsType>();
//   const [selectedCommentIdx, setSelectedCommentIdx] = useState(0);

//   const onSubmit = async (data: FieldDefinitionsType) => {
//     alert(JSON.stringify(data));
//     console.log(data);
//   };

//   useEffect(() => {
//     if (watch("rating")) {
//       clearErrors("rating");
//     }
//   }, [watch("rating")]);

//   useEffect(() => {
//     reset();
//   }, [selectedCommentIdx]);

//   const handleClick = (idx: number) => {
//     setSelectedCommentIdx(idx);
//   };

//   const allValues =
//     selectedCommentIdx === 0
//       ? watch("rating") && watch("textReview")
//       : watch("rating") &&
//         watch("textReview") &&
//         watch("persistence") &&
//         watch("residualScent") &&
//         watch("season") &&
//         watch("gender") &&
//         watch("mood");

//   return (
//     <>
//       <NavHeader style={{ justifyContent: "center" }}>
//         <div
//           style={{
//             fontSize: "1.8rem",
//             fontWeight: "bold",
//           }}
//         >
//           코멘트 작성
//         </div>
//       </NavHeader>
//       <HeaderBottomContents>
//         <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
//           <Product />
//           <S.CommentWrap>
//             {Object.values(CommentType).map((comment, idx) => (
//               <S.CommentBtn
//                 key={idx}
//                 isSelected={idx === selectedCommentIdx}
//                 onClick={() => handleClick(idx)}
//               >
//                 {comment}
//               </S.CommentBtn>
//             ))}
//           </S.CommentWrap>
//           <S.EvaluationWrap>
//             <span>{FieldDefinitions.rating.label}</span>
//             <S.RatingWrap {...register("rating", validationMessages.rating)}>
//               <Rating
//                 getValues={getValues}
//                 setValue={setValue}
//                 selectedCommentIdx={selectedCommentIdx}
//               />
//               <div>향이 마음에 들어요</div>
//             </S.RatingWrap>
//             {errors.rating && (
//               <ErrorMessage error={errors.rating.message || ""} />
//             )}
//           </S.EvaluationWrap>
//           <S.ReviewWrap>
//             <S.ReviewTitle>
//               <span>{FieldDefinitions.textReview.label}</span>
//             </S.ReviewTitle>
//             <S.TextAreaWrap
//               {...register("textReview", validationMessages.textReview)}
//             >
//               <textarea
//                 maxLength={TEXTAREA_LENGTH}
//                 name="textReview"
//                 placeholder="개인적인 향의 느낌, 어울리는 스타일이나 분위기 등을 작성해보세요."
//               />
//               <div>
//                 {watch("textReview") === undefined ||
//                 watch("textReview")?.length === 0
//                   ? "0 "
//                   : `${watch("textReview")?.length} `}
//                 / {TEXTAREA_LENGTH}자
//               </div>
//             </S.TextAreaWrap>
//             {errors.textReview && (
//               <ErrorMessage error={errors.textReview.message || ""} />
//             )}
//           </S.ReviewWrap>
//           {selectedCommentIdx === 1 && (
//             <>
//               <RadioForm
//                 control={control}
//                 options={FieldDefinitions.persistence.options}
//                 name="persistence"
//                 rules={validationMessages.persistence}
//                 label={FieldDefinitions.persistence.label}
//                 errors={errors}
//               />
//               <RadioForm
//                 control={control}
//                 options={FieldDefinitions.residualScent.options}
//                 name="residualScent"
//                 rules={validationMessages.residualScent}
//                 label={FieldDefinitions.residualScent.label}
//                 errors={errors}
//               />
//               <CheckboxForm
//                 control={control}
//                 options={FieldDefinitions.season.options}
//                 name="season"
//                 rules={validationMessages.season}
//                 label={FieldDefinitions.season.label}
//                 errors={errors}
//               />
//               <RadioForm
//                 control={control}
//                 options={FieldDefinitions.gender.options}
//                 name="gender"
//                 rules={validationMessages.gender}
//                 label={FieldDefinitions.gender.label}
//                 errors={errors}
//               />
//               <CheckboxForm
//                 control={control}
//                 options={FieldDefinitions.mood.options}
//                 name="mood"
//                 rules={validationMessages.mood}
//                 label={FieldDefinitions.mood.label}
//                 errors={errors}
//               />
//             </>
//           )}
//           <S.CommentButton>
//             <Button
//               type="submit"
//               buttonText="코멘트 등록"
//               disabled={!allValues}
//               styleProps={{ fontWeight: "bold" }}
//               size="primary"
//             />
//           </S.CommentButton>
//         </S.Wrapper>
//       </HeaderBottomContents>
//     </>
//   );
// };
// export default CommentPage;

"use client";

const CommentPage = () => {
  return <div>commentPage</div>;
};

export default CommentPage;
