"use client";

import { ThemeProvider } from "@emotion/react";
import { theme } from "@/styles/theme";

const EmotionThemeProvider = ({ children }: EmotionThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface EmotionThemeProviderProps {
  children: React.ReactNode;
}

export default EmotionThemeProvider;
