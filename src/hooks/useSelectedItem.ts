import { useState } from "react";

export interface IUseSelectedItemRes<T> {
  selectedItem: T;
  setSelectedItem: React.Dispatch<React.SetStateAction<T>>;
}

export default function useSelectedItem<T>(
  initState: T
): IUseSelectedItemRes<T> {
  const [selectedItem, setSelectedItem] = useState<T>(initState);
  return { selectedItem, setSelectedItem };
}
