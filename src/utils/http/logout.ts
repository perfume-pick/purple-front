"use client";

export const logout = () => {
  const baseUrl = "http://localhost:3000";
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
