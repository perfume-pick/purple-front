import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  isClicked: boolean;
  favoriteCount: number;
  clickFavorite: () => void;
};

const FavoritButtons = ({ isClicked, favoriteCount, clickFavorite }: Props) => {
  return (
    <S.Wrapper>
      <FavoriteIcon
        sx={{
          marginRight: "0.4rem",
          color: isClicked
            ? theme.color.primary.coral[400]
            : theme.color.grayColor[500],
        }}
        onClick={clickFavorite}
      />
      <p>좋아요 {favoriteCount}</p>
    </S.Wrapper>
  );
};

export default FavoritButtons;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const S = {
  Wrapper,
};
