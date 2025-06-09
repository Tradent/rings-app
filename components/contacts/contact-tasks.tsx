"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus } from "lucide-react"

// Sample tasks data - in a real app, this would come from your backend
const tasks = [
  {
    id: "1",
    title: "Follow up on proposal",
    dueDate: "2023-05-20",
    priority: "high",
    completed: false,
  },
  {
    id: "2",
    title: "Schedule product demo",
    dueDate: "2023-05-25",
    priority: "medium",
    completed: false,
  },
  {
    id: "3",
    title: "Send contract for review",
    dueDate: "2023-05-18",
    priority: "high",
    completed: true,
  },
  {
    id: "4",
    title: "Check in about partnership",
    dueDate: "2023-06-01",
    priority: "low",
    completed: false,
  },
]

export function ContactTasks({ contactId }: { contactId: string }) {
  const [taskList, setTaskList] = useState(tasks)
  const [newTask, setNewTask] = useState("")

  const toggleTaskCompletion = (taskId: string) => {
    setTaskList((prev) => prev.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTask.trim()) return

    const task = {
      id: Date.now().toString(),
      title: newTask,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      priority: "medium",
      completed: false,
    }

    setTaskList((prev) => [task, ...prev])
    setNewTask("")
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 text-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={addTask} className="flex gap-2 mb-6">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="bg-slate-700/50 border-slate-600 text-white"
          />
          <Button type="submit" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </form>

        <div className="space-y-4">
          {taskList.length === 0 ? (
            <div className="text-center py-6 text-slate-500">No tasks yet. Add a task to get started.</div>
          ) : (
            taskList.map((task) => (
              <div
                key={task.id}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  task.completed ? "bg-slate-800/30 text-slate-400" : "bg-slate-800/70"
                }`}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                  className="mt-1"
                />
                <div className="flex-1 min-w-0">
                  <p className={task.completed ? "line-through" : ""}>{task.title}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs">
                    <div className="flex items-center gap-1 text-slate-400">
                      <Calendar className="h-3 w-3" />
                      <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        task.priority === "high"
                          ? "border-red-500 text-red-400"
                          : task.priority === "medium"
                            ? "border-yellow-500 text-yellow-400"
                            : "border-blue-500 text-blue-400"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
