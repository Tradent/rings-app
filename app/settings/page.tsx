import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, User, Shield, Palette, Key, Users, Upload, Moon, Sun, Laptop } from "lucide-react"

export default function SettingsPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700">
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-6 max-w-3xl mb-8 bg-amber-500/90 text-slate-900 hover:bg-amber-500 border-amber-600">
          <TabsTrigger
            value="profile"
            className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
          >
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger
            value="account"
            className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
          >
            <Key className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
          >
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger
            value="network"
            className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
          >
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Network</span>
          </TabsTrigger>
          <TabsTrigger
            value="privacy"
            className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
          >
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            className="flex items-center gap-2 data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
          >
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription className="text-slate-400">
                Update your personal information and how you appear on Rings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/abstract-profile.png" alt="Profile" />
                    <AvatarFallback className="bg-gold-600 text-white text-xl">JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
                    <Upload className="h-4 w-4 mr-2" />
                    Change Photo
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue="Jane"
                        className="bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" className="bg-slate-700/50 border-slate-600 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="jane.doe@example.com"
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      rows={3}
                      className="w-full rounded-md bg-slate-700/50 border border-slate-600 text-white p-2"
                      defaultValue="Network professional with 10+ years of experience in building meaningful connections."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
              <CardDescription className="text-slate-400">
                Update your professional details to enhance your network connections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    defaultValue="Acme Corporation"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    defaultValue="Network Director"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select defaultValue="technology">
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <div className="flex flex-wrap gap-2 p-2 bg-slate-700/30 rounded-md">
                  <Badge className="bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border-none">Networking</Badge>
                  <Badge className="bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border-none">Communication</Badge>
                  <Badge className="bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 border-none">Leadership</Badge>
                  <Badge className="bg-slate-500/20 text-slate-400 hover:bg-slate-500/30 border-none">
                    + Add Skill
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription className="text-slate-400">Manage your account credentials and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" className="bg-slate-700/50 border-slate-600 text-white" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" className="bg-slate-700/50 border-slate-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                </div>
              </div>
              <div className="pt-2">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
                  Change Password
                </Button>
              </div>
            </CardContent>
            <Separator className="bg-slate-700" />
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription className="text-slate-400">
                Add an extra layer of security to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable 2FA</p>
                  <p className="text-sm text-slate-400">Protect your account with two-factor authentication</p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <Separator className="bg-slate-700" />
            <CardHeader>
              <CardTitle className="text-red-400">Danger Zone</CardTitle>
              <CardDescription className="text-slate-400">Irreversible account actions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription className="text-slate-400">
                Control how and when you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Connection Requests</p>
                      <p className="text-sm text-slate-400">When someone wants to connect with you</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Ripple Activity</p>
                      <p className="text-sm text-slate-400">Updates on your active ripples</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Network Milestones</p>
                      <p className="text-sm text-slate-400">When you reach important network growth points</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-slate-400">News and promotions from Rings</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable Push Notifications</p>
                      <p className="text-sm text-slate-400">Receive notifications on your device</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Real-time Engagement Alerts</p>
                      <p className="text-sm text-slate-400">Instant updates when someone engages with your content</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Frequency</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Less Frequent</span>
                    <span className="text-sm">More Frequent</span>
                  </div>
                  <Slider defaultValue={[75]} max={100} step={25} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Network Settings */}
        <TabsContent value="network" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Network Settings</CardTitle>
              <CardDescription className="text-slate-400">
                Configure how your network operates and grows
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Connection Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-Accept Connections</p>
                      <p className="text-sm text-slate-400">Automatically accept connection requests</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Connection Suggestions</p>
                      <p className="text-sm text-slate-400">Receive suggestions for new connections</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Ripple Settings</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Default Ripple Radius</Label>
                    <Select defaultValue="2">
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select radius" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 - Direct connections only</SelectItem>
                        <SelectItem value="2">2 - Friends of friends</SelectItem>
                        <SelectItem value="3">3 - Extended network</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Allow Ripple Forwarding</p>
                      <p className="text-sm text-slate-400">Let connections share your ripples with their network</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Network Visibility</h3>
                <div className="space-y-2">
                  <Label>Who can see your network?</Label>
                  <Select defaultValue="connections">
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="everyone">Everyone</SelectItem>
                      <SelectItem value="connections">My Connections</SelectItem>
                      <SelectItem value="nobody">Only Me</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription className="text-slate-400">Control your privacy and data settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Profile Privacy</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label>Profile Visibility</Label>
                    <Select defaultValue="connections">
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="connections">Connections Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Influence Score</p>
                      <p className="text-sm text-slate-400">Display your influence score on your profile</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Activity Privacy</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show When Active</p>
                      <p className="text-sm text-slate-400">Let others see when you're online</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Activity Feed</p>
                      <p className="text-sm text-slate-400">Share your activities in the network feed</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Data Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Analytics</p>
                      <p className="text-sm text-slate-400">Allow us to analyze your usage for better features</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Personalized Recommendations</p>
                      <p className="text-sm text-slate-400">Receive tailored suggestions based on your activity</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
                  Download My Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription className="text-slate-400">Customize how Rings looks and feels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Theme</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant="outline"
                      className="w-full h-20 border-slate-700 hover:border-gold-500 hover:bg-slate-700 flex flex-col items-center justify-center gap-2"
                    >
                      <Sun className="h-6 w-6 text-gold-400" />
                      <span>Light</span>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant="outline"
                      className="w-full h-20 border-gold-500 bg-slate-700/50 hover:bg-slate-700 flex flex-col items-center justify-center gap-2"
                    >
                      <Moon className="h-6 w-6 text-gold-400" />
                      <span>Dark</span>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant="outline"
                      className="w-full h-20 border-slate-700 hover:border-gold-500 hover:bg-slate-700 flex flex-col items-center justify-center gap-2"
                    >
                      <Laptop className="h-6 w-6 text-gold-400" />
                      <span>System</span>
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Accent Color</h3>
                <div className="grid grid-cols-5 gap-4">
                  <div className="h-10 rounded-md bg-gold-500 cursor-pointer ring-2 ring-gold-300 ring-offset-2 ring-offset-slate-800"></div>
                  <div className="h-10 rounded-md bg-blue-500 cursor-pointer"></div>
                  <div className="h-10 rounded-md bg-green-500 cursor-pointer"></div>
                  <div className="h-10 rounded-md bg-purple-500 cursor-pointer"></div>
                  <div className="h-10 rounded-md bg-red-500 cursor-pointer"></div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Network Visualization</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Animation Effects</p>
                      <p className="text-sm text-slate-400">Enable animations in network visualization</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Node Size</Label>
                      <span className="text-sm text-slate-400">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={25} />
                  </div>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Layout</h3>
                <div className="space-y-2">
                  <Label>Default Dashboard View</Label>
                  <Select defaultValue="network">
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                      <SelectValue placeholder="Select default view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="network">Network Visualization</SelectItem>
                      <SelectItem value="stats">Statistics Overview</SelectItem>
                      <SelectItem value="ripples">Active Ripples</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700">
                Apply Theme Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
