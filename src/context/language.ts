import { createContext } from "react";

export interface ILangContext {
  isEn?: boolean;
}
const LangContext = createContext({ isEn: false }); // initial value

export { LangContext };
