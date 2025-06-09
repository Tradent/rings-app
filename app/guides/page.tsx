import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, BookOpen, Users, BarChart, Shield, Zap } from "lucide-react"

import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample guides data
const featuredGuides = [
  {
    id: "getting-started",
    title: "Getting Started with Rings",
    description: "A comprehensive guide to setting up your Rings account and making your first connections.",
    image: "/placeholder-mjyu1.png",
    readTime: "15 min",
    category: "Beginner",
    icon: BookOpen,
  },
  {
    id: "network-optimization",
    title: "Network Optimization Strategies",
    description: "Learn how to analyze and optimize your professional network for maximum impact.",
    image: "/abstract-network-banner.png",
    readTime: "20 min",
    category: "Intermediate",
    icon: Users,
  },
  {
    id: "ripple-campaigns",
    title: "Creating Effective Ripple Campaigns",
    description: "Step-by-step instructions for designing and launching successful ripple campaigns.",
    image: "/placeholder-4z667.png",
    readTime: "25 min",
    category: "Advanced",
    icon: Zap,
  },
]

const guideCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    guides: [
      { title: "Account Setup Guide", difficulty: "Beginner", readTime: "10 min" },
      { title: "Profile Optimization", difficulty: "Beginner", readTime: "12 min" },
      { title: "Understanding Your Dashboard", difficulty: "Beginner", readTime: "8 min" },
    ],
  },
  {
    id: "network-management",
    title: "Network Management",
    icon: Users,
    guides: [
      { title: "Building Your Network", difficulty: "Beginner", readTime: "15 min" },
      { title: "Connection Strategies", difficulty: "Intermediate", readTime: "18 min" },
      { title: "Network Analysis Techniques", difficulty: "Advanced", readTime: "22 min" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    icon: BarChart,
    guides: [
      { title: "Understanding Analytics", difficulty: "Intermediate", readTime: "14 min" },
      { title: "Custom Report Creation", difficulty: "Advanced", readTime: "20 min" },
      { title: "Data Export & Integration", difficulty: "Advanced", readTime: "16 min" },
    ],
  },
  {
    id: "security",
    title: "Security & Privacy",
    icon: Shield,
    guides: [
      { title: "Security Best Practices", difficulty: "Beginner", readTime: "12 min" },
      { title: "Privacy Settings Guide", difficulty: "Intermediate", readTime: "10 min" },
      { title: "Data Protection Compliance", difficulty: "Advanced", readTime: "18 min" },
    ],
  },
]

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Rings Guides</h1>
              <p className="text-xl text-slate-300 mb-8">
                Step-by-step tutorials and best practices to help you get the most out of Rings.
              </p>
              <Tabs defaultValue="all" className="w-full max-w-md mx-auto">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Guides</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredGuides.map((guide) => (
                <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {guide.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-gold-100 dark:bg-gold-900/20 p-2 rounded-lg mr-3">
                        <guide.icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{guide.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{guide.description}</p>
                    <Link href={`/guides/${guide.id}`}>
                      <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Read Guide</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {guideCategories.map((category) => (
                <Card key={category.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="bg-gold-100 dark:bg-gold-900/20 p-3 rounded-lg mr-4">
                        <category.icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <div className="space-y-4 mb-6">
                      {category.guides.map((guide, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <div>
                            <h4 className="font-medium">{guide.title}</h4>
                            <div className="flex items-center text-xs text-slate-500 mt-1">
                              <span
                                className={`mr-3 px-2 py-0.5 rounded-full ${
                                  guide.difficulty === "Beginner"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : guide.difficulty === "Intermediate"
                                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                      : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                }`}
                              >
                                {guide.difficulty}
                              </span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{guide.readTime}</span>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-slate-400" />
                        </div>
                      ))}
                    </div>
                    <Link href={`/guides/categories/${category.id}`}>
                      <Button
                        variant="outline"
                        className="w-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                      >
                        View All {category.title} Guides
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Request Guide */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                If you're looking for a specific guide that isn't available yet, let us know and we'll create it for
                you.
              </p>
              <Button className="bg-gold-500 hover:bg-gold-600 text-white">Request a Guide</Button>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
