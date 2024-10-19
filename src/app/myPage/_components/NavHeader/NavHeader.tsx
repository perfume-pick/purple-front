import NavHeader from "@/components/navHeaderLayout/navHeaderLayout";
import NavHeaderInner from "@/components/navHeaderLayout/NavHeaderInner";
import SettingsIcon from "@mui/icons-material/Settings";

const MyPageNavHeader = () => {
  return (
    <NavHeader
      rightIcon={
        <SettingsIcon
          sx={{
            fontSize: "2rem",
            position: "relative",
            zIndex: 1,
          }}
        />
      }
    >
      <NavHeaderInner text="마이페이지" />
    </NavHeader>
  );
};

export default MyPageNavHeader;
