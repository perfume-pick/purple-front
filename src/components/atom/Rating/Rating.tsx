// "use client";

// import { FC, useState } from "react";
// import styled from "@emotion/styled";
// import RatingComponent from "@/components/atom/Rating/RatingComponent";

// const MAX_RATING = 5;

// export type PropTypes = {
//   onChange?: (rating: number) => void;
//   disabled?: boolean;
//   precision: number;
//   size?: number;
//   initialValue?: number;
// };

// const defaultSize = 40;

// const Rating: FC<PropTypes> = ({
//   initialValue = 0,
//   onChange,
//   disabled,
//   precision,
//   size = defaultSize,
// }) => {
//   const [rating, setRating] = useState(initialValue);

//   const onChangeCallback = (value: number, index: number) => {
//     const rating = index + value;
//     setRating(rating);
//     onChange?.(rating);
//   };

//   return (
//     <S.Wrapper size={size}>
//       {[...Array(MAX_RATING)].map((_, idx) => {
//         const normalizedRating = Math.floor(rating);
//         const currentStart = normalizedRating === idx;
//         const isLowerPosition = normalizedRating > idx;
//         const initialValue = currentStart
//           ? rating - idx
//           : isLowerPosition
//             ? 1
//             : 0;
//         return (
//           <RatingComponent
//             key={idx}
//             index={idx}
//             size={size}
//             onChange={onChangeCallback}
//             disabled={disabled}
//             precision={precision}
//             initialValue={initialValue}
//           />
//         );
//       })}
//     </S.Wrapper>
//   );
// };
// export default Rating;

// const Wrapper = styled.div<{ size: number }>`
//   display: inline-grid;
//   grid-template-columns: repeat(${MAX_RATING}, ${({ size }) => size}px);
//   padding: 10px;
//   gap: 5px;
// `;

// const S = {
//   Wrapper,
// };
"use client";

import { useState } from "react";
import styled from "@emotion/styled";
import { UseFormSetValue } from "react-hook-form";
import { FieldDefinitionsType } from "@/types/commentTypes";

type RatingProps = {
  setValue?: UseFormSetValue<FieldDefinitionsType>;
};

// TODO : rating이 사용되는곳이 어떤식으로 될지에 따라 변경해야함.
function Rating({ setValue }: RatingProps) {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectRating: number) => {
    setRating(selectRating);
    if (setValue) {
      setValue("rating", selectRating);
    }
  };

  return (
    <S.Wrapper>
      {[...Array(5)].map((_, idx) => (
        <div key={idx} onClick={() => handleRatingClick(idx + 1)}>
          {idx < rating ? (
            <img src="/assets/images/star.png" />
          ) : (
            <img src="/assets/images/starOpacity.png" />
          )}
        </div>
      ))}
    </S.Wrapper>
  );
}
export default Rating;

const Wrapper = styled.div`
  display: flex;
  & > div > * {
    margin: 0.6rem;
  }
`;

const S = {
  Wrapper,
};
