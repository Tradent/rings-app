import { Button } from "@/components/ui/button"
import { Check, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">Pricing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that's right for you and start growing your professional network today.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1 rounded-lg inline-flex">
            <button className="px-6 py-2 rounded-md bg-gradient-to-r from-gold-400 to-gold-600 text-slate-900 font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-md text-slate-300 font-medium">Annually</button>
          </div>
          <div className="ml-4 bg-gold-500/20 text-gold-300 text-sm px-3 py-1 rounded-full">Save 20%</div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Free Plan */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Free</h2>
              <p className="text-slate-300 mb-6">Perfect for exploring and getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-slate-400 ml-2">/ month</span>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">Get Started</Button>
            </div>
            <div className="border-t border-slate-700 p-8">
              <h3 className="font-semibold mb-4">What's included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Up to 50 network connections</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Basic network visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">5 ripple campaigns per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Standard analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Email support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-800/50 rounded-xl border-2 border-gold-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-400 to-gold-600 text-slate-900 text-sm font-medium px-4 py-1">
              Most Popular
            </div>
            <div className="p-8 pt-12">
              <h2 className="text-2xl font-bold mb-4">Pro</h2>
              <p className="text-slate-300 mb-6">For professionals serious about networking</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-slate-400 ml-2">/ month</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900">
                Start Free Trial
              </Button>
            </div>
            <div className="border-t border-slate-700 p-8">
              <h3 className="font-semibold mb-4">Everything in Free, plus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Unlimited network connections</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Advanced network visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">25 ripple campaigns per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Advanced analytics and reporting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Priority email support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">AI-powered recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Blockchain wallet integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
              <p className="text-slate-300 mb-6">For teams and organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-slate-400 ml-2">/ month</span>
              </div>
              <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white">Contact Sales</Button>
            </div>
            <div className="border-t border-slate-700 p-8">
              <h3 className="font-semibold mb-4">Everything in Pro, plus:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Shared network visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Unlimited ripple campaigns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Custom analytics dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">API access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">SSO and advanced security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-slate-800/30 rounded-xl border border-slate-700 overflow-hidden mb-20">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Compare Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left pb-4 pr-4">Feature</th>
                    <th className="text-center pb-4 px-4">Free</th>
                    <th className="text-center pb-4 px-4 text-gold-400">Pro</th>
                    <th className="text-center pb-4 pl-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 pr-4 text-slate-300">
                      <div className="flex items-center">
                        Network Connections
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-slate-500 ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-60">The number of connections you can add to your network.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">50</td>
                    <td className="text-center py-4 px-4 text-gold-400">Unlimited</td>
                    <td className="text-center py-4 pl-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 pr-4 text-slate-300">
                      <div className="flex items-center">
                        Ripple Campaigns
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-slate-500 ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-60">Targeted outreach campaigns you can create each month.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">5/month</td>
                    <td className="text-center py-4 px-4 text-gold-400">25/month</td>
                    <td className="text-center py-4 pl-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 pr-4 text-slate-300">Network Visualization</td>
                    <td className="text-center py-4 px-4">Basic</td>
                    <td className="text-center py-4 px-4 text-gold-400">Advanced</td>
                    <td className="text-center py-4 pl-4">Advanced + Shared</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 pr-4 text-slate-300">Analytics</td>
                    <td className="text-center py-4 px-4">Standard</td>
                    <td className="text-center py-4 px-4 text-gold-400">Advanced</td>
                    <td className="text-center py-4 pl-4">Custom</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 pr-4 text-slate-300">AI Recommendations</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4 text-gold-400">
                      <Check className="h-5 w-5 text-gold-400 inline" />
                    </td>
                    <td className="text-center py-4 pl-4">
                      <Check className="h-5 w-5 text-gold-400 inline" />
                    </td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-4 pr-4 text-slate-300">Blockchain Integration</td>
                    <td className="text-center py-4 px-4">—</td>
                    <td className="text-center py-4 px-4 text-gold-400">
                      <Check className="h-5 w-5 text-gold-400 inline" />
                    </td>
                    <td className="text-center py-4 pl-4">
                      <Check className="h-5 w-5 text-gold-400 inline" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 text-slate-300">Support</td>
                    <td className="text-center py-4 px-4">Email</td>
                    <td className="text-center py-4 px-4 text-gold-400">Priority Email</td>
                    <td className="text-center py-4 pl-4">Dedicated Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Can I change plans later?</h3>
              <p className="text-slate-300">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take
                effect immediately.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Is there a free trial?</h3>
              <p className="text-slate-300">
                Yes, we offer a 14-day free trial of our Pro plan. No credit card required to start your trial.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
              <p className="text-slate-300">
                We accept all major credit cards, PayPal, and select cryptocurrencies including SOL and ETH.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3">Can I get a refund?</h3>
              <p className="text-slate-300">
                We offer a 30-day money-back guarantee. If you're not satisfied with Rings, contact us within 30 days of
                your purchase for a full refund.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-10 rounded-2xl border border-slate-700 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your networking?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who are growing their influence and opportunities with Rings.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-slate-900"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
