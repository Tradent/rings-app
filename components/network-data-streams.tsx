"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Radio, Activity, Network } from "lucide-react"
import { useState, useEffect } from "react"

// Sample data for sparklines
const generateSparklineData = (points: number, trend: "up" | "down" | "volatile") => {
  const data = []
  let value = 50 + Math.random() * 20

  for (let i = 0; i < points; i++) {
    if (trend === "up") {
      value += Math.random() * 5 - 1 // Mostly up
    } else if (trend === "down") {
      value -= Math.random() * 5 - 1 // Mostly down
    } else {
      value += Math.random() * 10 - 5 // Volatile
    }

    // Keep within bounds
    value = Math.max(10, Math.min(90, value))
    data.push(value)
  }

  return data
}

interface SparklineProps {
  data: number[]
  color: string
  height: number
}

const Sparkline = ({ data, color, height }: SparklineProps) => {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  // Normalize data to fit in the available height
  const normalizedData = data.map((value) => height - ((value - min) / range) * height)

  // Create path
  const points = normalizedData.map((value, index) => `${(index / (data.length - 1)) * 100}% ${value}`).join(", ")

  return (
    <div className="w-full h-full">
      <svg width="100%" height={height} preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function NetworkDataStreams() {
  const [networkGrowth, setNetworkGrowth] = useState<number[]>([])
  const [connectionActivity, setConnectionActivity] = useState<number[]>([])
  const [influenceTrend, setInfluenceTrend] = useState<number[]>([])
  const [rippleEngagement, setRippleEngagement] = useState<number[]>([])

  useEffect(() => {
    // Generate sample data
    setNetworkGrowth(generateSparklineData(20, "up"))
    setConnectionActivity(generateSparklineData(20, "volatile"))
    setInfluenceTrend(generateSparklineData(20, "up"))
    setRippleEngagement(generateSparklineData(20, "volatile"))
  }, [])

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              <h3 className="text-sm font-medium">Network Growth</h3>
            </div>
            <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-none">+12%</Badge>
          </div>
          <div className="h-10 mb-2">
            {networkGrowth.length > 0 && <Sparkline data={networkGrowth} color="#3B82F6" height={40} />}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">247</span>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Total connections in your network</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-purple-400" />
              <h3 className="text-sm font-medium">Connection Activity</h3>
            </div>
            <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-none">Active</Badge>
          </div>
          <div className="h-10 mb-2">
            {connectionActivity.length > 0 && <Sparkline data={connectionActivity} color="#A855F7" height={40} />}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">32</span>
            <TrendingUp className="h-5 w-5 text-purple-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">New connections this month</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Network className="h-4 w-4 text-gold-400" />
              <h3 className="text-sm font-medium">Influence Score</h3>
            </div>
            <Badge className="bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border-none">+5</Badge>
          </div>
          <div className="h-10 mb-2">
            {influenceTrend.length > 0 && <Sparkline data={influenceTrend} color="#FFAB00" height={40} />}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">85</span>
            <TrendingUp className="h-5 w-5 text-gold-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Your current network influence</p>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-red-400" />
              <h3 className="text-sm font-medium">Ripple Engagement</h3>
            </div>
            <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border-none">25.6%</Badge>
          </div>
          <div className="h-10 mb-2">
            {rippleEngagement.length > 0 && <Sparkline data={rippleEngagement} color="#F43F5E" height={40} />}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">530</span>
            <TrendingUp className="h-5 w-5 text-red-400" />
          </div>
          <p className="text-xs text-slate-400 mt-1">Total engagements across ripples</p>
        </CardContent>
      </Card>
    </div>
  )
}
