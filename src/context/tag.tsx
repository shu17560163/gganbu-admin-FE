import React, {
  createContext,
  useState,
  ReactElement,
  useContext,
} from "react";
import { IRoute } from "../router";

const TagContext = createContext(
  {} as {
    tags?: IRoute[];
    setTags?: React.Dispatch<React.SetStateAction<IRoute[]>>;
  }
);

export const TagContextProvider = (props: { children: ReactElement }) => {
  const [tags, setTags] = useState<IRoute[]>([]);
  return (
    <TagContext.Provider value={{ tags, setTags }}>
      {props.children}
    </TagContext.Provider>
  );
};

export const useTagContext = () => {
  return useContext(TagContext);
};
