"use client";

import React, { useEffect } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";

// type Props = {
//   description: string;
// };

// const ShareButton = ({ description }: Props) => {
const ShareButton = () => {
  // const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const { Kakao } = window;
      // if (!Kakao.isInitialized()) {
      //   Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      // }
    }
  }, []);

  const handleShare = () => {
    // if (shareUrl) return;
    // const { Kakao } = window;
    // Kakao.Share.sendScrap({
    //   requestUrl: shareUrl,
    // });
    // console.log(location.href);
    // console.log(Kakao);
    // console.log("Kakao API Key:", process.env.NEXT_PUBLIC_KAKAO_API_KEY);
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
