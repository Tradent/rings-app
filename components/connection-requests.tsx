"use client"

import { useState } from "react"
import {
  type ConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
} from "@/app/actions/connection-actions"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ConnectionRequestsProps {
  requests: ConnectionRequest[]
}

export function ConnectionRequests({ requests }: ConnectionRequestsProps) {
  const { toast } = useToast()
  const [pendingRequests, setPendingRequests] = useState<ConnectionRequest[]>(requests)
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set())

  if (pendingRequests.length === 0) {
    return <div className="text-center py-2 text-sm text-slate-400">No pending connection requests</div>
  }

  const handleAccept = async (requestId: string) => {
    setProcessingIds((prev) => new Set(prev).add(requestId))

    try {
      const result = await acceptConnectionRequest(requestId)

      if (result.success) {
        // Remove the request from the list
        setPendingRequests((prev) => prev.filter((req) => req.id !== requestId))

        toast({
          title: "Connection accepted",
          description: "You are now connected with this user",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to accept connection request",
        variant: "destructive",
      })
    } finally {
      setProcessingIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(requestId)
        return newSet
      })
    }
  }

  const handleReject = async (requestId: string) => {
    setProcessingIds((prev) => new Set(prev).add(requestId))

    try {
      const result = await rejectConnectionRequest(requestId)

      if (result.success) {
        // Remove the request from the list
        setPendingRequests((prev) => prev.filter((req) => req.id !== requestId))

        toast({
          title: "Request rejected",
          description: "Connection request has been rejected",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reject connection request",
        variant: "destructive",
      })
    } finally {
      setProcessingIds((prev) => {
        const newSet = new Set(prev)
        newSet.delete(requestId)
        return newSet
      })
    }
  }

  return (
    <div className="space-y-2 max-h-[300px] overflow-y-auto">
      {pendingRequests.map((request) => (
        <div
          key={request.id}
          className="flex items-center justify-between p-2 bg-slate-700/30 rounded-md border-l-2 border-l-amber-500/50"
        >
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={request.fromUserImage || "/placeholder.svg"} alt={request.fromUserName} />
              <AvatarFallback className="bg-slate-600 text-white text-xs">
                {request.fromUserName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">{request.fromUserName}</p>
              <p className="text-xs text-slate-400">Sent {new Date(request.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 bg-gold-500/20 hover:bg-gold-500/40 text-gold-400"
              onClick={() => handleAccept(request.id)}
              disabled={processingIds.has(request.id)}
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 bg-slate-700/50 hover:bg-slate-700/80"
              onClick={() => handleReject(request.id)}
              disabled={processingIds.has(request.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
