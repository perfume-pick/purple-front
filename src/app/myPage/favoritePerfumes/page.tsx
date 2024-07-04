import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";

const favoritePerfumesPage = () => {
  return (
    <>
      <NavHeader style={{ justifyContent: "center" }}>
        <NavHeaderInner text="인생 향수" />
      </NavHeader>
    </>
  );
};

export default favoritePerfumesPage;
