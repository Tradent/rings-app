"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type DemoContextType = {
  isDemoMode: boolean
  enableDemoMode: () => void
  disableDemoMode: () => void
}

const DemoContext = createContext<DemoContextType | undefined>(undefined)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false)

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedDemoMode = localStorage.getItem("rings-demo-mode")
    if (storedDemoMode === "true") {
      setIsDemoMode(true)
    }
  }, [])

  const enableDemoMode = () => {
    setIsDemoMode(true)
    localStorage.setItem("rings-demo-mode", "true")
  }

  const disableDemoMode = () => {
    setIsDemoMode(false)
    localStorage.removeItem("rings-demo-mode")
  }

  return <DemoContext.Provider value={{ isDemoMode, enableDemoMode, disableDemoMode }}>{children}</DemoContext.Provider>
}

export function useDemo() {
  const context = useContext(DemoContext)
  if (context === undefined) {
    throw new Error("useDemo must be used within a DemoProvider")
  }
  return context
}
