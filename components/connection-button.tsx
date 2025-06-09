"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, UserPlus } from "lucide-react"

interface ConnectionButtonProps {
  userId: string
  initialStatus: "none" | "pending" | "connected"
}

export function ConnectionButton({ userId, initialStatus = "none" }: ConnectionButtonProps) {
  const [status, setStatus] = useState(initialStatus)
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("pending")
    } catch (error) {
      console.error("Error sending connection request:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMessage = async () => {
    // In a real app, this would open a messaging interface
    console.log("Open message interface for user:", userId)
  }

  if (status === "connected") {
    return (
      <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700" onClick={handleMessage}>
        <MessageSquare className="h-4 w-4 mr-2" />
        Message
      </Button>
    )
  }

  if (status === "pending") {
    return (
      <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700" disabled>
        <span className="text-gold-400 mr-2">•</span>
        Pending
      </Button>
    )
  }

  return (
    <Button
      className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700"
      onClick={handleConnect}
      disabled={isLoading}
    >
      <UserPlus className="h-4 w-4 mr-2" />
      {isLoading ? "Sending..." : "Connect"}
    </Button>
  )
}
