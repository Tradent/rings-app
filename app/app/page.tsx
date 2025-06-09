import { NetworkVisualizer } from "@/components/network-visualizer"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentRipples } from "@/components/recent-ripples"
import { CreateRippleButton } from "@/components/create-ripple-button"
import { NetworkDataStreams } from "@/components/network-data-streams"

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Rings Dashboard</h1>
        <CreateRippleButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Network</h2>
          <div className="h-[500px] w-full">
            <NetworkVisualizer />
          </div>
          <div className="mt-4">
            <NetworkDataStreams />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <DashboardStats />
          <RecentRipples />
        </div>
      </div>
    </main>
  )
}
