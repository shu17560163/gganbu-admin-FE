import { useRef, useEffect, useReducer, ReactNode } from "react"
import { useLocation } from "react-router-dom"
import Appear, { IPreset } from "../appear"

/**
 * 利用ref map 来缓存组件
 * key: pathname
 *
 * 思路，如果map里没有，这个组件，那么存进去，如果有，那么直接返回map存好的组件
 * // 需要明确哪些keys 是需要保存的
 */

export default function KeepAlive(props: { animate?: IPreset; keys: string[]; children: ReactNode }) {
  const { keys, children, animate } = props
  const { pathname } = useLocation()
  const forceUpdate = useReducer((x) => x + 1, 0)[1]
  const componentMapRef = useRef(new Map())
  const componentMap = componentMapRef.current

  useEffect(() => {
    // 这里可以优化一下啊，不断的去删除已经不用的组件
    for (const key of componentMap.keys()) {
      if (!keys.includes(key)) {
        componentMap.delete(key)
      }
    }

    if (keys.includes(pathname)) {
      if (!componentMap.has(pathname)) {
        componentMap.set(pathname, children)
      }
    }
    forceUpdate() // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  }, [pathname, keys, componentMap, children, forceUpdate])

  /**
   * 要去找 map当中是不是有这个activekey
   * 如果有，直接渲染，如果没有，重新渲染
   */

  return (
    <>
      {[...componentMap.entries()].map(([key, component]) => {
        return (
          <Appear key={key} preset={animate}>
            {(key == pathname && <>{component}</>) || <div className=" hidden ">{component}</div>}
          </Appear>
        )
      })}
      {(!componentMap.has(pathname) && (
        <Appear key="notKeepAlive" preset={animate}>
          {children}
        </Appear>
      )) || <></>}
    </>
  )
}

//  memo(KeepAlive)
