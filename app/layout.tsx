import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { DemoProvider } from "@/contexts/demo-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rings - Network Explorer & CRM",
  description: "Access the network around you by sending out ripples and navigating the rings of influence",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DemoProvider>{children}</DemoProvider>
      </body>
    </html>
  )
}
