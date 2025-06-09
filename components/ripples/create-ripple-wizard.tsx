"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Radio, Users, Calendar, Layers, MessageSquare, Settings, ChevronRight, ChevronLeft, Check } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { RippleTemplateSelector } from "@/components/ripples/ripple-template-selector"
import { RippleAudienceSelector } from "@/components/ripples/ripple-audience-selector"
import { RippleContentEditor } from "@/components/ripples/ripple-content-editor"
import { RippleScheduler } from "@/components/ripples/ripple-scheduler"

const steps = [
  { id: "template", label: "Template", icon: Layers },
  { id: "audience", label: "Audience", icon: Users },
  { id: "content", label: "Content", icon: MessageSquare },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "settings", label: "Settings", icon: Settings },
]

export function CreateRippleWizard() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [rippleData, setRippleData] = useState({
    name: "",
    template: "",
    audienceSize: 0,
    audienceType: "",
    content: "",
    schedule: {
      startDate: "",
      endDate: "",
      frequency: "once",
    },
    settings: {
      enableNotifications: true,
      trackEngagement: true,
      allowReplies: true,
      rippleRadius: 2,
    },
  })

  const handleSubmit = () => {
    console.log("Creating ripple with data:", rippleData)
    setOpen(false)
    setCurrentStep(0)
    // Reset form or redirect to the new ripple page
  }

  const updateRippleData = (field: string, value: any) => {
    setRippleData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700">
          <Radio className="mr-2 h-4 w-4" />
          Create Ripple
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Ripple</DialogTitle>
          <DialogDescription>Design your ripple campaign to reach your network and track its impact.</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="mb-6">
            <Label htmlFor="ripple-name" className="text-base font-medium">
              Ripple Name
            </Label>
            <Input
              id="ripple-name"
              placeholder="e.g., Product Launch, Networking Event"
              className="mt-1.5"
              value={rippleData.name}
              onChange={(e) => updateRippleData("name", e.target.value)}
            />
          </div>

          <div className="flex justify-between mb-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${index <= currentStep ? "text-blue-500" : "text-slate-500"}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    index < currentStep
                      ? "bg-blue-500 text-white"
                      : index === currentStep
                        ? "bg-blue-100 text-blue-500 border-2 border-blue-500"
                        : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {index < currentStep ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                </div>
                <span className="text-xs">{step.label}</span>
              </div>
            ))}
          </div>

          <div className="mb-6">
            {currentStep === 0 && (
              <RippleTemplateSelector
                selectedTemplate={rippleData.template}
                onSelect={(template) => updateRippleData("template", template)}
              />
            )}

            {currentStep === 1 && (
              <RippleAudienceSelector
                audienceSize={rippleData.audienceSize}
                audienceType={rippleData.audienceType}
                onAudienceSizeChange={(size) => updateRippleData("audienceSize", size)}
                onAudienceTypeChange={(type) => updateRippleData("audienceType", type)}
              />
            )}

            {currentStep === 2 && (
              <RippleContentEditor
                content={rippleData.content}
                onChange={(content) => updateRippleData("content", content)}
              />
            )}

            {currentStep === 3 && (
              <RippleScheduler
                schedule={rippleData.schedule}
                onChange={(schedule) => updateRippleData("schedule", schedule)}
              />
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Ripple Settings</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notifications" className="text-base">
                        Enable Notifications
                      </Label>
                      <p className="text-sm text-slate-500">Receive notifications about ripple engagement</p>
                    </div>
                    <Switch
                      id="notifications"
                      checked={rippleData.settings.enableNotifications}
                      onCheckedChange={(checked) =>
                        setRippleData((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            enableNotifications: checked,
                          },
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="tracking" className="text-base">
                        Track Engagement
                      </Label>
                      <p className="text-sm text-slate-500">Collect analytics on how your ripple performs</p>
                    </div>
                    <Switch
                      id="tracking"
                      checked={rippleData.settings.trackEngagement}
                      onCheckedChange={(checked) =>
                        setRippleData((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            trackEngagement: checked,
                          },
                        }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="replies" className="text-base">
                        Allow Replies
                      </Label>
                      <p className="text-sm text-slate-500">Let recipients respond directly to your ripple</p>
                    </div>
                    <Switch
                      id="replies"
                      checked={rippleData.settings.allowReplies}
                      onCheckedChange={(checked) =>
                        setRippleData((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            allowReplies: checked,
                          },
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="radius" className="text-base">
                        Ripple Radius
                      </Label>
                      <span className="text-sm text-slate-500">
                        {rippleData.settings.rippleRadius} degrees of separation
                      </span>
                    </div>
                    <Slider
                      id="radius"
                      min={1}
                      max={3}
                      step={1}
                      value={[rippleData.settings.rippleRadius]}
                      onValueChange={(value) =>
                        setRippleData((prev) => ({
                          ...prev,
                          settings: {
                            ...prev.settings,
                            rippleRadius: value[0],
                          },
                        }))
                      }
                    />
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Direct connections</span>
                      <span>Extended network</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={nextStep}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700"
              >
                Launch Ripple
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
