"use client";

import React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import { getIsMobile } from "@/utils/utils";

type Props = {
  // description: string;
  perfumeId: string;
  handleClick: () => void;
};

const ShareButton = ({ perfumeId, handleClick }: Props) => {
  const handleShare = () => {
    const isMobile = getIsMobile();
    const { Kakao, location } = window;
    if (!perfumeId) {
      return;
    }

    if (isMobile && Kakao?.Share) {
      Kakao.Share.sendScrap({
        requestUrl: `${location.href}?shareUrl=${location.href}?perfumeId=${perfumeId}`,
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
