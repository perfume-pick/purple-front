import "./global.css";
import type { Metadata } from "next";
import ReactQueryProviders from "@/provider/reactQueryProviders";
import MuiProvider from "@/provider/muiProvider";
import { ReactNode } from "react";
import { Body, HTML } from "@/component/atom/BoxComponents";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <HTML lang="en" height={"100%"}>
      <Body height={"100%"}>
        <ReactQueryProviders>
          <CssBaseline />
          <MuiProvider>{children}</MuiProvider>
        </ReactQueryProviders>
      </Body>
    </HTML>
  );
}
