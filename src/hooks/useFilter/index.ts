import { useState } from "react"

export default function useFilter<T extends object>(initState: T) {
  const [filter, setFilter] = useState<T>(initState)
  return { filter, setFilter }
}
