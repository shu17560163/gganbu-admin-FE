import React, { createContext, useState, ReactElement, useContext } from "react"
import { ThemeConfig, ITheme } from "../config/theme"

const ThemeContext = createContext(
  {} as {
    theme: ITheme
    setTheme?: React.Dispatch<React.SetStateAction<ITheme>>
  }
)

export const ThemeContextProvider = (props: { children: ReactElement }) => {
  const [theme, setTheme] = useState<ITheme>(ThemeConfig)
  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
