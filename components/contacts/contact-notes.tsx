"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, MoreHorizontal, Plus, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample notes data - in a real app, this would come from your backend
const initialNotes = [
  {
    id: "1",
    content:
      "John mentioned he's looking to upgrade their entire system in Q3. We should prepare a comprehensive proposal that includes our enterprise plan.",
    createdAt: "2023-05-10T14:30:00",
  },
  {
    id: "2",
    content:
      "Discussed integration possibilities with their existing CRM. They currently use Salesforce and would need our API to connect seamlessly.",
    createdAt: "2023-05-03T16:20:00",
  },
  {
    id: "3",
    content:
      "Initial meeting went well. John is the decision maker but will need approval from their CTO for any purchase over $10k.",
    createdAt: "2023-04-25T09:30:00",
  },
]

export function ContactNotes({ contactId }: { contactId: string }) {
  const [notes, setNotes] = useState(initialNotes)
  const [newNote, setNewNote] = useState("")
  const [isAddingNote, setIsAddingNote] = useState(false)

  const addNote = () => {
    if (!newNote.trim()) {
      setIsAddingNote(false)
      return
    }

    const note = {
      id: Date.now().toString(),
      content: newNote,
      createdAt: new Date().toISOString(),
    }

    setNotes((prev) => [note, ...prev])
    setNewNote("")
    setIsAddingNote(false)
  }

  const deleteNote = (noteId: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== noteId))
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Notes</CardTitle>
        {!isAddingNote && (
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700 text-slate-300 hover:bg-slate-700"
            onClick={() => setIsAddingNote(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Note
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {isAddingNote && (
          <div className="mb-6">
            <Textarea
              placeholder="Write a note about this contact..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white min-h-[100px] mb-2"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700 text-slate-300 hover:bg-slate-700"
                onClick={() => {
                  setIsAddingNote(false)
                  setNewNote("")
                }}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={addNote}>
                Save Note
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {notes.length === 0 ? (
            <div className="text-center py-6 text-slate-500">
              No notes yet. Add a note to keep track of important information.
            </div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="bg-slate-800/70 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-slate-400" />
                    <time className="text-xs text-slate-400">{new Date(note.createdAt).toLocaleString()}</time>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="text-red-500" onClick={() => deleteNote(note.id)}>
                        <Trash className="h-4 w-4 mr-2" />
                        Delete Note
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-slate-300 whitespace-pre-line">{note.content}</p>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
