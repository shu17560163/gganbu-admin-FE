import { useState } from "react";

export interface IUseItemRes<T> {
  item: T;
  setItem: React.Dispatch<React.SetStateAction<T>>;
}
export default function useItem<T>(initState: T): IUseItemRes<T> {
  const [item, setItem] = useState<T>(initState);
  return { item, setItem };
}
