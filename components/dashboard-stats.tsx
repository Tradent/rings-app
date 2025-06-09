"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDemo } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"
import { useEffect, useState } from "react"

export function DashboardStats() {
  const { isDemoMode } = useDemo()
  const [stats, setStats] = useState({
    connections: 0,
    activeRipples: 0,
    influenceScore: 0,
    engagementRate: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        if (isDemoMode) {
          // Use demo data
          const demoUser = demoDataService.getUser()
          const demoRipples = demoDataService.getRipples()
          const demoContacts = demoDataService.getContacts()

          setStats({
            connections: demoContacts.length,
            activeRipples: demoRipples.filter((r) => r.status === "scheduled" || r.status === "sent").length,
            influenceScore: demoUser.influenceScore,
            engagementRate: 0.42, // Mock engagement rate
          })
        } else {
          // This would be a real API call in a production app
          // For now, we'll use the same mock data
          const demoUser = demoDataService.getUser()
          const demoRipples = demoDataService.getRipples()
          const demoContacts = demoDataService.getContacts()

          setStats({
            connections: demoContacts.length,
            activeRipples: demoRipples.filter((r) => r.status === "scheduled" || r.status === "sent").length,
            influenceScore: demoUser.influenceScore,
            engagementRate: 0.42, // Mock engagement rate
          })
        }
      } catch (error) {
        console.error("Error fetching stats:", error)
      }
    }

    fetchStats()
  }, [isDemoMode])

  return (
    <div className="bg-slate-800/50 rounded-xl p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Network Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-slate-700/50 border-slate-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.connections}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-700/50 border-slate-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Active Ripples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeRipples}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-700/50 border-slate-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Influence Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.influenceScore}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-700/50 border-slate-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Engagement Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(stats.engagementRate * 100).toFixed(1)}%</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
