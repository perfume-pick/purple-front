import styled from "@emotion/styled";
import { theme } from "@/styles/theme";

const Wrapper = styled.div`
  overflow-y: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1rem;
    padding: 0;
    margin: 0;
    padding-bottom: 1rem;
    background: ${theme.color.white};

    & > li {
      width: 50%;

      & > div {
        width: 100%;
        aspect-ratio: 1 / 1.3;

        div {
          border-radius: 0;
        }
      }
    }
  }
`;

export const S = {
  Wrapper,
};
