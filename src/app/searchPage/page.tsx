"use client";

import React, { useState } from "react";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import ProductCardGrid from "@/components/organism/ProductCardGrid/ProductCardGrid";
import SearchBar from "@/components/atom/SearchBar/SearchBar";
import ProductHorizontalScroll from "./_components/ProductList/ProductHorizontalScroll";
import ChipList from "@/components/organism/ChipList/ChipList";
import useDebounce from "@/hook/useDebounce";
import { getSearchPerfumes } from "@/service/client/searchPerfume";
// import { goHome } from "@/utils/routerUtil";

const tempCurrentSearchList = [
  "딥티크",
  "오드뚜왈렛",
  "긴텍스트긴텍스트",
  "필로시코스",
  "딥티크",
  "오드뚜왈렛",
  "긴텍스트긴텍스트",
  "필로시코스",
];

const SearchPage = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const debouncedKeyword = useDebounce(keyword);

  const {
    data: resultData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchPerfume", debouncedKeyword], // 키와 의존성 전달
    queryFn: () => getSearchPerfumes(debouncedKeyword), // 함수 참조 전달
    enabled: !!debouncedKeyword,
    staleTime: 2000, // 5분 동안 캐싱
    keepPreviousData: true,
  });

  console.log(resultData?.data.responseData);

  const handleChipClick = (text: string) => {
    setKeyword(text);
  };

  return (
    <>
      <S.SearchBarWrap>
        <SearchBar
          placeholderText="브랜드, 제품명, 리뷰로 찾아보세요"
          inputValue={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button onClick={() => router.push("/")}>취소</button>
      </S.SearchBarWrap>
      {!keyword && (
        <div>
          <div>
            <S.SearchTitle>
              <span>최근 검색</span>
              <span>전체 삭제</span>
            </S.SearchTitle>
          </div>
          <ChipList
            chipList={tempCurrentSearchList}
            onChipClick={handleChipClick}
          />
          <div>
            <S.SearchTitle>
              <span>최근 본 상품</span>
              <span>전체 삭제</span>
            </S.SearchTitle>
          </div>
          <ProductHorizontalScroll />
        </div>
      )}
      {/* {true && keyword && (
        <S.SearchAutoCompleteArea>
          <ul>
            {["test1", "test2", "test3"].map(text => (
              <li key={text} onClick={() => handleChipClick(text)}>
                {text}
              </li>
            ))}
          </ul>
        </S.SearchAutoCompleteArea>
      )} */}
      {isLoading && <p>로딩중...</p>}
      {keyword && (
        <div>
          {/* TODO : 메인의 scroll 위치를 기억해야하는 경우 */}
          {false && (
            <S.EmptyWrap>
              <div>
                <p>
                  검색 결과가 없습니다. <br /> 상품 등록 요청을 해주세요.
                </p>
                <button>상품 등록 요청</button>
              </div>
            </S.EmptyWrap>
          )}
          {true && (
            <ProductCardGrid
              dataList={resultData?.data?.responseData.perfumes}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SearchPage;
