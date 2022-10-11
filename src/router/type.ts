import type { RouteObject } from "react-router";
import type { ReactNode } from "react";

interface Route extends RouteObject {
  path?: string;
  element?: ReactNode;
  title?: string;
  /*** for those deteil page and uncesssary for TagsBar/sideBar */
  hidden?: boolean;
  icon?: ReactNode;
  /*** for header tags,usually only dashboard is true */
  affix?: boolean;
  /*** whether keepAlive, usually used in those Info Page */
  keepAlive?: boolean;
}

export interface IRoute extends Route {
  children?: Route[];
}
