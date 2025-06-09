import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { RippleOverview } from "@/components/ripples/ripple-overview"
import { RippleAnalytics } from "@/components/ripples/ripple-analytics"
import { RippleEngagement } from "@/components/ripples/ripple-engagement"
import { RippleResponses } from "@/components/ripples/ripple-responses"
import { ArrowLeft, Calendar, Edit, Radio, Share2 } from "lucide-react"

export default function RippleDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/campaigns">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Ripple Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-500/20 p-2 rounded-full">
                    <Radio className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Product Launch</h2>
                    <p className="text-slate-400 text-sm">Created 3 days ago</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-none">Active</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-none">High Priority</Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-slate-400">Schedule</p>
                      <p className="text-sm">Started May 10, 2023 • Ends May 24, 2023</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Share2 className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-slate-400">Audience</p>
                      <p className="text-sm">All Customers (247 contacts)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Reach</span>
                      <span>1,250 / 2,000</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "62.5%" }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Engagement</span>
                      <span>320 / 500</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "64%" }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Conversion</span>
                      <span>85 / 200</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "42.5%" }} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
              <CardDescription className="text-slate-400">Key performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold">62.5%</p>
                <p className="text-xs text-slate-400">Reach Rate</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold">25.6%</p>
                <p className="text-xs text-slate-400">Engagement Rate</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold">26.6%</p>
                <p className="text-xs text-slate-400">Conversion Rate</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs text-slate-400">Avg. Response Time (h)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="responses">Responses</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <RippleOverview rippleId={params.id} />
            </TabsContent>
            <TabsContent value="analytics">
              <RippleAnalytics rippleId={params.id} />
            </TabsContent>
            <TabsContent value="engagement">
              <RippleEngagement rippleId={params.id} />
            </TabsContent>
            <TabsContent value="responses">
              <RippleResponses rippleId={params.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
