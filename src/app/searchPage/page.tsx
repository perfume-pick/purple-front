"use client";

import React, { useState, useEffect } from "react";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductCardGrid from "@/components/organism/ProductCardGrid/ProductCardGrid";
import SearchBar from "@/components/atom/SearchBar/SearchBar";
import ProductHorizontalScroll from "./_components/ProductList/ProductHorizontalScroll";
import ChipList from "@/components/organism/ChipList/ChipList";
import useDebounce from "@/hook/useDebounce";
import {
  deleteCurrentSearchHistory,
  getCurrentSearchHistory,
  getSearchPerfumes,
} from "@/service/client/searchPerfume";

const SearchPage = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const debouncedKeyword = useDebounce(keyword);

  // 검색 결과
  const { data: resultData, isLoading } = useQuery({
    queryKey: ["searchPerfume", debouncedKeyword],
    queryFn: () => getSearchPerfumes(debouncedKeyword),
    enabled: !!debouncedKeyword,
    staleTime: 5 * 60 * 1000, // 5분 동안 캐싱
    keepPreviousData: true,
  });

  // 최근 검색어
  const {
    data: currentSearchHistoriesData,
    refetch: updateCurrentSearchHistoriesData,
  } = useQuery({
    queryKey: ["searchHistories"],
    queryFn: () => getCurrentSearchHistory(),
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });

  let searchHistories =
    currentSearchHistoriesData?.responseData?.searchHistories;

  useEffect(() => {
    if (debouncedKeyword === "") {
      updateCurrentSearchHistoriesData();
    }
  }, [debouncedKeyword, updateCurrentSearchHistoriesData]);

  const handleChipClick = (text: string) => {
    setKeyword(text);
  };

  const handleClickDeleteCurrentSearchHistory = () => {
    if (searchHistories.length < 1) {
      return;
    }
    deleteCurrentSearchHistory().then(res => {
      if (res.status === 204) {
        // 최근 검색어 refetch
        updateCurrentSearchHistoriesData();
      }
    });
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
              <span onClick={handleClickDeleteCurrentSearchHistory}>
                전체 삭제
              </span>
            </S.SearchTitle>
          </div>
          <ChipList
            chipList={searchHistories ?? []}
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
      {/* {isLoading && <p>로딩중...</p>} */}
      {keyword && (
        <div>
          {/* TODO : 메인의 scroll 위치를 기억해야하는 경우 */}
          {resultData?.data?.responseData.perfumes.length < 1 ? (
            <S.EmptyWrap>
              <div>
                <p>
                  검색 결과가 없습니다. <br /> 상품 등록 요청을 해주세요.
                </p>
                <Link
                  href="https://forms.gle/qrm7mewTK12KM6R16"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                >
                  상품 등록 요청
                </Link>
              </div>
            </S.EmptyWrap>
          ) : (
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
