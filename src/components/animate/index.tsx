import { ReactNode } from "react"
import { IAnimate } from "./utils"

interface IAnimateProps {
  type?: IAnimate
  children?: ReactNode
}
export default function Animate({ children, type = "fadeIn" }: IAnimateProps) {
  return (
    <>
      <div className={`animate__animated animate__${type}`}>{children}</div>
    </>
  )
}

export type { IAnimate }
