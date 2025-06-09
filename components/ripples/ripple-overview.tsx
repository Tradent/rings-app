import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RippleVisualization } from "@/components/ripples/ripple-visualization"
import { Clock, Users } from "lucide-react"

export function RippleOverview({ rippleId }: { rippleId: string }) {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg">Ripple Content</CardTitle>
          <CardDescription className="text-slate-400">Message sent to your network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-700/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Introducing Our New Product Line</h3>
            <div className="prose prose-invert max-w-none">
              <p>
                We're excited to announce the launch of our new product line, designed to help you achieve more with
                less effort.
              </p>
              <p>
                Our team has been working tirelessly to create something that addresses the key challenges you've shared
                with us. The result is a suite of tools that streamline your workflow and boost productivity.
              </p>
              <p>Key features include:</p>
              <ul>
                <li>Intuitive interface that reduces learning curve</li>
                <li>Automated workflows that save you hours each week</li>
                <li>Advanced analytics to help you make data-driven decisions</li>
                <li>Seamless integration with your existing tools</li>
              </ul>
              <p>
                We're offering special early-adopter pricing for our valued network. Click below to learn more and
                schedule a demo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-slate-700 text-white">
        <CardHeader>
          <CardTitle className="text-lg">Ripple Visualization</CardTitle>
          <CardDescription className="text-slate-400">
            How your message is spreading through your network
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <RippleVisualization rippleId={rippleId} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Top Engagers</CardTitle>
              <Users className="h-5 w-5 text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-sm font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-xs text-slate-400">CEO, Acme Inc.</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-none">High Influence</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-sm font-medium">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-xs text-slate-400">CTO, TechCorp</p>
                  </div>
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 border-none">Medium Influence</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="text-sm font-medium">MC</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-xs text-slate-400">Business Development, Global Partners</p>
                  </div>
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 border-none">Medium Influence</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 text-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Timeline</CardTitle>
              <Clock className="h-5 w-5 text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative pl-6 pb-4 border-l border-slate-700">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-green-500"></div>
                <p className="font-medium">Ripple Created</p>
                <p className="text-xs text-slate-400">May 10, 2023 - 9:00 AM</p>
              </div>

              <div className="relative pl-6 pb-4 border-l border-slate-700">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                <p className="font-medium">First Wave Sent</p>
                <p className="text-xs text-slate-400">May 10, 2023 - 10:30 AM</p>
                <p className="text-xs text-slate-400 mt-1">Sent to 50 primary contacts</p>
              </div>

              <div className="relative pl-6 pb-4 border-l border-slate-700">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500"></div>
                <p className="font-medium">Second Wave Triggered</p>
                <p className="text-xs text-slate-400">May 12, 2023 - 2:15 PM</p>
                <p className="text-xs text-slate-400 mt-1">Expanded to 150 secondary connections</p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500"></div>
                <p className="font-medium">Third Wave Scheduled</p>
                <p className="text-xs text-slate-400">May 15, 2023 - 9:00 AM</p>
                <p className="text-xs text-slate-400 mt-1">Will expand to tertiary connections</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
