import clientHttp from "@/utils/http/clientHttp";
import { TOKEN_SAVE_KEY } from "@/constant/auth.const";

const endPoint = {
  POST_LOGOUT: "/perpicks/auth/logout",
  DELETE_USER_ACCOUNT: "/perpicks/users/my/withdraw",
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

async function withdraw() {
  await clientHttp.delete(endPoint.DELETE_USER_ACCOUNT);
}

export { logout, withdraw };
