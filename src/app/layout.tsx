import "./global.css";
import type { Metadata } from "next";
import ReactQueryProviders from "@/provider/reactQueryProviders";
import { ReactNode } from "react";
import MobileBottomNav from "@/components/mobileBottomNav/MobileBottomNav";
import EmotionThemeProvider from "@/provider/EmotionThemeProvider";
import KakaoScript from "@/utils/kakaoScript";
import { META } from "@/constant/metadata.const";

export const metadata: Metadata = {
  metadataBase: new URL("https://perpick.org"),
  title: META.title,
  description: META.description,
  keywords: META.keyword,
  openGraph: {
    title: META.title,
    description: META.description,
    url: META.url,
    images: META.ogImage,
  },
};

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ReactQueryProviders>
          <EmotionThemeProvider>
            <div id="portal" />
            {children}
          </EmotionThemeProvider>
          <MobileBottomNav />
        </ReactQueryProviders>
      </body>
      <KakaoScript />
    </html>
  );
}
