import useLoading from "../useLoading"
import useItem from "../useItem"

interface IUsePageDetailProps<T> {
  initItem?: T
}

export default function usePageDetail<T extends object>({ initItem }: IUsePageDetailProps<T>) {
  const { loading, setLoading } = useLoading(false)
  const { item, setItem } = useItem<T>(initItem)

  return {
    loading,
    setLoading,
    item,
    setItem,
  }
}
