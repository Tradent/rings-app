import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Users Say</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how professionals across industries are using Rings to transform their networking and grow their
            influence.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 relative">
            <Quote className="absolute text-gold-500/20 h-24 w-24 -top-4 -left-4" />
            <div className="relative">
              <p className="text-xl text-slate-200 mb-8 italic">
                "Rings has completely transformed how I approach professional networking. The visualization tool helped
                me identify key connections I was overlooking, and the ripple campaigns have generated more quality
                leads than any other outreach method I've tried. It's been a game-changer for my consulting business."
              </p>
              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/professional-woman-headshot.png"
                    alt="Sarah Johnson"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gold-400">Sarah Johnson</h3>
                  <p className="text-slate-400">Founder & CEO, Catalyst Consulting</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 relative">
            <Quote className="absolute text-gold-500/20 h-24 w-24 -top-4 -left-4" />
            <div className="relative">
              <p className="text-xl text-slate-200 mb-8 italic">
                "As a sales director, I need to keep track of hundreds of relationships. Rings gives me a clear picture
                of my entire network and helps me prioritize the most valuable connections. The analytics have helped me
                coach my team to better results, and we've seen a 40% increase in conversion rates since implementing
                Rings."
              </p>
              <div className="flex items-center">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/professional-man-headshot.png"
                    alt="Michael Chen"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gold-400">Michael Chen</h3>
                  <p className="text-slate-400">Sales Director, TechGrowth Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <Quote className="text-gold-500/30 h-10 w-10 mb-4" />
            <p className="text-slate-300 mb-6">
              "The blockchain wallet integration is brilliant. I love being able to connect with other Web3
              professionals securely and build my network in this emerging space."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/tech-woman-profile.png"
                  alt="Elena Rodriguez"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gold-400">Elena Rodriguez</h3>
                <p className="text-sm text-slate-400">Blockchain Developer</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <Quote className="text-gold-500/30 h-10 w-10 mb-4" />
            <p className="text-slate-300 mb-6">
              "As an introvert, networking has always been challenging for me. Rings makes it more strategic and less
              overwhelming. I can focus on quality connections rather than quantity."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/placeholder-mjyu1.png"
                  alt="David Park"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gold-400">David Park</h3>
                <p className="text-sm text-slate-400">UX Designer, DesignLab</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <Quote className="text-gold-500/30 h-10 w-10 mb-4" />
            <p className="text-slate-300 mb-6">
              "The analytics in Rings have helped me understand which parts of my network are most valuable. I've been
              able to focus my time on the relationships that drive real business results."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/placeholder-4z667.png"
                  alt="Aisha Johnson"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gold-400">Aisha Johnson</h3>
                <p className="text-sm text-slate-400">Marketing Director</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <Quote className="text-gold-500/30 h-10 w-10 mb-4" />
            <p className="text-slate-300 mb-6">
              "I've tried many CRM and networking tools, but Rings is the first one that actually makes managing
              relationships enjoyable. The visualization aspect is both useful and beautiful."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=entrepreneur man profile"
                  alt="James Wilson"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gold-400">James Wilson</h3>
                <p className="text-sm text-slate-400">Entrepreneur & Investor</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <Quote className="text-gold-500/30 h-10 w-10 mb-4" />
            <p className="text-slate-300 mb-6">
              "The ripple campaigns feature has revolutionized how I approach outreach. I'm reaching more people with
              less effort, and the response rates are significantly higher."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=business woman headshot"
                  alt="Sophia Lee"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gold-400">Sophia Lee</h3>
                <p className="text-sm text-slate-400">Business Development</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <Quote className="text-gold-500/30 h-10 w-10 mb-4" />
            <p className="text-slate-300 mb-6">
              "As someone who works in venture capital, relationships are everything. Rings helps me keep track of my
              vast network and ensures no valuable connection falls through the cracks."
            </p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=venture capitalist man"
                  alt="Robert Garcia"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gold-400">Robert Garcia</h3>
                <p className="text-sm text-slate-400">Partner, Horizon Ventures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/30 p-10 rounded-xl border border-slate-700 mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">The Impact of Rings</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gold-400 mb-2">93%</p>
              <p className="text-slate-300">of users report improved networking efficiency</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-400 mb-2">2.5x</p>
              <p className="text-slate-300">average increase in valuable connections</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-400 mb-2">40%</p>
              <p className="text-slate-300">higher response rates to outreach</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-400 mb-2">10k+</p>
              <p className="text-slate-300">professionals using Rings daily</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 text-center">
          <h2 className="text-3xl font-bold mb-6">Join our growing community</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Experience the benefits that thousands of professionals are already enjoying with Rings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900"
            >
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
