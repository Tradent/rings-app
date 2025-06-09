"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useDemo } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"
import { useEffect, useState } from "react"

export function RecentRipples() {
  const { isDemoMode } = useDemo()
  const [ripples, setRipples] = useState([])

  useEffect(() => {
    const fetchRipples = async () => {
      try {
        if (isDemoMode) {
          // Use demo data
          setRipples(demoDataService.getRipples())
        } else {
          // This would be a real API call in a production app
          // For now, we'll use the same mock data
          setRipples(demoDataService.getRipples())
        }
      } catch (error) {
        console.error("Error fetching ripples:", error)
      }
    }

    fetchRipples()
  }, [isDemoMode])

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
      case "sent":
        return "bg-green-500/20 text-green-400 hover:bg-green-500/30"
      case "draft":
        return "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30"
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>Recent Ripples</CardTitle>
          <Link href="/app/ripples">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="flex justify-between items-start pb-3 border-b border-slate-700 last:border-0 last:pb-0"
            >
              <div>
                <Link href={`/app/ripples/${ripple.id}`} className="font-medium hover:text-gold-400 transition-colors">
                  {ripple.title}
                </Link>
                <div className="text-sm text-slate-400 mt-1">
                  {ripple.status === "scheduled"
                    ? `Scheduled for ${formatDate(ripple.scheduledFor)}`
                    : `Sent on ${formatDate(ripple.scheduledFor)}`}
                </div>
              </div>
              <Badge className={`${getStatusColor(ripple.status)} border-none`}>
                {ripple.status.charAt(0).toUpperCase() + ripple.status.slice(1)}
              </Badge>
            </div>
          ))}

          {ripples.length === 0 && (
            <div className="text-center py-6 text-slate-400">
              No ripples yet. Create your first ripple to get started.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
