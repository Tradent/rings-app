import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export const metadata = {
  title: "Terms of Service | Rings",
  description: "Terms of Service for using the Rings platform.",
}

export default function TermsPage() {
  return (
    <>
      <MarketingHeader />
      <main className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                Welcome to Rings. These Terms of Service govern your use of our website, products, and services.
              </p>
              <p className="text-slate-600 mb-4">
                By accessing or using the Rings platform, you agree to be bound by these Terms. If you disagree with any
                part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Service</strong> refers to the Rings platform accessible via our website.
                </li>
                <li>
                  <strong>User</strong> refers to the individual accessing or using the Service, or the company, or
                  other legal entity on behalf of which such individual is accessing or using the Service.
                </li>
                <li>
                  <strong>Account</strong> means a unique account created for You to access our Service or parts of our
                  Service.
                </li>
                <li>
                  <strong>Content</strong> refers to data and information submitted by users to the Service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
              <p className="text-slate-600 mb-4">
                To use certain features of the Service, you must register for an account. You must provide accurate,
                current, and complete information during the registration process.
              </p>
              <p className="text-slate-600 mb-4">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
              <p className="text-slate-600 mb-4">
                Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, or other material. You are responsible for the Content that you post to the Service,
                including its legality, reliability, and appropriateness.
              </p>
              <p className="text-slate-600 mb-4">
                By posting Content to the Service, you grant us the right and license to use, modify, perform, display,
                reproduce, and distribute such Content on and through the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-slate-600 mb-4">
                The Service and its original content (excluding Content provided by users), features, and functionality
                are and will remain the exclusive property of Rings and its licensors.
              </p>
              <p className="text-slate-600 mb-4">
                The Service is protected by copyright, trademark, and other laws of both the United States and foreign
                countries. Our trademarks and trade dress may not be used in connection with any product or service
                without the prior written consent of Rings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Subscription and Billing</h2>
              <p className="text-slate-600 mb-4">
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a
                recurring and periodic basis, depending on the type of subscription plan you select.
              </p>
              <p className="text-slate-600 mb-4">
                At the end of each period, your subscription will automatically renew under the same conditions unless
                you cancel it or Rings cancels it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-slate-600 mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-slate-600 mb-4">
                Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                In no event shall Rings, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
              <p className="text-slate-600 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                effect.
              </p>
              <p className="text-slate-600 mb-4">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms, please contact us at legal@ringsapp.com.
              </p>
            </section>

            <div className="border-t border-slate-200 pt-6 text-slate-500 text-sm">Last updated: May 17, 2025</div>
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  )
}
