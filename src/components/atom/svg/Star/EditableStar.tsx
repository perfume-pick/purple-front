import React from "react";

type Props = {
  size: number;
  value: number;
  index: number;
  onClick?: (index: number, isHalf: boolean, isEnd: boolean) => void;
};

const EditableStar = ({ size, value, index, onClick }: Props) => {
  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    if (onClick) {
      const { clientX, currentTarget } = event;
      const { left, width } = currentTarget.getBoundingClientRect();
      // +0.5
      const isHalf = clientX < left + width / 2;
      // 별점 없앰
      const isEnd = clientX < left + width / 10;
      onClick(index, isHalf, isEnd);
    }
  };

  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <defs>
          <clipPath id={`edit-halfStarClip-${index}`}>
            <rect width="50%" height="100%" />
          </clipPath>
          <clipPath id={`edit-fullStarClip-${index}`}>
            <rect width="100%" height="100%" />
          </clipPath>
        </defs>
        <path
          d="M17.3865 1.63672C18.5341 -0.39921 21.4659 -0.39921 22.6135 1.63672L26.6261 8.75589C27.0542 9.51542 27.7916 10.0511 28.6462 10.2236L36.6569 11.8399C38.9478 12.3021 39.8538 15.0905 38.2721 16.811L32.7414 22.8272C32.1513 23.469 31.8697 24.3358 31.9698 25.2019L32.908 33.3201C33.1763 35.6417 30.8044 37.365 28.6793 36.3924L21.2485 32.9914C20.4557 32.6286 19.5443 32.6286 18.7515 32.9914L11.3207 36.3923C9.1956 37.3649 6.8237 35.6417 7.09201 33.3201L8.03024 25.202C8.13034 24.3358 7.8487 23.469 7.25863 22.8272L1.72789 16.811C0.146206 15.0905 1.05219 12.3021 3.34309 11.8399L11.3538 10.2236C12.2084 10.0511 12.9458 9.51542 13.3739 8.75589L17.3865 1.63672Z"
          fill="#FF6E62"
          opacity="0.2"
        />
        <g
          clipPath={
            value >= size
              ? `url(#edit-fullStarClip-${index})`
              : value >= size / 2
                ? `url(#edit-halfStarClip-${index})`
                : ""
          }
        >
          <path
            d="M17.3865 1.63672C18.5341 -0.39921 21.4659 -0.39921 22.6135 1.63672L26.6261 8.75589C27.0542 9.51542 27.7916 10.0511 28.6462 10.2236L36.6569 11.8399C38.9478 12.3021 39.8538 15.0905 38.2721 16.811L32.7414 22.8272C32.1513 23.469 31.8697 24.3358 31.9698 25.2019L32.908 33.3201C33.1763 35.6417 30.8044 37.365 28.6793 36.3924L21.2485 32.9914C20.4557 32.6286 19.5443 32.6286 18.7515 32.9914L11.3207 36.3923C9.1956 37.3649 6.8237 35.6417 7.09201 33.3201L8.03024 25.202C8.13034 24.3358 7.8487 23.469 7.25863 22.8272L1.72789 16.811C0.146206 15.0905 1.05219 12.3021 3.34309 11.8399L11.3538 10.2236C12.2084 10.0511 12.9458 9.51542 13.3739 8.75589L17.3865 1.63672Z"
            fill={value === 0 ? "transparent" : "#FF6E62"}
          />
        </g>
      </svg>
    </>
  );
};

export default EditableStar;
