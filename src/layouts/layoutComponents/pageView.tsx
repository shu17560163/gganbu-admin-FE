import { Outlet } from "react-router-dom";
import { useThemeContext } from "../../context";
import { Bread } from "../components";
/**
 * page view for those nested routes
 */
export default function PageView() {
  const { theme } = useThemeContext();
  const { showBread, layout } = theme;
  return (
    <>
      {layout == "top" && (
        <>
          {showBread && (
            <div className="mb-4">
              <Bread />
            </div>
          )}
        </>
      )}
      <Outlet />
    </>
  );
}
