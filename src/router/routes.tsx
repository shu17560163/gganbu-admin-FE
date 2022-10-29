import NotFound from "../pages/404"
import PageView from "../layouts/layoutComponents/pageView"
import { Navigate } from "react-router-dom"
import { IRoute } from "./type"
import { Gauge, List, ShieldCheck, User, Printer } from "phosphor-react"
import SuspenseWrapper from "./lazy"
import { lazy } from "react"

const LoginLogger = SuspenseWrapper(lazy(() => import("../pages/logger/login")))
const DashBoard = SuspenseWrapper(lazy(() => import("../pages/dashboard/index")))
const StaffInfo = SuspenseWrapper(lazy(() => import("../pages/settings/staff/staffInfo")))
const IpWhitelist = SuspenseWrapper(lazy(() => import("../pages/security/ipWhitelist")))
const AccountWhitelist = SuspenseWrapper(lazy(() => import("../pages/security/accountIWhitelist")))

const RoleInfo = SuspenseWrapper(lazy(() => import("../pages/settings/staff/roleInfo")))
const OrderInfo = SuspenseWrapper(lazy(() => import("../pages/order/orderInfo")))
const OrderDetail = SuspenseWrapper(lazy(() => import("../pages/order/orderDetail")))

// Note: Path shoule be FULL from / to make path is only
export const routes: IRoute[] = [
  { path: "/", element: <Navigate to="/dashboard" />, hidden: true },

  {
    path: "/dashboard",
    title: "Dashboard",
    element: <DashBoard />,
    icon: <Gauge />,
    affix: true,
    keepAlive: true,
    children: [
      {
        title: "Console",
        path: "/dashboard/console",
        element: <DashBoard />,
        keepAlive: true,
      },
    ],
  },
  {
    path: "/order",
    title: "Order",
    element: <PageView />,
    icon: <List />,
    children: [
      {
        path: "/order/orderInfo",
        title: "Order Info",
        element: <OrderInfo />,
        keepAlive: true,
      },
      {
        path: "/order/orderDetail",
        title: "Order Detail",
        hidden: true,
        element: <OrderDetail />,
      },
    ],
  },
  {
    path: "/staff",
    title: "Staff",
    element: <PageView />,
    icon: <User />,
    children: [
      {
        path: "/staff/staffInfo",
        title: "Staff Info",
        element: <StaffInfo />,
        keepAlive: true,
      },
      {
        path: "/staff/roleInfo",
        title: "Role Info",
        element: <RoleInfo />,
        keepAlive: true,
      },
    ],
  },
  {
    path: "/logger",
    title: "Logger",
    element: <PageView />,
    icon: <Printer />,
    children: [
      {
        path: "/logger/login",
        title: "Login",
        element: <LoginLogger />,
        keepAlive: true,
      },
    ],
  },
  {
    path: "/security",
    title: "Security",
    element: <PageView />,
    icon: <ShieldCheck />,
    children: [
      {
        path: "/security/whiteIpInfo",
        title: "Ip WhiteList",
        element: <IpWhitelist />,
        keepAlive: true,
      },
      {
        path: "/security/whiteAccountInfo",
        title: "Account WhiteList",
        element: <AccountWhitelist />,
        keepAlive: true,
      },
    ],
  },
  { path: "*", title: "Not Found", hidden: true, element: <NotFound /> },
]

export const routesForRoleTree = routes.slice(1, routes.length - 1)
