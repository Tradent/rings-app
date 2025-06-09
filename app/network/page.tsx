import { NetworkVisualizer } from "@/components/network-visualizer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Users, UserPlus, Network } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ConnectionButton } from "@/components/connection-button"

export default function NetworkPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Network</h1>
        <Button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add Connection
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input placeholder="Search network..." className="pl-9 bg-slate-800/50 border-slate-700 text-white" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <Tabs defaultValue="visualization" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="visualization" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Network Visualization</CardTitle>
                  <Network className="h-5 w-5 text-gold-400" />
                </div>
                <CardDescription className="text-slate-400">
                  Interactive visualization of your network and connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[600px] w-full">
                  <NetworkVisualizer />
                </div>
                {/* Add this after the network visualizer */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">People You May Know</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="bg-slate-800/50 border-slate-700 text-white">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={i % 2 === 0 ? "/woman-profile.png" : "/man-profile.png"} />
                              <AvatarFallback className="bg-slate-600 text-white">
                                {i % 2 === 0 ? "SJ" : "MC"}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium">{i % 2 === 0 ? "Sarah Johnson" : "Michael Chen"}</p>
                              <p className="text-xs text-slate-400">
                                {i % 2 === 0 ? "CTO, TechCorp" : "Business Development, Global Partners"}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                {Math.floor(Math.random() * 10) + 1} mutual connections
                              </p>
                            </div>
                            <ConnectionButton
                              userId={i % 2 === 0 ? "sarah-johnson" : "michael-chen"}
                              initialStatus="none"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
                      View More Suggestions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connections" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Your Connections</CardTitle>
                  <Users className="h-5 w-5 text-gold-400" />
                </div>
                <CardDescription className="text-slate-400">People in your direct network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Connection 1 */}
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                        <span className="text-sm font-medium">JS</span>
                      </div>
                      <div>
                        <h3 className="font-medium">John Smith</h3>
                        <p className="text-xs text-slate-400">CEO, Acme Inc.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-slate-300">
                        <span className="font-medium">85</span> Influence
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700 text-slate-300 hover:bg-slate-700"
                      >
                        View
                      </Button>
                    </div>
                  </div>

                  {/* Connection 2 */}
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                        <span className="text-sm font-medium">SJ</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Sarah Johnson</h3>
                        <p className="text-xs text-slate-400">CTO, TechCorp</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-slate-300">
                        <span className="font-medium">72</span> Influence
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700 text-slate-300 hover:bg-slate-700"
                      >
                        View
                      </Button>
                    </div>
                  </div>

                  {/* Connection 3 */}
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                        <span className="text-sm font-medium">MC</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Michael Chen</h3>
                        <p className="text-xs text-slate-400">Business Development, Global Partners</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-slate-300">
                        <span className="font-medium">78</span> Influence
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700 text-slate-300 hover:bg-slate-700"
                      >
                        View
                      </Button>
                    </div>
                  </div>

                  {/* Connection 4 */}
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                        <span className="text-sm font-medium">ER</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Emily Rodriguez</h3>
                        <p className="text-xs text-slate-400">Founder, StartupX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-slate-300">
                        <span className="font-medium">65</span> Influence
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700 text-slate-300 hover:bg-slate-700"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Network Insights</CardTitle>
                <CardDescription className="text-slate-400">Analysis and metrics about your network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">247</h3>
                    <p className="text-sm text-slate-400">Total Connections</p>
                    <p className="text-xs text-green-400 mt-1">+12% from last month</p>
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">85</h3>
                    <p className="text-sm text-slate-400">Average Influence</p>
                    <p className="text-xs text-green-400 mt-1">+5 points this week</p>
                  </div>

                  <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">3</h3>
                    <p className="text-sm text-slate-400">Degrees of Separation</p>
                    <p className="text-xs text-slate-400 mt-1">Industry average: 4.2</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-4">Network Growth</h3>
                  <div className="h-60 flex items-center justify-center bg-slate-700/30 rounded-lg">
                    <div className="text-center text-slate-500">
                      <p>Chart visualization would appear here</p>
                      <p className="text-xs mt-2">Showing network growth over time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
