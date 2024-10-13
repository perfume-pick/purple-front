/** @jsxImportSource @emotion/react */
import React, { CSSProperties } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import sizeCSS from "./styles";

function Button({
  clickCallback,
  buttonText,
  disabled,
  className,
  type,
  size,
  styleProps,
}: {
  clickCallback?: () => void;
  buttonText: string;
  disabled?: boolean;
  className?: string;
  size?: "primary" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  styleProps?: CSSProperties;
}) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (type !== "submit") {
      e.preventDefault();
    }
    clickCallback?.();
  };

  return (
    <ButtonBox className={className}>
      <button
        // eslint-disable-next-line react/no-unknown-property
        css={size ? sizeCSS[size] : undefined}
        style={{ ...styleProps }}
        disabled={disabled}
        onClick={handleClick}
        type={type ?? "button"}
      >
        {buttonText}
      </button>
    </ButtonBox>
  );
}

export default Button;

const ButtonBox = styled.div<{
  color?: string;
  type?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > button {
    display: flex;
    background-color: ${theme.color.primary};
    flex-direction: row;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    color: ${theme.color.white};

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.color.grayColor[200]};
      user-select: none;
      opacity: 0.6;
    }
  }
`;
