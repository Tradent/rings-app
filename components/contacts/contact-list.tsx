"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, Mail, MoreHorizontal, Phone, Star, Users } from "lucide-react"

// Sample contact data - in a real app, this would come from your backend
const contacts = [
  {
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
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    company: "TechCorp",
    position: "CTO",
    type: "lead",
    influenceScore: 72,
    lastContact: "2023-05-15",
    image: "/woman-profile.png",
    tags: ["tech", "influencer"],
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael.c@example.com",
    phone: "+1 (555) 456-7890",
    company: "Global Partners",
    position: "Business Development",
    type: "partner",
    influenceScore: 78,
    lastContact: "2023-05-08",
    image: "/abstract-profile.png",
    tags: ["partnership", "channel"],
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "+1 (555) 234-5678",
    company: "StartupX",
    position: "Founder",
    type: "lead",
    influenceScore: 65,
    lastContact: "2023-05-18",
    image: "/woman-profile.png",
    tags: ["startup", "potential"],
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "+1 (555) 876-5432",
    company: "Acme Inc.",
    position: "Marketing Director",
    type: "customer",
    influenceScore: 70,
    lastContact: "2023-05-12",
    image: "/man-profile.png",
    tags: ["marketing", "repeat-customer"],
  },
]

type ContactType = "all" | "lead" | "customer" | "partner"

export function ContactList({ filter = "all" }: { filter: ContactType }) {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const filteredContacts = filter === "all" ? contacts : contacts.filter((contact) => contact.type === filter)

  const toggleSelect = (id: string) => {
    setSelectedContacts((prev) => (prev.includes(id) ? prev.filter((contactId) => contactId !== id) : [...prev, id]))
  }

  const selectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(filteredContacts.map((contact) => contact.id))
    }
  }

  return (
    <div className="space-y-4">
      {selectedContacts.length > 0 && (
        <div className="flex items-center justify-between bg-slate-800/70 p-3 rounded-lg mb-4">
          <div className="text-sm">
            {selectedContacts.length} contact{selectedContacts.length > 1 ? "s" : ""} selected
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
            <Button size="sm" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <Users className="h-4 w-4 mr-2" />
              Add to Campaign
            </Button>
            <Button size="sm" variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      )}

      <div className="bg-slate-800/50 rounded-lg border border-slate-700">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-700 text-sm font-medium text-slate-400">
          <div className="col-span-1">
            <Checkbox
              checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
              onCheckedChange={selectAll}
            />
          </div>
          <div className="col-span-3">Name</div>
          <div className="col-span-2 hidden md:block">Company</div>
          <div className="col-span-2 hidden md:block">Type</div>
          <div className="col-span-2">Influence</div>
          <div className="col-span-2">Last Contact</div>
        </div>

        {filteredContacts.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No contacts found. Add some contacts to get started.</div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-slate-700 items-center hover:bg-slate-800/70 transition-colors"
            >
              <div className="col-span-1">
                <Checkbox
                  checked={selectedContacts.includes(contact.id)}
                  onCheckedChange={() => toggleSelect(contact.id)}
                />
              </div>
              <div className="col-span-3">
                <Link href={`/contacts/${contact.id}`} className="flex items-center gap-3 hover:underline">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image src={contact.image || "/placeholder.svg"} alt={contact.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{contact.name}</div>
                    <div className="text-xs text-slate-400">{contact.position}</div>
                  </div>
                </Link>
              </div>
              <div className="col-span-2 hidden md:block text-slate-300">{contact.company}</div>
              <div className="col-span-2 hidden md:block">
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
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>{contact.influenceScore}</span>
                </div>
              </div>
              <div className="col-span-1 text-slate-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span className="text-xs">{new Date(contact.lastContact).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="col-span-1 flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="h-4 w-4 mr-2" />
                      Add to Campaign
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
