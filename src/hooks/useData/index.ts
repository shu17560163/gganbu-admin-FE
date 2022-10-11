import { useState } from "react";

export default function useData<T extends object[]>(initState?: T) {
  const [data, setData] = useState<T>(initState);
  return { data, setData };
}
