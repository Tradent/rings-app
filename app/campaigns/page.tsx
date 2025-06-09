import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Radio, Calendar, Edit, Trash2 } from "lucide-react"
import { CreateRippleButton } from "@/components/create-ripple-button"

export default function CampaignsPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Campaign Management</h1>
        <CreateRippleButton />
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

        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Active Campaign 1 */}
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-red-500/20 p-2 rounded-full mr-3">
                      <Radio className="h-5 w-5 text-red-400" />
                    </div>
                    <CardTitle>Product Launch</CardTitle>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-slate-400 mt-2">
                  Promoting our new product to existing customers and their networks
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Started 3 days ago</span>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Active</div>
                  </div>

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
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-700">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            {/* Active Campaign 2 */}
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-red-500/20 p-2 rounded-full mr-3">
                      <Radio className="h-5 w-5 text-red-400" />
                    </div>
                    <CardTitle>Networking Event</CardTitle>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-slate-400 mt-2">
                  Promoting our upcoming industry networking event to professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Started 1 week ago</span>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">Active</div>
                  </div>

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
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-700">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                      <Calendar className="h-5 w-5 text-purple-400" />
                    </div>
                    <CardTitle>Q4 Marketing Push</CardTitle>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-slate-400 mt-2">
                  End of year marketing campaign for holiday season
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Starts in 2 weeks</span>
                    </div>
                    <div className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs">Scheduled</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Target Reach</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Target Engagement</span>
                      <span>1,200</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-700">
                  Edit Campaign
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="bg-slate-500/20 p-2 rounded-full mr-3">
                      <Radio className="h-5 w-5 text-slate-400" />
                    </div>
                    <CardTitle>Content Campaign</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-slate-400 mt-2">
                  Educational content series for industry professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Ended 2 weeks ago</span>
                    </div>
                    <div className="bg-slate-500/20 text-slate-400 px-2 py-0.5 rounded text-xs">Completed</div>
                  </div>

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
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-700">
                  View Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
