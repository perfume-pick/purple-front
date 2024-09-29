"use client";

import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

interface TokenServiceType {
  setToken(token: string): void;
  getToken(): string | null;
  removeToken(): void;
}

const TokenClientService: TokenServiceType = {
  setToken(token: string): void {
    localStorage.setItem(TOKEN_SAVE_KEY, token);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_SAVE_KEY);
  },

  removeToken(): void {
    localStorage.removeItem(TOKEN_SAVE_KEY);
  },
};

export default TokenClientService;
