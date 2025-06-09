import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Radio, Users, BarChart3, Shield } from "lucide-react"
import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { TryDemoButton } from "@/components/try-demo-button"
import { DemoProvider } from "@/contexts/demo-context"

export default function LandingPage() {
  return (
    <DemoProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <MarketingHeader />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Expand Your Network with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Ripples</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-10">
            Rings helps you visualize, grow, and leverage your professional network through strategic connections and
            targeted campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900"
            >
              Start Free Trial
            </Button>
            <TryDemoButton size="lg">Try Demo</TryDemoButton>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">Powerful Network Management Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="h-12 w-12 rounded-lg bg-gold-500/20 flex items-center justify-center mb-4">
                <Radio className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ripple Campaigns</h3>
              <p className="text-slate-300">
                Create targeted outreach campaigns that ripple through your network, reaching the right people at the
                right time.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="h-12 w-12 rounded-lg bg-gold-500/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Network Visualization</h3>
              <p className="text-slate-300">
                See your entire professional network in an interactive visualization that reveals connections and
                opportunities.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="h-12 w-12 rounded-lg bg-gold-500/20 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-slate-300">
                Gain insights into your network's growth, engagement, and influence with comprehensive analytics.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="h-12 w-12 rounded-lg bg-gold-500/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy Controls</h3>
              <p className="text-slate-300">
                Maintain control over your data with granular privacy settings and secure connection management.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/features">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Explore All Features
              </Button>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to expand your network?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Join thousands of professionals who are growing their influence and opportunities with Rings.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </DemoProvider>
  )
}
