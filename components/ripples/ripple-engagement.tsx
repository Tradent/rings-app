import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Mail, MessageSquare, ThumbsUp, User } from "lucide-react"

export function RippleEngagement({ rippleId }: { rippleId: string }) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="views">Views</TabsTrigger>
          <TabsTrigger value="clicks">Clicks</TabsTrigger>
          <TabsTrigger value="replies">Replies</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="pt-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">All Engagement</CardTitle>
              <CardDescription className="text-slate-400">Complete engagement history for this ripple</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">John Smith</h3>
                          <Badge className="bg-blue-500/20 text-blue-400 border-none">Opened</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">May 10, 2023 - 11:23 AM</p>
                        <p className="text-sm text-slate-300 mt-2">Opened the email and viewed it for 45 seconds</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-2 rounded-full">
                        <ThumbsUp className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Sarah Johnson</h3>
                          <Badge className="bg-green-500/20 text-green-400 border-none">Clicked</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">May 10, 2023 - 2:45 PM</p>
                        <p className="text-sm text-slate-300 mt-2">
                          Clicked on "Learn More" button and visited the product page
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500/20 p-2 rounded-full">
                        <MessageSquare className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Michael Chen</h3>
                          <Badge className="bg-purple-500/20 text-purple-400 border-none">Replied</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">May 11, 2023 - 9:15 AM</p>
                        <p className="text-sm text-slate-300 mt-2">
                          "This looks great! I'd like to schedule a demo for my team next week."
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <Calendar className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Emily Rodriguez</h3>
                          <Badge className="bg-blue-500/20 text-blue-400 border-none">Scheduled</Badge>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">May 12, 2023 - 3:30 PM</p>
                        <p className="text-sm text-slate-300 mt-2">
                          Scheduled a product demo for May 18, 2023 at 10:00 AM
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="views" className="pt-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Views</CardTitle>
              <CardDescription className="text-slate-400">People who viewed your ripple</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* View engagement items would go here */}
                <p className="text-center text-slate-500 py-4">View engagement details would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clicks" className="pt-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Clicks</CardTitle>
              <CardDescription className="text-slate-400">People who clicked links in your ripple</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Click engagement items would go here */}
                <p className="text-center text-slate-500 py-4">Click engagement details would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="replies" className="pt-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Replies</CardTitle>
              <CardDescription className="text-slate-400">People who replied to your ripple</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Reply engagement items would go here */}
                <p className="text-center text-slate-500 py-4">Reply engagement details would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
