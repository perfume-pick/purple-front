import Profile from "@/components/Profile/Profile";
import { S } from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/navigation";

const ProfileBox = () => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Container onClick={() => router.push("/myPage/profileSetting")}>
        <Profile width="6rem" height="6rem" />
        <S.TextWrap>
          <div>
            <p>닉네임이 길면 이렇게 보이도록</p>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "2.4rem", color: "#919193" }}
            />
          </div>
          <p>2leee@naver.com</p>
        </S.TextWrap>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProfileBox;
