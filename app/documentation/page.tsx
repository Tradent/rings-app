import Link from "next/link"
import { Search, Book, Code, FileText, HelpCircle, ChevronRight, Bookmark } from "lucide-react"

import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample documentation categories
const categories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of Rings and set up your account",
    icon: Book,
    articles: [
      { title: "Creating your account", slug: "creating-account" },
      { title: "Setting up your profile", slug: "profile-setup" },
      { title: "Understanding the dashboard", slug: "dashboard-overview" },
      { title: "Your first connection", slug: "first-connection" },
    ],
  },
  {
    id: "network-visualization",
    title: "Network Visualization",
    description: "Visualize and analyze your professional network",
    icon: FileText,
    articles: [
      { title: "Network map overview", slug: "network-map" },
      { title: "Filtering connections", slug: "filtering-connections" },
      { title: "Connection strength metrics", slug: "connection-strength" },
      { title: "Exporting network data", slug: "export-data" },
    ],
  },
  {
    id: "ripple-campaigns",
    title: "Ripple Campaigns",
    description: "Create and manage effective ripple campaigns",
    icon: Code,
    articles: [
      { title: "Creating a campaign", slug: "create-campaign" },
      { title: "Targeting your audience", slug: "targeting" },
      { title: "Campaign analytics", slug: "campaign-analytics" },
      { title: "Optimizing performance", slug: "optimization" },
    ],
  },
  {
    id: "api-reference",
    title: "API Reference",
    description: "Integrate with the Rings API",
    icon: Code,
    articles: [
      { title: "Authentication", slug: "api-auth" },
      { title: "Users endpoints", slug: "users-api" },
      { title: "Connections endpoints", slug: "connections-api" },
      { title: "Campaigns endpoints", slug: "campaigns-api" },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    icon: HelpCircle,
    articles: [
      { title: "Account issues", slug: "account-issues" },
      { title: "Connection problems", slug: "connection-problems" },
      { title: "Campaign errors", slug: "campaign-errors" },
      { title: "Data synchronization", slug: "sync-issues" },
    ],
  },
]

// Popular articles
const popularArticles = [
  { title: "Setting up two-factor authentication", category: "Security" },
  { title: "Importing contacts from other platforms", category: "Migration" },
  { title: "Understanding connection strength metrics", category: "Network" },
  { title: "Creating your first ripple campaign", category: "Campaigns" },
]

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
              <p className="text-xl text-slate-300 mb-8">Everything you need to know about using Rings effectively.</p>
              <div className="relative max-w-2xl mx-auto">
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-4 pr-10 py-6 w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 text-lg"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Browse Documentation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="bg-gold-100 dark:bg-gold-900/20 p-3 rounded-lg mr-4">
                        <category.icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{category.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {category.articles.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/documentation/${category.id}/${article.slug}`}
                            className="text-sm text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 flex items-center"
                          >
                            <ChevronRight className="h-3 w-3 mr-1 text-gold-500" />
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/documentation/${category.id}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                      >
                        View All
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles & Resources */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="popular" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="popular">Popular Articles</TabsTrigger>
                  <TabsTrigger value="recent">Recently Updated</TabsTrigger>
                  <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="popular" className="space-y-4">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center">
                      <div className="bg-gold-100 dark:bg-gold-900/20 p-2 rounded-lg mr-4">
                        <Bookmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">{article.title}</h3>
                        <p className="text-sm text-slate-500">{article.category}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gold-500 hover:text-gold-600 hover:bg-gold-50 dark:hover:bg-gold-900/20"
                    >
                      Read
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="recent">
                <div className="text-center py-8">
                  <p className="text-slate-600 dark:text-slate-300">Check back soon for recently updated articles.</p>
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="text-center py-8">
                  <p className="text-slate-600 dark:text-slate-300">Video tutorials coming soon.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/guides">
                  <Button
                    variant="outline"
                    className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                  >
                    View Guides
                  </Button>
                </Link>
                <Link href="/support">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white">Contact Support</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
