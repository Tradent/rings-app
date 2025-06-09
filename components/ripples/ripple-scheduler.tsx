"use client"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

interface ScheduleData {
  startDate: string
  endDate: string
  frequency: string
}

interface RippleSchedulerProps {
  schedule: ScheduleData
  onChange: (schedule: ScheduleData) => void
}

export function RippleScheduler({ schedule, onChange }: RippleSchedulerProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(
    schedule.startDate ? new Date(schedule.startDate) : undefined,
  )
  const [endDate, setEndDate] = useState<Date | undefined>(schedule.endDate ? new Date(schedule.endDate) : undefined)

  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date)
    if (date) {
      onChange({
        ...schedule,
        startDate: date.toISOString(),
      })
    }
  }

  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date)
    if (date) {
      onChange({
        ...schedule,
        endDate: date.toISOString(),
      })
    }
  }

  const handleFrequencyChange = (frequency: string) => {
    onChange({
      ...schedule,
      frequency,
    })
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Schedule Your Ripple</h3>

      <div className="space-y-4">
        <Label className="text-base">Frequency</Label>
        <RadioGroup
          value={schedule.frequency}
          onValueChange={handleFrequencyChange}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card className="cursor-pointer border-slate-200">
            <CardContent className="pt-6">
              <RadioGroupItem value="once" id="once" className="peer sr-only" />
              <Label
                htmlFor="once"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-center font-medium">One-time</span>
                <span className="text-center text-sm text-slate-500 mt-1">Send once at a specific time</span>
              </Label>
            </CardContent>
          </Card>

          <Card className="cursor-pointer border-slate-200">
            <CardContent className="pt-6">
              <RadioGroupItem value="scheduled" id="scheduled" className="peer sr-only" />
              <Label
                htmlFor="scheduled"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-center font-medium">Scheduled</span>
                <span className="text-center text-sm text-slate-500 mt-1">Send at a future date and time</span>
              </Label>
            </CardContent>
          </Card>

          <Card className="cursor-pointer border-slate-200">
            <CardContent className="pt-6">
              <RadioGroupItem value="recurring" id="recurring" className="peer sr-only" />
              <Label
                htmlFor="recurring"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span className="text-center font-medium">Recurring</span>
                <span className="text-center text-sm text-slate-500 mt-1">Send repeatedly on a schedule</span>
              </Label>
            </CardContent>
          </Card>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={startDate} onSelect={handleStartDateChange} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Start Time</Label>
          <div className="flex gap-2">
            <Select defaultValue="9">
              <SelectTrigger>
                <SelectValue placeholder="Hour" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 24 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i.toString().padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue="00">
              <SelectTrigger>
                <SelectValue placeholder="Minute" />
              </SelectTrigger>
              <SelectContent>
                {["00", "15", "30", "45"].map((minute) => (
                  <SelectItem key={minute} value={minute}>
                    {minute}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {schedule.frequency === "recurring" && (
          <>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={handleEndDateChange} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Repeat Every</Label>
              <div className="flex gap-2">
                <Select defaultValue="1">
                  <SelectTrigger>
                    <SelectValue placeholder="Frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select defaultValue="week">
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
