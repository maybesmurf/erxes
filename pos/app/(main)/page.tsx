"use client"

import dynamic from "next/dynamic"
import RequirePassword from "@/modules/checkout/components/cart/RequirePassword"
import { modeAtom } from "@/store"
import { useAtomValue } from "jotai"

const Market = dynamic(() => import("./market"))
const Main = dynamic(() => import("./main"))
const Kiosk = dynamic(() => import("./kiosk"))
const Restaurant = dynamic(() => import("./restaurant"))
const Mobile = dynamic(() => import("./mobile"))

export default function IndexPage() {
  const mode = useAtomValue(modeAtom)
  return (
    <>
      {mode === "market" && <Market />}
      {["main", "coffee-shop"].includes(mode) && <Main />}
      {mode === "restaurant" && <Restaurant />}
      {mode === "kiosk" && <Kiosk />}
      {mode === "mobile" && <Mobile />}
      <RequirePassword />
    </>
  )
}
