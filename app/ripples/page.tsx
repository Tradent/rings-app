import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreateRippleButton } from "@/components/create-ripple-button"
import { Filter, Search, SlidersHorizontal, Calendar, Radio, BarChart3, Users } from "lucide-react"
import Link from "next/link"

export default function RipplesPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Ripples</h1>
        <CreateRippleButton />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input placeholder="Search ripples..." className="pl-9 bg-slate-800/50 border-slate-700 text-white" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 bg-amber-500/90 text-slate-900 hover:bg-amber-500 border-amber-600">
            <TabsTrigger
              value="active"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="scheduled"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              Scheduled
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Active Ripple 1 */}
              <Link href="/ripples/1" className="block group">
                <Card className="bg-slate-800/50 border-slate-700 text-white h-full transition-all group-hover:border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-red-500/20 p-2 rounded-full">
                          <Radio className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">Product Launch</h2>
                          <p className="text-slate-400 text-sm">Started 3 days ago</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-none">
                          Active
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-none">
                          High Priority
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4 flex-1">
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
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-4 w-4 text-blue-400" />
                          </div>
                          <p className="text-xs text-slate-400">Audience</p>
                          <p className="text-sm font-medium">247</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <BarChart3 className="h-4 w-4 text-green-400" />
                          </div>
                          <p className="text-xs text-slate-400">Engagement</p>
                          <p className="text-sm font-medium">25.6%</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="h-4 w-4 text-purple-400" />
                          </div>
                          <p className="text-xs text-slate-400">Duration</p>
                          <p className="text-sm font-medium">14 days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Active Ripple 2 */}
              <Link href="/ripples/2" className="block group">
                <Card className="bg-slate-800/50 border-slate-700 text-white h-full transition-all group-hover:border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-red-500/20 p-2 rounded-full">
                          <Radio className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">Networking Event</h2>
                          <p className="text-slate-400 text-sm">Started 1 week ago</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 border-none">
                          Active
                        </Badge>
                        <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border-none">
                          Medium Priority
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4 flex-1">
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
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-4 w-4 text-blue-400" />
                          </div>
                          <p className="text-xs text-slate-400">Audience</p>
                          <p className="text-sm font-medium">185</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <BarChart3 className="h-4 w-4 text-green-400" />
                          </div>
                          <p className="text-xs text-slate-400">Engagement</p>
                          <p className="text-sm font-medium">24.0%</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="h-4 w-4 text-purple-400" />
                          </div>
                          <p className="text-xs text-slate-400">Duration</p>
                          <p className="text-sm font-medium">21 days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="scheduled">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/ripples/3" className="block group">
                <Card className="bg-slate-800/50 border-slate-700 text-white h-full transition-all group-hover:border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-500/20 p-2 rounded-full">
                          <Calendar className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">Q4 Marketing Push</h2>
                          <p className="text-slate-400 text-sm">Starts in 2 weeks</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-none">
                          Scheduled
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-none">
                          High Priority
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4 flex-1">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Target Audience</span>
                            <span>All Customers</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Target Reach</span>
                            <span>5,000 contacts</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-4 w-4 text-blue-400" />
                          </div>
                          <p className="text-xs text-slate-400">Audience</p>
                          <p className="text-sm font-medium">500+</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <BarChart3 className="h-4 w-4 text-green-400" />
                          </div>
                          <p className="text-xs text-slate-400">Target</p>
                          <p className="text-sm font-medium">25%</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="h-4 w-4 text-purple-400" />
                          </div>
                          <p className="text-xs text-slate-400">Duration</p>
                          <p className="text-sm font-medium">30 days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/ripples/4" className="block group">
                <Card className="bg-slate-800/50 border-slate-700 text-white h-full transition-all group-hover:border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-slate-500/20 p-2 rounded-full">
                          <Radio className="h-5 w-5 text-slate-400" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold">Content Campaign</h2>
                          <p className="text-slate-400 text-sm">Ended 2 weeks ago</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-slate-500/20 text-slate-400 hover:bg-slate-500/30 border-none">
                          Completed
                        </Badge>
                      </div>

                      <div className="space-y-3 mb-4 flex-1">
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
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Users className="h-4 w-4 text-blue-400" />
                          </div>
                          <p className="text-xs text-slate-400">Audience</p>
                          <p className="text-sm font-medium">350</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <BarChart3 className="h-4 w-4 text-green-400" />
                          </div>
                          <p className="text-xs text-slate-400">Engagement</p>
                          <p className="text-sm font-medium">27.8%</p>
                        </div>
                        <div className="bg-slate-700/50 p-2 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="h-4 w-4 text-purple-400" />
                          </div>
                          <p className="text-xs text-slate-400">Duration</p>
                          <p className="text-sm font-medium">14 days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
