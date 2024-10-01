import Banner from "@/components/banner/banner";
import { S } from "../../styles";

// 임시 테스트. map돌리는곳. 나중에 api 연동하면 데이터로 교체하고 삭제.
function CommentMainPage() {
  return (
    <S.BannerWrap>
      <Banner />
      <Banner />
      <Banner />
      <Banner />
      <Banner />
    </S.BannerWrap>
  );
}
export default CommentMainPage;
