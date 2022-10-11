import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../context";

import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

export default function MenuFold() {
  const { theme, setTheme } = useThemeContext();
  const { menuStyle, collapsed, menuStyleColor, primaryColor } = theme;

  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const { menuStyle, menuStyleBgColor, menuStyleColor } = theme;
    setStyle({
      transition: "all .2s",
      ...(menuStyle == "transparent" && {
        backgroundColor: "transparent",
      }),
      ...(menuStyle == "white" && {
        borderTop: "1px solid #f2f2f2",
        backgroundColor: "white",
      }),
      ...(menuStyle == "dark" && {
        backgroundColor: menuStyleBgColor,
        color: menuStyleColor,
      }),
    });
  }, [theme]);

  return (
    <div
      onMouseOver={() => setStyle({ ...style, color: primaryColor })}
      onMouseOut={() =>
        setStyle({ ...style, color: menuStyle == "dark" && menuStyleColor })
      }
      onClick={() => setTheme({ ...theme, collapsed: !collapsed })}
      style={style}
      className={`w-full  h-10 cursor-pointer flex items-center justify-center text-lg`}
    >
      {(theme.collapsed && <CaretDoubleRight />) || <CaretDoubleLeft />}
    </div>
  );
}
