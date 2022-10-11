import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.jpeg";
import { useThemeContext } from "../../context";

export default function Logo() {
  const { theme } = useThemeContext();
  const {
    layout,
    collapsed,
    showLogo,
    menuStyle,
    menuStyleBgColor,
    menuStyleColor,
  } = theme;

  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer h-16 flex items-center justify-center bg-white transition-all"
      onClick={() => navigate("/")}
      style={{
        // transition: "all 0.2s",
        minWidth: 200,
        ...(layout == "side" && {
          ...(collapsed && { minWidth: 0 }),
        }),
        ...(["side", "top"].includes(layout) && {
          ...(menuStyle == "transparent" && {
            backgroundColor: "transparent",
          }),
          ...(menuStyle == "dark" && {
            backgroundColor: menuStyleBgColor,
            color: menuStyleColor,
          }),
          ...(menuStyle == "white" && {
            backgroundColor: "white",
          }),
        }),
      }}
    >
      {showLogo && (
        <>
          <img src={LogoImg} alt="logo" className="w-10 h-10" />
          <>
            <>
              {["mix", "top"].includes(layout) && (
                <div className="ml-2 text-xl">Gganbu</div>
              )}
            </>
            <>
              {layout == "side" && (
                <>{!collapsed && <div className="ml-2 text-xl">Gganbu</div>}</>
              )}
            </>
          </>
        </>
      )}
    </div>
  );
}
