"use client";

import SearchBar from "@/components/atom/SearchBar/SearchBar";
import NoteMainPage from "./_components/note/NoteMainPage";
import { S } from "./styles";
import { useState } from "react";
import { MainPageType, MainPageValueType } from "@/constant/mainPage.const";
import CommentMainPage from "./_components/comment/CommentMainPage";
import { useRouter } from "next/navigation";
import PerpickLogo from "./_components/logo/Perpick";

function MainPage() {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] =
    useState<MainPageValueType>("NOTE");

  const sections: { [key in MainPageType]: MainPageValueType } = {
    "노트 기반": "NOTE",
    "코멘트 수": "COMMENT",
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "NOTE":
        return <NoteMainPage />;
      case "COMMENT":
        return <CommentMainPage />;
      default:
        return null;
    }
  };

  const handleSelectClick = (value: MainPageValueType) => {
    setSelectedComponent(value);
  };

  const handleClickSearchBar = () => {
    router.push("/searchPage");
  };

  return (
    <S.Wrapper>
      <S.TopWrap>
        <PerpickLogo />
        <SearchBar
          placeholderText="나의 향을 검색해보세요"
          onClick={handleClickSearchBar}
          isReadonly={true}
        />
      </S.TopWrap>
      <S.SelectBtnWrapper>
        {Object.entries(sections).map(([key, value]) => (
          <S.FocusComponent
            focus={selectedComponent === value}
            key={key}
            onClick={() => handleSelectClick(value)}
          >
            <div>{key}</div>
          </S.FocusComponent>
        ))}
      </S.SelectBtnWrapper>
      {renderSelectedComponent()}
    </S.Wrapper>
  );
}
export default MainPage;
