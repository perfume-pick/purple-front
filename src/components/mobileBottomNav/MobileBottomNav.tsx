"use client";

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { FaRegSmile } from "react-icons/fa";
// import { PiHeartBold } from "react-icons/pi";
// import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { RiHome4Line } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

const MobileBottomNav = () => {
  const router = useRouter();
  const path = usePathname();

  const hiddenRoutes = [
    "/signin",
    "/onBoarding",
    "/commentPage",
    "/detail/comments",
    "/auth",
    "/detail",
    "/myPage/profileSetting",
    "/myPage/setting",
  ];

  // TODO: router경로는 페이지가 만들어지면 수정 필요.
  const NAV_LIST = [
    {
      name: "홈",
      icon: <RiHome4Line />,
      router: "/",
    },
    {
      name: "검색",
      icon: <IoIosSearch />,
      router: "/searchPage",
    },
    // {
    //   name: "찜 목록",
    //   icon: <PiHeartBold />,
    //   router: "/detail",
    // },
    {
      name: "마이페이지",
      icon: <FaRegSmile />,
      router: "/myPage",
    },
  ];

  useEffect(() => {
    if (!hiddenRoutes.some(route => path.startsWith(route))) {
      document.body.classList.add("bot-padding");
    } else {
      document.body.classList.remove("bot-padding");
    }

    return () => {
      document.body.classList.remove("bot-padding");
    };
  }, [path]);
  return (
    <>
      {!hiddenRoutes.some(route => path.startsWith(route)) && (
        <S.Wrapper>
          {NAV_LIST.map((list, idx) => (
            <S.IconWrap
              route={list.router === path}
              key={idx}
              onClick={() => router.push(list.router, { scroll: false })}
            >
              <>{list.icon}</>
              <span>{list.name}</span>
            </S.IconWrap>
          ))}
        </S.Wrapper>
      )}
    </>
  );
};

export default MobileBottomNav;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 440px;
  height: 5.8rem;
  z-index: 999;
  background-color: ${theme.color.white};
  display: flex;
  box-shadow: 0px -1px 4px 1px #d9d9d9;
  border-radius: 8px 8px 0 0;
  align-items: start;
  padding: 8px;
  justify-content: space-around;
`;

const IconWrap = styled.div<{ route: boolean }>`
  width: 33.3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => (props.route ? theme.color.primary.coral[400] : "")};

  & > span {
    font-size: ${theme.fontSize.xs};
    margin-top: 8px;
  }
`;

export const S = { Wrapper, IconWrap };
