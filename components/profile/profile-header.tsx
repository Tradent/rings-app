"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Edit, MapPin, Star, Users } from "lucide-react"

interface ProfileHeaderProps {
  profile: any
  isOwnProfile: boolean
}

export function ProfileHeader({ profile, isOwnProfile }: ProfileHeaderProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <img src={profile.coverImage || "/placeholder.svg"} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80"></div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 bg-slate-900/50 hover:bg-slate-900/70"
          asChild
        >
          <Link href="/network">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Profile Header */}
      <div className="container max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Avatar className="h-32 w-32 border-4 border-slate-900 shadow-xl">
            <AvatarImage src={profile.image || "/placeholder.svg"} alt={profile.name} />
            <AvatarFallback className="bg-gold-600 text-white text-3xl">
              {profile.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 mt-4 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-slate-300">
                  {profile.position} at {profile.company}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {isOwnProfile && (
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    className={
                      isEditing
                        ? "bg-slate-700"
                        : "bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700"
                    }
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "Cancel Edit" : "Edit Profile"}
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-1">
                <Users className="h-5 w-5 text-gold-400" />
                <span className="font-semibold">{profile.connections}</span>
                <span className="text-slate-400">connections</span>
                {profile.mutualConnections > 0 && (
                  <Badge className="ml-1 bg-slate-700/50 text-slate-300 hover:bg-slate-700 border-none">
                    {profile.mutualConnections} mutual
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-gold-400" />
                <span className="font-semibold">{profile.influenceScore}</span>
                <span className="text-slate-400">influence score</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-5 w-5 text-slate-400" />
                <span className="text-slate-400">
                  Joined {new Date(profile.joinDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
