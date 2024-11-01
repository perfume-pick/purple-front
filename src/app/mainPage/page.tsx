"use client";

import SearchBar from "@/components/atom/SearchBar/SearchBar";
import { S } from "./styles";
import { useRouter } from "next/navigation";
import PerpickLogo from "./_components/logo/Perpick";
import Taps from "./_components/taps/Taps";
import Perfumes from "./_components/perfumes/Perfumes";

function MainPage() {
  const router = useRouter();

  const handleClickSearchBar = () => {
    router.push("/searchPage", { scroll: false });
  };

  return (
    <S.Wrapper>
      <PerpickLogo />
      <S.SearchBarContainer>
        <SearchBar
          placeholderText="나의 향을 검색해보세요"
          onClick={handleClickSearchBar}
          isReadonly={true}
        />
      </S.SearchBarContainer>
      <Taps />
      <Perfumes />
    </S.Wrapper>
  );
}
export default MainPage;
