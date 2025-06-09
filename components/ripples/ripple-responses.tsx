import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send, ThumbsUp, User } from "lucide-react"

export function RippleResponses({ rippleId }: { rippleId: string }) {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Responses</CardTitle>
              <CardDescription className="text-slate-400">Direct replies to your ripple</CardDescription>
            </div>
            <Badge className="bg-green-500/20 text-green-400 border-none">3 New</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                  <span className="text-sm font-medium">MC</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Michael Chen</h3>
                    <p className="text-xs text-slate-400">May 11, 2023 - 9:15 AM</p>
                  </div>
                  <p className="text-sm text-slate-300 mt-2">
                    This looks great! I'd like to schedule a demo for my team next week. We're particularly interested
                    in the automated workflows feature you mentioned. Is there a specific time that works best for your
                    team?
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-slate-700 text-slate-300 hover:bg-slate-700"
                    >
                      <User className="h-4 w-4 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                  <span className="text-sm font-medium">SJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-xs text-slate-400">May 11, 2023 - 11:30 AM</p>
                  </div>
                  <p className="text-sm text-slate-300 mt-2">
                    I've been looking for a solution like this for months! The analytics features look particularly
                    promising. Quick question - does it integrate with our existing CRM system? We're currently using
                    Salesforce.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-slate-700 text-slate-300 hover:bg-slate-700"
                    >
                      <User className="h-4 w-4 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center">
                  <span className="text-sm font-medium">JS</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">John Smith</h3>
                    <p className="text-xs text-slate-400">May 12, 2023 - 2:45 PM</p>
                  </div>
                  <p className="text-sm text-slate-300 mt-2">
                    I'm interested in the enterprise plan. Our team has been growing rapidly, and we need a solution
                    that can scale with us. Could you send over some more details about pricing and implementation
                    timeline?
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-slate-400">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-slate-700 text-slate-300 hover:bg-slate-700"
                    >
                      <User className="h-4 w-4 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg">Send a Message</CardTitle>
          <CardDescription className="text-slate-400">Reply to all responses at once</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Write your message here..."
              className="min-h-[100px] bg-slate-700/50 border-slate-600 text-white"
            />
            <div className="flex justify-end">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Send className="mr-2 h-4 w-4" />
                Send to All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
