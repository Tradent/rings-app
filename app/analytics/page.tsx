import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, Target, Radio, BarChart3, PieChart, LineChart } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analytics & Insights</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,575</div>
            <p className="text-xs text-slate-400">+18% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engagement</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,210</div>
            <p className="text-xs text-slate-400">+22% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Target className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">26.4%</div>
            <p className="text-xs text-slate-400">+3.2% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Ripples</CardTitle>
            <Radio className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-slate-400">+1 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Engagement Over Time</CardTitle>
                  <LineChart className="h-5 w-5 text-blue-400" />
                </div>
                <CardDescription className="text-slate-400">
                  Monthly engagement metrics for all campaigns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Chart visualization would appear here</p>
                    <p className="text-xs mt-2">Showing engagement metrics over the last 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Campaign Performance</CardTitle>
                  <PieChart className="h-5 w-5 text-purple-400" />
                </div>
                <CardDescription className="text-slate-400">Comparison of active campaign performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <PieChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Chart visualization would appear here</p>
                    <p className="text-xs mt-2">Comparing engagement rates across active campaigns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Network Growth</CardTitle>
                <LineChart className="h-5 w-5 text-green-400" />
              </div>
              <CardDescription className="text-slate-400">Growth of your network connections over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <LineChart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Chart visualization would appear here</p>
                </div>
              </div>
              <p className="text-xs mt-2">Showing network growth over the last 12 months</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Campaign Analytics</CardTitle>
              <CardDescription className="text-slate-400">
                Detailed performance metrics for all campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Campaign 1 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-red-500/20 p-2 rounded-full mr-3">
                        <Radio className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">Product Launch</h3>
                        <p className="text-xs text-slate-400">Started 3 days ago</p>
                      </div>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Active</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                </div>

                {/* Campaign 2 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-red-500/20 p-2 rounded-full mr-3">
                        <Radio className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">Networking Event</h3>
                        <p className="text-xs text-slate-400">Started 1 week ago</p>
                      </div>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Active</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Reach</span>
                        <span>875 / 1,500</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "58.3%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Engagement</span>
                        <span>210 / 400</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "52.5%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Conversion</span>
                        <span>45 / 150</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "30%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campaign 3 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-slate-500/20 p-2 rounded-full mr-3">
                        <Radio className="h-5 w-5 text-slate-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">Content Campaign</h3>
                        <p className="text-xs text-slate-400">Ended 2 weeks ago</p>
                      </div>
                    </div>
                    <div className="bg-slate-500/20 text-slate-400 px-2 py-0.5 rounded text-xs">Completed</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Final Reach</span>
                        <span>2,450 / 2,000</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Final Engagement</span>
                        <span>680 / 500</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Final Conversion</span>
                        <span>215 / 200</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Network Insights</CardTitle>
              <CardDescription className="text-slate-400">
                Analysis of your network connections and influence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-400" />
                      Connection Demographics
                    </h3>
                    <div className="h-60 flex items-center justify-center">
                      <div className="text-center text-slate-500">
                        <PieChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Chart visualization would appear here</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                      Influence Distribution
                    </h3>
                    <div className="h-60 flex items-center justify-center">
                      <div className="text-center text-slate-500">
                        <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Chart visualization would appear here</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium flex items-center">
                    <Radio className="h-5 w-5 mr-2 text-red-400" />
                    Ripple Effect Analysis
                  </h3>
                  <div className="h-60 flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <LineChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Chart visualization would appear here</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
