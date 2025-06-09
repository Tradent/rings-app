"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Radio,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  UserCircle,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ConnectionRequests } from "@/components/connection-requests"
import { useDemo } from "@/contexts/demo-context"
import { demoDataService } from "@/lib/demo-data"
import { useRouter } from "next/navigation"

const navItems = [
  {
    name: "Dashboard",
    href: "/app",
    icon: LayoutDashboard,
  },
  {
    name: "Ripples",
    href: "/app/ripples",
    icon: Radio,
  },
  {
    name: "Campaigns",
    href: "/app/campaigns",
    icon: Radio,
  },
  {
    name: "Contacts",
    href: "/app/contacts",
    icon: UserCircle,
  },
  {
    name: "Analytics",
    href: "/app/analytics",
    icon: BarChart3,
  },
  {
    name: "Network",
    href: "/app/network",
    icon: Users,
  },
  {
    name: "Settings",
    href: "/app/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [pendingRequests, setPendingRequests] = useState([])
  const { isDemoMode, disableDemoMode } = useDemo()
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState(null)
  const hasRequests = pendingRequests.length > 0

  // Load collapsed state from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed")
    if (savedState !== null) {
      setIsCollapsed(savedState === "true")
    }
  }, [])

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isDemoMode) {
          // Use demo user data
          setCurrentUser(demoDataService.getUser())
        } else {
          // This would be a real API call in a production app
          // For now, we'll use the same mock data
          setCurrentUser(demoDataService.getUser())
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [isDemoMode])

  // Fetch pending connection requests
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        if (isDemoMode) {
          // In demo mode, simulate 3 pending requests
          const mockRequests = [
            { id: "1", fromUserName: "Jane Smith", fromUserImage: "/woman-profile.png", createdAt: "2023-05-15" },
            { id: "2", fromUserName: "John Doe", fromUserImage: "/man-profile.png", createdAt: "2023-05-14" },
            { id: "3", fromUserName: "Alex Johnson", fromUserImage: "/abstract-profile.png", createdAt: "2023-05-13" },
          ]
          setPendingRequests(mockRequests)
        } else {
          // This would be a real API call in a production app
          // For now, we'll use the same mock data
          const mockRequests = [
            { id: "1", fromUserName: "Jane Smith", fromUserImage: "/woman-profile.png", createdAt: "2023-05-15" },
            { id: "2", fromUserName: "John Doe", fromUserImage: "/man-profile.png", createdAt: "2023-05-14" },
            { id: "3", fromUserName: "Alex Johnson", fromUserImage: "/abstract-profile.png", createdAt: "2023-05-13" },
          ]
          setPendingRequests(mockRequests)
        }
      } catch (error) {
        console.error("Error fetching pending requests:", error)
      }
    }

    fetchPendingRequests()
    // In a real app, you might want to set up a polling mechanism or use websockets
    const interval = setInterval(fetchPendingRequests, 30000)
    return () => clearInterval(interval)
  }, [isDemoMode])

  // Save collapsed state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isCollapsed.toString())
  }, [isCollapsed])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleLogout = () => {
    if (isDemoMode) {
      disableDemoMode()
    }
    // In a real app, this would also handle actual logout logic
    router.push("/")
  }

  // If mobile, render a collapsible sidebar
  if (isMobile) {
    return (
      <>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50" onClick={toggleSidebar}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />}

        <div
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transform transition-transform duration-200 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <SidebarContent
            pathname={pathname}
            onItemClick={() => setIsOpen(false)}
            hasRequests={hasRequests}
            pendingRequests={pendingRequests}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
        </div>
      </>
    )
  }

  // Desktop sidebar with collapse functionality
  return (
    <div
      className={cn(
        "hidden md:block bg-slate-900 border-r border-slate-800 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="relative h-full">
        <SidebarContent
          pathname={pathname}
          isCollapsed={isCollapsed}
          hasRequests={hasRequests}
          pendingRequests={pendingRequests}
          currentUser={currentUser}
          onLogout={handleLogout}
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleCollapsed}
          className="absolute -right-3 top-20 bg-slate-800 border border-slate-700 rounded-full h-6 w-6 p-0 flex items-center justify-center"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

function SidebarContent({
  pathname,
  onItemClick,
  isCollapsed = false,
  hasRequests = false,
  pendingRequests = [],
  currentUser,
  onLogout,
}: {
  pathname: string
  onItemClick?: () => void
  isCollapsed?: boolean
  hasRequests?: boolean
  pendingRequests?: any[]
  currentUser?: any
  onLogout?: () => void
}) {
  return (
    <div className="flex flex-col h-full">
      {/* User Profile Section at the top */}
      <div className={cn("p-4", isCollapsed && "p-2")}>
        <Link
          href="/app/profile"
          className={cn(
            "flex items-center p-2 rounded-lg transition-colors",
            isCollapsed ? "justify-center" : "space-x-3",
            pathname === "/app/profile" || pathname.startsWith("/app/profile/")
              ? "bg-slate-800"
              : "hover:bg-slate-800/60",
          )}
          onClick={onItemClick}
        >
          <Avatar className="h-8 w-8 border-2 border-gold-500">
            <AvatarImage src={currentUser?.avatar || "/placeholder.svg"} alt={currentUser?.name || "User"} />
            <AvatarFallback className="bg-gold-600 text-white">
              {currentUser?.name
                ?.split(" ")
                .map((n: string) => n[0])
                .join("") || "U"}
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">{currentUser?.name || "User"}</span>
              <span className="text-xs text-slate-400">@{currentUser?.username || "username"}</span>
            </div>
          )}
        </Link>
      </div>

      <div className={cn("px-3 py-2")}>
        <div className={cn("h-px bg-slate-800 w-full my-2")} />
      </div>

      <div className="flex-1 px-3 py-2">
        <nav className="space-y-1">
          {navItems.map((item) => {
            // Special case for Network item to add the notification badge
            if (item.name === "Network" && hasRequests) {
              return (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className={cn(
                      "flex items-center py-2 text-sm font-medium rounded-md",
                      isCollapsed ? "justify-center px-2" : "px-3",
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? "bg-slate-800 text-gold-300"
                        : "text-slate-300 hover:bg-slate-800 hover:text-gold-300",
                    )}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                    {!isCollapsed && item.name}
                    {hasRequests && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="ml-auto p-0 h-5 w-5">
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1.5 text-xs font-medium text-slate-900">
                              {pendingRequests.length}
                            </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80 bg-slate-800 border-slate-700 text-white">
                          <div className="p-2">
                            <h3 className="font-medium text-sm mb-2">Connection Requests</h3>
                            <ConnectionRequests requests={pendingRequests} />
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </Link>
                </div>
              )
            }

            // Default rendering for other nav items
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onItemClick}
                className={cn(
                  "flex items-center py-2 text-sm font-medium rounded-md",
                  isCollapsed ? "justify-center px-2" : "px-3",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "bg-slate-800 text-gold-300"
                    : "text-slate-300 hover:bg-slate-800 hover:text-gold-300",
                )}
                title={isCollapsed ? item.name : undefined}
              >
                <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                {!isCollapsed && item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className={cn("p-4 border-t border-slate-800", isCollapsed && "p-2")}>
        <button
          onClick={onLogout}
          className={cn(
            "text-slate-300 hover:text-white w-full flex",
            isCollapsed ? "justify-center p-2" : "justify-start px-3 py-2",
          )}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  )
}
