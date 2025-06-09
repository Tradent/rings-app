"use client"

import { useDemo } from "@/contexts/demo-context"
import { useRouter } from "next/navigation"

export function DemoModeBanner() {
  const { disableDemoMode } = useDemo()
  const router = useRouter()

  const handleSignUp = () => {
    disableDemoMode()
    router.push("/signup")
  }

  return null
}
