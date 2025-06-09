import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { DemoProvider, useDemo } from "@/contexts/demo-context"
import { DemoModeBanner } from "@/components/demo-mode-banner"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DemoProvider>
      <AppLayoutContent>{children}</AppLayoutContent>
    </DemoProvider>
  )
}

function AppLayoutContent({ children }: { children: React.ReactNode }) {
  const { isDemoMode } = useDemo()

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {isDemoMode && <DemoModeBanner />}
        {children}
      </div>
    </div>
  )
}
