"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bold, Italic, Link, List, ListOrdered, ImageIcon, Smile } from "lucide-react"

interface RippleContentEditorProps {
  content: string
  onChange: (content: string) => void
}

export function RippleContentEditor({ content, onChange }: RippleContentEditorProps) {
  const [activeTab, setActiveTab] = useState("compose")
  const [subject, setSubject] = useState("")
  const [previewMode, setPreviewMode] = useState("desktop")

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Create Your Content</h3>

      <div className="space-y-4">
        <Label htmlFor="subject">Subject Line / Title</Label>
        <Input
          id="subject"
          placeholder="Enter a compelling subject line"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <Tabs defaultValue="compose" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-4 pt-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <Button variant="outline" size="sm">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Link className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Smile className="h-4 w-4" />
            </Button>
          </div>

          <Textarea
            placeholder="Write your message here..."
            className="min-h-[200px]"
            value={content}
            onChange={(e) => onChange(e.target.value)}
          />

          <div className="flex justify-between items-center text-sm text-slate-500">
            <span>Formatting with Markdown is supported</span>
            <span>{content.length} characters</span>
          </div>
        </TabsContent>

        <TabsContent value="preview" className="pt-4">
          <div className="flex justify-end gap-2 mb-4">
            <Button
              variant={previewMode === "desktop" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewMode("desktop")}
            >
              Desktop
            </Button>
            <Button
              variant={previewMode === "mobile" ? "default" : "outline"}
              size="sm"
              onClick={() => setPreviewMode("mobile")}
            >
              Mobile
            </Button>
          </div>

          <div className="flex justify-center">
            <Card className={previewMode === "mobile" ? "w-[320px]" : "w-full max-w-[600px]"}>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{subject || "Your Subject Line"}</h2>
                <div className="prose max-w-none">
                  {content || (
                    <p className="text-slate-500 italic">
                      Your content preview will appear here. Start writing in the Compose tab.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
