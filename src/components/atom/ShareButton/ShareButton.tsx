"use client";

import React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import { getIsMobile } from "@/utils/utils";

type Props = {
  imageUrl: string;
  perfumeId: string;
  perfumeName: string;
  handleClick: () => void;
};

const ShareButton = ({
  perfumeId,
  imageUrl,
  perfumeName,
  handleClick,
}: Props) => {
  const handleShare = () => {
    const isMobile = getIsMobile();
    const { Kakao, location } = window;
    if (!perfumeId) {
      return;
    }
    if (isMobile && Kakao?.Share) {
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "perpick",
          description: `${perfumeName}를 퍼픽에서 확인해보세요!`,
          imageUrl,
          link: {
            mobileWebUrl: `${location.href}`,
            webUrl: `${location.href}`,
          },
        },
        buttons: [
          {
            title: "자세히 보기",
            link: {
              mobileWebUrl: `${location.href}`,
              webUrl: `${location.href}`,
            },
          },
        ],
      });
    } else {
      navigator.clipboard.writeText(location.href);
      handleClick();
    }
  };

  return (
    <>
      <IosShareIcon
        sx={{ fontSize: "2.4rem", marginLeft: "2.4rem" }}
        onClick={handleShare}
      />
    </>
  );
};

export default ShareButton;
