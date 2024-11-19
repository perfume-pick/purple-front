"use client";

export const logout = () => {
  const baseUrl = window.location.origin;
  fetch(`${baseUrl}/api/delete-token`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // 미들웨어에서 인식 못히는지 확인
  setTimeout(() => {
    window.location.href = "/signin";
  }, 1000);
};
