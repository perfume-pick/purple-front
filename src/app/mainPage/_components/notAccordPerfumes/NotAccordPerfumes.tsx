import { useRouter } from "next/navigation";
import { S } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/service/client/userInfo";

const NotAccordPerfumes = () => {
  const router = useRouter();
  const { data: profile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const handleDirectOnboardingClick = () => {
    if (!profile) return;

    if (!profile.nickname) {
      router.push(`/onBoarding/nickName`, {
        scroll: false,
      });
    }

    router.push(`/onBoarding/step/oneStep?username=${profile?.nickname}`, {
      scroll: false,
    });
  };

  return (
    <>
      <S.Wrapper>
        <img
          alt="accords_nothing_logo"
          src="/assets/images/accrods_nothing_logo.svg"
        />
        <S.Description>
          <p>당신의 취향을 분석하려면</p>
          <p>몇가지 정보가 더 필요해요</p>
        </S.Description>
        <S.ButtonBox>
          <S.DirectButton onClick={handleDirectOnboardingClick}>
            취향분석 시작하기
          </S.DirectButton>
        </S.ButtonBox>
      </S.Wrapper>
    </>
  );
};

export default NotAccordPerfumes;
