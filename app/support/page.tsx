import Link from "next/link"
import { MessageSquare, Phone, Mail, FileText, Search, HelpCircle, BookOpen, Zap } from "lucide-react"

import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample FAQs
const faqs = [
  {
    question: "How do I create my first ripple campaign?",
    answer:
      "To create your first ripple campaign, navigate to the Campaigns section from your dashboard and click on the 'Create Campaign' button. Follow the step-by-step wizard to set up your campaign audience, content, and schedule. You can preview your campaign before launching it to ensure everything looks perfect.",
  },
  {
    question: "Can I import my existing contacts?",
    answer:
      "Yes, Rings supports importing contacts from various platforms including CSV files, Google Contacts, LinkedIn, and more. Go to the Contacts section, click on 'Import Contacts', and follow the instructions for your preferred import method. You can map fields and review contacts before finalizing the import.",
  },
  {
    question: "How is connection strength calculated?",
    answer:
      "Connection strength is calculated using our proprietary algorithm that considers factors such as interaction frequency, reciprocity, recency of communication, and shared connections. The strength is represented on a scale from 1-100, with higher numbers indicating stronger connections. You can view detailed metrics by clicking on any connection in your network visualization.",
  },
  {
    question: "What's the difference between connections and ripples?",
    answer:
      "Connections are the direct relationships you have with individuals in your network. Ripples are strategic campaigns or communications that extend beyond your direct connections to reach a broader audience through your network's connections. Think of connections as your network nodes and ripples as the waves of influence you create through them.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Yes, we take data security and privacy very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regular audits to ensure your information remains protected. You have complete control over your privacy settings and can determine what information is visible to others in your network.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time by going to Settings > Billing > Subscription and clicking on 'Cancel Subscription'. Your account will remain active until the end of your current billing period. You can also downgrade to our free tier instead of canceling completely to maintain basic access to your network.",
  },
]

// Support categories
const supportCategories = [
  {
    title: "Account & Billing",
    icon: FileText,
    description: "Manage your account, subscription, and billing information",
  },
  {
    title: "Network Management",
    icon: Zap,
    description: "Help with managing your connections and network visualization",
  },
  {
    title: "Campaigns & Ripples",
    icon: BookOpen,
    description: "Support for creating and optimizing your campaigns",
  },
  {
    title: "Technical Issues",
    icon: HelpCircle,
    description: "Troubleshooting and resolving technical problems",
  },
]

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How Can We Help?</h1>
              <p className="text-xl text-slate-300 mb-8">
                Find answers, get support, and resolve issues with your Rings account.
              </p>
              <div className="relative max-w-2xl mx-auto">
                <Input
                  type="search"
                  placeholder="Search for help..."
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

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Support Options</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gold-100 dark:bg-gold-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Chat with our support team in real-time for immediate assistance.
                  </p>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white w-full">Start Chat</Button>
                  <p className="text-sm text-slate-500 mt-4">Available Monday-Friday, 9am-5pm EST</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gold-100 dark:bg-gold-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email Support</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white w-full">Email Us</Button>
                  <p className="text-sm text-slate-500 mt-4">support@ringsapp.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gold-100 dark:bg-gold-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Speak directly with a support representative for complex issues.
                  </p>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white w-full">Call Us</Button>
                  <p className="text-sm text-slate-500 mt-4">Available for Pro and Enterprise plans</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {supportCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gold-100 dark:bg-gold-900/20 p-3 rounded-lg mb-4">
                        <category.icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{category.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                      >
                        View Articles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link href="/documentation">
                  <Button
                    variant="outline"
                    className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white"
                  >
                    View All Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-2 text-center">Still Need Help?</h2>
              <p className="text-center text-slate-600 dark:text-slate-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Please describe your issue in detail" rows={5} />
                    </div>
                    <div className="pt-2">
                      <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">Submit Request</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  )
}
