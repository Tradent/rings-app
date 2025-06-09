import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ContactTimeline } from "@/components/contacts/contact-timeline"
import { ContactTasks } from "@/components/contacts/contact-tasks"
import { ContactNotes } from "@/components/contacts/contact-notes"
import { ArrowLeft, Calendar, Edit, Mail, MapPin, Phone, Star, Users, Plus } from "lucide-react"

// Sample contact data - in a real app, this would come from your backend
const contact = {
  id: "1",
  name: "John Smith",
  email: "john.smith@example.com",
  phone: "+1 (555) 123-4567",
  company: "Acme Inc.",
  position: "CEO",
  type: "customer",
  influenceScore: 85,
  lastContact: "2023-05-10",
  image: "/man-profile.png",
  tags: ["enterprise", "decision-maker"],
  address: "123 Business Ave, San Francisco, CA 94107",
  connections: 24,
  campaigns: 3,
  notes: 8,
  tasks: 2,
}

export default function ContactDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/contacts">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Contact Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                  <Image src={contact.image || "/placeholder.svg"} alt={contact.name} fill className="object-cover" />
                </div>
                <h2 className="text-2xl font-bold">{contact.name}</h2>
                <p className="text-slate-400">
                  {contact.position} at {contact.company}
                </p>

                <div className="flex items-center justify-center mt-2">
                  <Badge
                    variant="outline"
                    className={
                      contact.type === "lead"
                        ? "border-blue-500 text-blue-400"
                        : contact.type === "customer"
                          ? "border-green-500 text-green-400"
                          : "border-purple-500 text-purple-400"
                    }
                  >
                    {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
                  </Badge>
                </div>

                <div className="flex items-center justify-center mt-4 gap-1">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-lg font-semibold">{contact.influenceScore}</span>
                  <span className="text-slate-400 text-sm">Influence Score</span>
                </div>

                <div className="w-full border-t border-slate-700 my-6"></div>

                <div className="w-full space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-sm">{contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-slate-400">Phone</p>
                      <p className="text-sm">{contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-slate-400">Address</p>
                      <p className="text-sm">{contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-slate-400 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm text-slate-400">Last Contact</p>
                      <p className="text-sm">{new Date(contact.lastContact).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full border-t border-slate-700 my-6"></div>

                <div className="grid grid-cols-3 w-full gap-2 text-center">
                  <div>
                    <p className="text-xl font-bold">{contact.connections}</p>
                    <p className="text-xs text-slate-400">Connections</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{contact.campaigns}</p>
                    <p className="text-xs text-slate-400">Campaigns</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold">{contact.notes}</p>
                    <p className="text-xs text-slate-400">Notes</p>
                  </div>
                </div>

                <div className="mt-6 w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {contact.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-700 hover:bg-slate-600">
                    {tag}
                  </Badge>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-6 w-6 rounded-full border-dashed border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="text-lg">Network</CardTitle>
              <CardDescription className="text-slate-400">Connections in your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex -space-x-2">
                <div className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-slate-800">
                  <Image src="/woman-profile.png" alt="Connection" fill className="object-cover" />
                </div>
                <div className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-slate-800">
                  <Image src="/abstract-profile.png" alt="Connection" fill className="object-cover" />
                </div>
                <div className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-slate-800">
                  <Image src="/woman-profile.png" alt="Connection" fill className="object-cover" />
                </div>
                <div className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-slate-800">
                  <Image src="/man-profile.png" alt="Connection" fill className="object-cover" />
                </div>
                <div className="relative h-8 w-8 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-xs font-medium">
                  +20
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-slate-700 text-slate-300 hover:bg-slate-700">
                <Users className="mr-2 h-4 w-4" />
                View All Connections
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-800/50 border-slate-700 text-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center border-slate-700 text-slate-300 hover:bg-slate-700"
                >
                  <Mail className="h-5 w-5 mb-2" />
                  <span>Send Email</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center border-slate-700 text-slate-300 hover:bg-slate-700"
                >
                  <Phone className="h-5 w-5 mb-2" />
                  <span>Call</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center border-slate-700 text-slate-300 hover:bg-slate-700"
                >
                  <Calendar className="h-5 w-5 mb-2" />
                  <span>Schedule</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center border-slate-700 text-slate-300 hover:bg-slate-700"
                >
                  <Users className="h-5 w-5 mb-2" />
                  <span>Add to Campaign</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline">
              <ContactTimeline contactId={params.id} />
            </TabsContent>
            <TabsContent value="tasks">
              <ContactTasks contactId={params.id} />
            </TabsContent>
            <TabsContent value="notes">
              <ContactNotes contactId={params.id} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
