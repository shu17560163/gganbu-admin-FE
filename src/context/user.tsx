import React, { createContext, useState, ReactElement, useContext } from "react"

interface IUserContext {
  _id?: string
  name?: string
  phone?: string
  username?: string
  password?: string
  // status?: "active" | "inactive"
  role?: string
  // 权限信息
  roleInfo?: {
    name?: string
    routeAuth?: string[]
  }
}

/**
 * user/staff for system
 */
const UserContext = createContext(
  {} as {
    user?: IUserContext
    setUser?: React.Dispatch<React.SetStateAction<IUserContext>>
  }
)

export const UserContextProvider = (props: { children: ReactElement }) => {
  const [user, setUser] = useState<IUserContext>({})
  return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
}

export const useUserContext = () => {
  return useContext(UserContext)
}
