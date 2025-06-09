import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Radio, Users, BarChart3, Shield, Zap, Lock, Globe, MessageSquare } from "lucide-react"
import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
              Professional Network
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how Rings helps you visualize, grow, and leverage your network with our comprehensive suite of
            features.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="h-14 w-14 rounded-lg bg-gold-500/20 flex items-center justify-center mb-6">
              <Radio className="h-7 w-7 text-gold-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Ripple Campaigns</h2>
            <p className="text-slate-300 mb-6">
              Create targeted outreach campaigns that ripple through your network, reaching the right people at the
              right time. Our intelligent algorithm ensures your message reaches the most relevant connections.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Multi-channel campaign delivery
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Audience segmentation and targeting
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Performance analytics and optimization
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Automated follow-ups and engagement
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="h-14 w-14 rounded-lg bg-gold-500/20 flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-gold-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Network Visualization</h2>
            <p className="text-slate-300 mb-6">
              See your entire professional network in an interactive visualization that reveals connections,
              relationships, and opportunities you might have missed. Identify key influencers and potential
              introductions.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Interactive network graph
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Connection strength indicators
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Cluster and group analysis
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Path finding between contacts
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="h-14 w-14 rounded-lg bg-gold-500/20 flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-gold-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Advanced Analytics</h2>
            <p className="text-slate-300 mb-6">
              Gain insights into your network's growth, engagement, and influence with comprehensive analytics. Track
              your progress and identify areas for improvement with detailed metrics and reports.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Network growth metrics
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Engagement and response rates
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Influence score tracking
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Custom reports and dashboards
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="h-14 w-14 rounded-lg bg-gold-500/20 flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-gold-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Privacy Controls</h2>
            <p className="text-slate-300 mb-6">
              Maintain control over your data with granular privacy settings and secure connection management. Choose
              what information is shared and with whom, ensuring your network remains private and secure.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Granular visibility settings
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Data encryption and protection
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> Connection approval workflows
              </li>
              <li className="flex items-start">
                <span className="text-gold-400 mr-2">•</span> GDPR and privacy compliance
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <div className="h-12 w-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Recommendations</h3>
            <p className="text-slate-300">
              Get intelligent suggestions for new connections, content, and outreach opportunities based on your network
              and goals.
            </p>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <div className="h-12 w-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Blockchain Integration</h3>
            <p className="text-slate-300">
              Connect your Solana or Ethereum wallet for secure authentication and access to exclusive blockchain-based
              features.
            </p>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <div className="h-12 w-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cross-Platform Sync</h3>
            <p className="text-slate-300">
              Synchronize your network across devices and platforms, ensuring you always have access to your connections
              and campaigns.
            </p>
          </div>

          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
            <div className="h-12 w-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrated Messaging</h3>
            <p className="text-slate-300">
              Communicate directly with your connections through our secure messaging system, keeping all your
              professional communications in one place.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience these features?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who are growing their influence and opportunities with Rings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900"
            >
              Start Free Trial
            </Button>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
