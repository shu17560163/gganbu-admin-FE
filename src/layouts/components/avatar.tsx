import { Avatar as AvatarAnt, Badge, Dropdown, Input, Tooltip } from "antd";
import { Menu, MenuProps, Modal } from "antd";
import { Globe, Question, Bell, User } from "phosphor-react";
import { ArrowsOut, ArrowsIn, MagnifyingGlass } from "phosphor-react";

import { useState } from "react";
import { useThemeContext, useUserContext } from "../../context";

export default function Avatar() {
  const { user, setUser } = useUserContext();
  const { theme, setTheme } = useThemeContext();

  const { menuStyleBgColor, menuStyle, menuStyleColor, layout, isFullscreen } =
    theme;

  const [showSearch, setShowSearch] = useState(false);

  const languageMenuItem: MenuProps["items"] = [
    { label: "English", key: "english" },
    { label: "简体中文", key: "chineseSimple" },
  ];

  const Logout = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("refreshToken");
    setUser({});
  };

  const MenuItems: MenuProps["items"] = [
    { label: "User Profile", key: "user" },
    {
      label: (
        <a
          onClick={() =>
            Modal.confirm({
              // parentContext:,

              title: "Hint",
              content: "Are you sure you want to logout?",
              onOk: async () => {
                await Logout();
                window.location.reload();
              },
            })
          }
        >
          Log Out
        </a>
      ),
      key: "logout",
    },
  ];
  return (
    <div
      style={{
        ...(["top"].includes(layout) && {
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
      className="cursor-pointer flex items-center h-full"
    >
      <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
        {showSearch && (
          <Input
            autoFocus
            suffix={<MagnifyingGlass />}
            onBlur={() => setShowSearch(false)}
          />
        )}
        {!showSearch && (
          <MagnifyingGlass size={26} onClick={() => setShowSearch(true)} />
        )}
      </div>

      <Tooltip title="Help" autoAdjustOverflow>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
          <Question size={26} />
        </div>
      </Tooltip>

      <Tooltip
        title={(theme.isFullscreen && "Reduction") || "Full Screen"}
        autoAdjustOverflow
      >
        <div
          onClick={() => setTheme({ ...theme, isFullscreen: !isFullscreen })}
          className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full"
        >
          {(theme.isFullscreen && <ArrowsIn size={26} />) || (
            <ArrowsOut size={26} />
          )}
        </div>
      </Tooltip>

      <Tooltip title="Notificaitons" autoAdjustOverflow>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
          <Badge overflowCount={10} count={199}>
            <Bell size={26} />
          </Badge>
        </div>
      </Tooltip>

      <Dropdown trigger={["hover"]} overlay={<Menu items={languageMenuItem} />}>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)] h-full">
          <Globe size={26} />
        </div>
      </Dropdown>

      <Dropdown trigger={["hover"]} overlay={<Menu items={MenuItems} />}>
        <div className="px-2 flex items-center hover:bg-[rgb(0,0,0,0.025)]">
          <AvatarAnt size="large" icon={<User />} />
          <div className="ml-3 max-w-[80px] text-ellipsis overflow-hidden">
            {user?.name}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
