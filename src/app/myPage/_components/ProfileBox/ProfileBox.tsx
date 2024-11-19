import Profile from "@/components/Profile/Profile";
import { S } from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/service/client/userInfo";

const ProfileBox = () => {
  const router = useRouter();

  const { data: profile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  const profileImageUrl =
    profile && profile.imageUrl
      ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${profile?.imageUrl}`
      : "";

  return (
    <S.Wrapper>
      <S.Container onClick={() => router.push("/myPage/profileSetting")}>
        <Profile width="6rem" height="6rem" image={profileImageUrl} />
        <S.TextWrap>
          <div>
            <p>{profile?.nickname ?? ""}</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "2.4rem", color: "#919193" }}
            />
          </div>
          <p>{profile?.email ?? ""}</p>
        </S.TextWrap>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileBox;
