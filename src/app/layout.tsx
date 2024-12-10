import "./global.css";
import type { Metadata } from "next";
import ReactQueryProviders from "@/provider/reactQueryProviders";
import { ReactNode } from "react";
import MobileBottomNav from "@/components/mobileBottomNav/MobileBottomNav";
import EmotionThemeProvider from "@/provider/EmotionThemeProvider";

export const metadata: Metadata = {
  title: "Perpick",
  description: "Perpick",
};

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
    </html>
  );
}
