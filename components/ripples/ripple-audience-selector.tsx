"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Check, Filter, Plus, Search, UserCircle, Users, X } from "lucide-react"
import { Radio } from "lucide-react"

// Sample contacts data
const contacts = [
  { id: "1", name: "John Smith", type: "customer", tags: ["enterprise", "decision-maker"] },
  { id: "2", name: "Sarah Johnson", type: "lead", tags: ["tech", "influencer"] },
  { id: "3", name: "Michael Chen", type: "partner", tags: ["partnership", "channel"] },
  { id: "4", name: "Emily Rodriguez", type: "lead", tags: ["startup", "potential"] },
  { id: "5", name: "David Wilson", type: "customer", tags: ["marketing", "repeat-customer"] },
]

interface RippleAudienceSelectorProps {
  audienceSize: number
  audienceType: string
  onAudienceSizeChange: (size: number) => void
  onAudienceTypeChange: (type: string) => void
}

export function RippleAudienceSelector({
  audienceSize,
  audienceType,
  onAudienceSizeChange,
  onAudienceTypeChange,
}: RippleAudienceSelectorProps) {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = Array.from(new Set(contacts.flatMap((contact) => contact.tags)))

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => contact.tags.includes(tag))
    return matchesSearch && matchesTags
  })

  const toggleContact = (contactId: string) => {
    setSelectedContacts((prev) =>
      prev.includes(contactId) ? prev.filter((id) => id !== contactId) : [...prev, contactId],
    )
  }

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Select Your Audience</h3>

      <Tabs defaultValue="targeting">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="targeting">Targeting Options</TabsTrigger>
          <TabsTrigger value="manual">Manual Selection</TabsTrigger>
        </TabsList>

        <TabsContent value="targeting" className="space-y-6 pt-4">
          <div className="space-y-4">
            <Label className="text-base">Audience Type</Label>
            <RadioGroup
              value={audienceType}
              onValueChange={onAudienceTypeChange}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <Card className="cursor-pointer border-slate-200">
                <CardContent className="pt-6">
                  <RadioGroupItem value="all" id="all" className="peer sr-only" />
                  <Label
                    htmlFor="all"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Users className="mb-3 h-6 w-6" />
                    <span className="text-center font-medium">All Contacts</span>
                    <span className="text-center text-sm text-slate-500 mt-1">Reach everyone in your network</span>
                  </Label>
                </CardContent>
              </Card>

              <Card className="cursor-pointer border-slate-200">
                <CardContent className="pt-6">
                  <RadioGroupItem value="segmented" id="segmented" className="peer sr-only" />
                  <Label
                    htmlFor="segmented"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Filter className="mb-3 h-6 w-6" />
                    <span className="text-center font-medium">Segmented</span>
                    <span className="text-center text-sm text-slate-500 mt-1">Target by contact type or tags</span>
                  </Label>
                </CardContent>
              </Card>

              <Card className="cursor-pointer border-slate-200">
                <CardContent className="pt-6">
                  <RadioGroupItem value="ripple" id="ripple" className="peer sr-only" />
                  <Label
                    htmlFor="ripple"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Radio className="mb-3 h-6 w-6" />
                    <span className="text-center font-medium">Ripple Effect</span>
                    <span className="text-center text-sm text-slate-500 mt-1">Start with key contacts and expand</span>
                  </Label>
                </CardContent>
              </Card>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base">Network Reach</Label>
              <span className="text-sm text-slate-500">{audienceSize} contacts</span>
            </div>
            <Slider
              min={0}
              max={100}
              step={5}
              value={[audienceSize]}
              onValueChange={(value) => onAudienceSizeChange(value[0])}
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>Targeted</span>
              <span>Broad</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="manual" className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                placeholder="Search contacts..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && <X className="ml-1 h-3 w-3" onClick={() => toggleTag(tag)} />}
              </Badge>
            ))}
          </div>

          <div className="border rounded-md divide-y">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between p-3 hover:bg-slate-50 cursor-pointer"
                onClick={() => toggleContact(contact.id)}
              >
                <div className="flex items-center gap-3">
                  <UserCircle className="h-8 w-8 text-slate-400" />
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <div className="flex gap-1 mt-1">
                      {contact.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    selectedContacts.includes(contact.id)
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "border-slate-300"
                  }`}
                >
                  {selectedContacts.includes(contact.id) && <Check className="h-4 w-4" />}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center p-3 bg-slate-50 rounded-md">
            <span>{selectedContacts.length} contacts selected</span>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" />
              Add Group
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
