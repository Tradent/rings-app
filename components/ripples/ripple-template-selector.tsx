"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, MessageSquare, Share2, Gift, Award } from "lucide-react"

const templates = [
  {
    id: "product-launch",
    title: "Product Launch",
    description: "Announce a new product or feature to your network",
    icon: Gift,
    color: "bg-blue-500/20 text-blue-500",
  },
  {
    id: "event-invitation",
    title: "Event Invitation",
    description: "Invite your network to an upcoming event",
    icon: Calendar,
    color: "bg-purple-500/20 text-purple-500",
  },
  {
    id: "content-share",
    title: "Content Share",
    description: "Share valuable content with your network",
    icon: Share2,
    color: "bg-green-500/20 text-green-500",
  },
  {
    id: "newsletter",
    title: "Newsletter",
    description: "Send a regular update to your network",
    icon: Mail,
    color: "bg-yellow-500/20 text-yellow-500",
  },
  {
    id: "feedback-request",
    title: "Feedback Request",
    description: "Ask your network for feedback on an idea or product",
    icon: MessageSquare,
    color: "bg-red-500/20 text-red-500",
  },
  {
    id: "recognition",
    title: "Recognition",
    description: "Recognize achievements within your network",
    icon: Award,
    color: "bg-indigo-500/20 text-indigo-500",
  },
]

interface RippleTemplateSelectorProps {
  selectedTemplate: string
  onSelect: (templateId: string) => void
}

export function RippleTemplateSelector({ selectedTemplate, onSelect }: RippleTemplateSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Choose a Template</h3>
      <p className="text-sm text-slate-500">Select a template to get started with your ripple campaign</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:border-blue-500 ${
              selectedTemplate === template.id ? "border-2 border-blue-500" : "border border-slate-200"
            }`}
            onClick={() => onSelect(template.id)}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${template.color}`}>
                  <template.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{template.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{template.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
