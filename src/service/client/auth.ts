import clientHttp from "@/utils/http/clientHttp";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

const endPoint = {
  POST_LOGOUT: "/perpicks/auth/logout",
};

// 코멘트 전체 조회
async function logout() {
  await clientHttp.post(endPoint.POST_LOGOUT);
  await fetch("/api/delete-token", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  localStorage.removeItem(TOKEN_SAVE_KEY);
  // 미들웨어에서 인식 못히는지 확인
  setTimeout(() => {
    window.location.href = "/signin";
  }, 1000);
}

export { logout };
