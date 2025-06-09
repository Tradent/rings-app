"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, MessageSquare, Phone, Radio, User } from "lucide-react"

// Sample timeline data - in a real app, this would come from your backend
const timelineItems = [
  {
    id: "1",
    type: "email",
    title: "Email Sent",
    description: "Sent follow-up email about the product demo",
    date: "2023-05-10T14:30:00",
    icon: Mail,
  },
  {
    id: "2",
    type: "call",
    title: "Phone Call",
    description: "Discussed partnership opportunities and next steps",
    date: "2023-05-08T11:15:00",
    icon: Phone,
  },
  {
    id: "3",
    type: "meeting",
    title: "Meeting Scheduled",
    description: "Product demo scheduled for next week",
    date: "2023-05-05T09:45:00",
    icon: Calendar,
  },
  {
    id: "4",
    type: "note",
    title: "Note Added",
    description: "Contact expressed interest in our enterprise plan",
    date: "2023-05-03T16:20:00",
    icon: MessageSquare,
  },
  {
    id: "5",
    type: "campaign",
    title: "Added to Campaign",
    description: "Added to 'Product Launch' campaign",
    date: "2023-04-28T10:00:00",
    icon: Radio,
  },
  {
    id: "6",
    type: "created",
    title: "Contact Created",
    description: "Contact added to the system",
    date: "2023-04-25T09:30:00",
    icon: User,
  },
]

export function ContactTimeline({ contactId }: { contactId: string }) {
  const [showAll, setShowAll] = useState(false)

  const displayedItems = showAll ? timelineItems : timelineItems.slice(0, 3)

  return (
    <Card className="bg-slate-800/50 border-slate-700 text-white">
      <CardContent className="p-6">
        <div className="relative">
          {displayedItems.map((item, index) => (
            <div key={item.id} className="mb-6 last:mb-0">
              <div className="flex gap-4">
                <div className="relative">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      item.type === "email"
                        ? "bg-blue-500/20 text-blue-400"
                        : item.type === "call"
                          ? "bg-green-500/20 text-green-400"
                          : item.type === "meeting"
                            ? "bg-purple-500/20 text-purple-400"
                            : item.type === "note"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : item.type === "campaign"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-slate-500/20 text-slate-400"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  {index < displayedItems.length - 1 && (
                    <div className="absolute top-10 bottom-0 left-1/2 w-px -translate-x-1/2 bg-slate-700" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <time className="text-sm text-slate-400">{new Date(item.date).toLocaleString()}</time>
                  </div>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {!showAll && timelineItems.length > 3 && (
            <Button
              variant="outline"
              className="mt-4 w-full border-slate-700 text-slate-300 hover:bg-slate-700"
              onClick={() => setShowAll(true)}
            >
              Show All Activity
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
