import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, ChevronRight } from "lucide-react"

import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Sample blog posts data
const featuredPost = {
  id: "network-visualization-tips",
  title: "5 Advanced Network Visualization Tips for Power Users",
  excerpt:
    "Learn how to leverage Rings' advanced network visualization features to gain deeper insights into your professional connections and identify key opportunities.",
  date: "May 10, 2025",
  readTime: "8 min read",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    image: "/professional-woman-headshot.png",
  },
  image: "/placeholder-mjyu1.png",
  category: "Tips & Tricks",
}

const recentPosts = [
  {
    id: "ripple-campaigns-guide",
    title: "The Complete Guide to Creating Effective Ripple Campaigns",
    excerpt:
      "Discover how to design, launch, and measure high-performing ripple campaigns that expand your network reach.",
    date: "May 5, 2025",
    readTime: "12 min read",
    author: {
      name: "Jordan Lee",
      role: "Marketing Director",
      image: "/professional-man-headshot.png",
    },
    image: "/placeholder-4z667.png",
    category: "Guides",
  },
  {
    id: "blockchain-integration",
    title: "How Blockchain Integration is Revolutionizing Professional Networking",
    excerpt:
      "Explore how Rings' blockchain integration provides unprecedented security, verification, and trust in professional networking.",
    date: "April 28, 2025",
    readTime: "10 min read",
    author: {
      name: "Samira Khan",
      role: "Technology Analyst",
      image: "/tech-woman-profile.png",
    },
    image: "/abstract-network-banner.png",
    category: "Technology",
  },
  {
    id: "analytics-insights",
    title: "Extracting Actionable Insights from Your Network Analytics",
    excerpt:
      "Learn how to interpret your network analytics data to make informed decisions about your networking strategy.",
    date: "April 22, 2025",
    readTime: "7 min read",
    author: {
      name: "Marcus Chen",
      role: "Data Scientist",
      image: "/man-profile.png",
    },
    image: "/placeholder-mjyu1.png",
    category: "Analytics",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Rings Blog</h1>
              <p className="text-xl text-slate-300 mb-8">
                Insights, guides, and news about professional networking, ripple campaigns, and making meaningful
                connections.
              </p>
              <div className="relative max-w-md mx-auto">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-4 pr-10 py-2 w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 relative h-[300px] md:h-auto rounded-xl overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={featuredPost.author.image || "/placeholder.svg"}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <p className="text-sm text-slate-500">{featuredPost.author.role}</p>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-slate-500 mb-6">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                    Read Article
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.image || "/placeholder.svg"}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{post.author.name}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-slate-500 mb-4">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                      >
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Get the latest articles, guides, and networking tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-gold-500 hover:bg-gold-600 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
