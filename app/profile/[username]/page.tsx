import { Calendar } from "@/components/ui/calendar"
import { ProfileHeader } from "@/components/profile/profile-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ConnectionButton } from "@/components/connection-button"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Mail, Radio, Share2, Star, Users } from "lucide-react"
import { getConnectionStatus } from "@/app/actions/connection-actions"

// This would come from your database in a real app
const getUserProfile = (username: string) => {
  // Sample data
  return {
    username,
    name: "Alexandra Morgan",
    image: "/woman-profile.png",
    coverImage: "/abstract-network-banner.png",
    bio: "Network strategist and community builder with 8+ years of experience connecting professionals across industries. Passionate about creating meaningful relationships that drive innovation and growth.",
    company: "Nexus Innovations",
    position: "Head of Strategic Partnerships",
    location: "San Francisco, CA",
    website: "https://alexmorgan.com",
    email: "alex@nexusinnovations.com",
    joinDate: "2021-05-15",
    influenceScore: 92,
    connections: 347,
    mutualConnections: 24,
    isConnected: false,
    isPending: false,
    skills: [
      "Strategic Partnerships",
      "Network Development",
      "Community Building",
      "Business Development",
      "Public Speaking",
    ],
    recentRipples: [
      {
        id: "1",
        title: "Tech Conference Networking",
        date: "2023-05-10",
        reach: 1250,
        engagement: 320,
        active: true,
      },
      {
        id: "2",
        title: "Startup Mentorship Program",
        date: "2023-04-22",
        reach: 875,
        engagement: 210,
        active: false,
      },
    ],
    testimonials: [
      {
        id: "1",
        name: "John Smith",
        position: "CEO, Acme Inc.",
        image: "/man-profile.png",
        text: "Alexandra has been an incredible connection. Her network insights helped us expand our business into new markets.",
        date: "2023-04-15",
      },
      {
        id: "2",
        name: "Sarah Johnson",
        position: "CTO, TechCorp",
        image: "/woman-profile.png",
        text: "Working with Alex has been transformative for our team. Her ability to connect the right people at the right time is unmatched.",
        date: "2023-03-22",
      },
    ],
    activity: [
      {
        id: "1",
        type: "connection",
        description: "Connected with Sarah Johnson",
        date: "2023-05-12",
      },
      {
        id: "2",
        type: "ripple",
        description: "Started a new ripple: Tech Conference Networking",
        date: "2023-05-10",
      },
      {
        id: "3",
        type: "event",
        description: "Attended Startup Summit 2023",
        date: "2023-05-05",
      },
      {
        id: "4",
        type: "milestone",
        description: "Reached 300+ connections",
        date: "2023-04-28",
      },
    ],
  }
}

export default async function ProfilePage({ params }: { params: { username: string } }) {
  const profile = getUserProfile(params.username)
  const connectionStatus = await getConnectionStatus(params.username)

  // In a real app, you would get the current user's username from authentication
  const currentUsername = "alexmorgan"
  const isOwnProfile = params.username === currentUsername

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <ProfileHeader profile={profile} isOwnProfile={isOwnProfile} />

      {/* Profile Content */}
      <div className="container max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{profile.bio}</p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-slate-400" />
                    <a
                      href={profile.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:underline flex items-center"
                    >
                      {profile.website.replace(/^https?:\/\//, "")}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <a href={`mailto:${profile.email}`} className="text-gold-400 hover:underline">
                      {profile.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill: string) => (
                    <Badge key={skill} className="bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border-none">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Testimonials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.testimonials.map((testimonial: any) => (
                  <div key={testimonial.id} className="p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-slate-600 text-white text-xs">
                          {testimonial.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-xs text-slate-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">{testimonial.text}</p>
                    <p className="text-xs text-slate-500 mt-2">{new Date(testimonial.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Connection actions for other users' profiles */}
            {!isOwnProfile && (
              <div className="flex gap-2 mb-4">
                <ConnectionButton userId={params.username} initialStatus={connectionStatus} />
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            )}

            <Tabs defaultValue="ripples" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
                <TabsTrigger value="ripples">Ripples</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="connections">Connections</TabsTrigger>
              </TabsList>

              <TabsContent value="ripples" className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 text-white">
                  <CardHeader>
                    <CardTitle>Recent Ripples</CardTitle>
                    <CardDescription className="text-slate-400">
                      Campaigns and ripples created by {profile.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile.recentRipples.map((ripple: any) => (
                      <div
                        key={ripple.id}
                        className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700/70 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium flex items-center">
                              <Radio className="h-4 w-4 text-gold-400 mr-2" />
                              {ripple.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              {ripple.active
                                ? `Started ${new Date(ripple.date).toLocaleDateString()}`
                                : `Ended ${new Date(ripple.date).toLocaleDateString()}`}
                            </p>
                          </div>
                          <Badge
                            className={
                              ripple.active
                                ? "bg-gold-500/20 text-gold-400 hover:bg-gold-500/30"
                                : "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30"
                            }
                          >
                            {ripple.active ? "Active" : "Completed"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1 text-blue-400" />
                            <span>{ripple.reach.toLocaleString()} reached</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-green-400" />
                            <span>{ripple.engagement.toLocaleString()} engaged</span>
                          </div>
                          <div className="text-right">
                            <span className="text-green-400">
                              {((ripple.engagement / ripple.reach) * 100).toFixed(1)}% rate
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 text-white">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription className="text-slate-400">
                      {profile.name}'s recent actions and updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      {profile.activity.map((item, index) => (
                        <div key={item.id} className="mb-6 last:mb-0">
                          <div className="flex gap-4">
                            <div className="relative">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                                  item.type === "connection"
                                    ? "bg-blue-500/20 text-blue-400"
                                    : item.type === "ripple"
                                      ? "bg-gold-500/20 text-gold-400"
                                      : item.type === "event"
                                        ? "bg-purple-500/20 text-purple-400"
                                        : "bg-green-500/20 text-green-400"
                                }`}
                              >
                                {item.type === "connection" ? (
                                  <Users className="h-5 w-5" />
                                ) : item.type === "ripple" ? (
                                  <Radio className="h-5 w-5" />
                                ) : item.type === "event" ? (
                                  <Calendar className="h-5 w-5" />
                                ) : (
                                  <Star className="h-5 w-5" />
                                )}
                              </div>
                              {index < profile.activity.length - 1 && (
                                <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-slate-700" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                                <p className="font-medium">{item.description}</p>
                                <time className="text-sm text-slate-400">
                                  {new Date(item.date).toLocaleDateString()}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="connections" className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 text-white">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Network Connections</CardTitle>
                        <CardDescription className="text-slate-400">
                          People connected with {profile.name}
                        </CardDescription>
                      </div>
                      {profile.mutualConnections > 0 && (
                        <Badge className="bg-slate-700/50 text-slate-300 hover:bg-slate-700 border-none">
                          {profile.mutualConnections} mutual connections
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* This would be populated from the database in a real app */}
                      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/man-profile.png" alt="John Smith" />
                          <AvatarFallback className="bg-slate-600 text-white text-xs">JS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">John Smith</p>
                          <p className="text-xs text-slate-400 truncate">CEO, Acme Inc.</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 text-slate-300 hover:bg-slate-700"
                        >
                          View
                        </Button>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/woman-profile.png" alt="Sarah Johnson" />
                          <AvatarFallback className="bg-slate-600 text-white text-xs">SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">Sarah Johnson</p>
                          <p className="text-xs text-slate-400 truncate">CTO, TechCorp</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 text-slate-300 hover:bg-slate-700"
                        >
                          View
                        </Button>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/man-profile.png" alt="Michael Chen" />
                          <AvatarFallback className="bg-slate-600 text-white text-xs">MC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">Michael Chen</p>
                          <p className="text-xs text-slate-400 truncate">Business Development, Global Partners</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 text-slate-300 hover:bg-slate-700"
                        >
                          View
                        </Button>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/woman-profile.png" alt="Emily Rodriguez" />
                          <AvatarFallback className="bg-slate-600 text-white text-xs">ER</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">Emily Rodriguez</p>
                          <p className="text-xs text-slate-400 truncate">Founder, StartupX</p>
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

                    <div className="mt-4 text-center">
                      <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
                        View All Connections
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
