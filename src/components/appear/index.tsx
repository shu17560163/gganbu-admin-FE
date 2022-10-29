import { motion, MotionProps } from "framer-motion"
import { ReactNode } from "react"
import { IPreset, presetMotionOptions } from "../presets"

import type { WhileInView, ViewPort, Exit } from "./type"

type ITrigger = "load" | "scroll"

interface IAppearProps {
  children?: ReactNode
  preset?: IPreset
  trigger?: ITrigger
  startFrom?: "top" | "middle" | "bottom"
  scrollAnimate?: "once" | "reset"
  className?: string
  key?: string
  motion?: MotionProps // highest prioprity(tentative)
}

/**
 * Appear only offer Preset motion, can not do custom motion
 */

export default function Appear({
  children,
  preset = "fadeIn",
  trigger = "load",
  scrollAnimate = "once",
  className = "",
}: IAppearProps) {
  const option = presetMotionOptions.find((i) => i.value == preset) || presetMotionOptions[0]

  let animate = option.motion.animate
  const initial = option.motion.initial
  const transition = option.motion.transition
  const viewport: ViewPort = { once: scrollAnimate == "once" }
  const whileInView: WhileInView = {}
  const exit: Exit = {}
  for (const key in initial as object) {
    exit[key] = initial[key]
  }

  if (trigger == "scroll") {
    for (const key in animate as object) {
      whileInView[key] = animate[key]
    }
    animate = {}
  }

  const presetProps: MotionProps = {
    initial,
    animate,
    whileInView,
    viewport,
    transition,
    exit,
  }
  return (
    <motion.div className={className} {...presetProps}>
      {children}
    </motion.div>
  )
}

export type { IPreset, ITrigger }
