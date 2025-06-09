import { MarketingHeader } from "@/components/marketing/marketing-header"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export const metadata = {
  title: "Privacy Policy | Rings",
  description: "Privacy Policy for the Rings platform.",
}

export default function PrivacyPage() {
  return (
    <>
      <MarketingHeader />
      <main className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                At Rings, we respect your privacy and are committed to protecting your personal data. This privacy
                policy will inform you about how we look after your personal data when you visit our website and use our
                services, and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="text-slate-600 mb-4">
                This privacy policy applies to all users of the Rings platform. Please read it carefully to understand
                our practices regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
              <p className="text-slate-600 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped
                together as follows:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier, title,
                  and profile picture.
                </li>
                <li>
                  <strong>Contact Data</strong> includes email address, telephone numbers, and social media handles.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                  and version, time zone setting and location, browser plug-in types and versions, operating system and
                  platform, and other technology on the devices you use to access our platform.
                </li>
                <li>
                  <strong>Profile Data</strong> includes your username and password, your interests, preferences,
                  feedback, and survey responses.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website and services.
                </li>
                <li>
                  <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                  from us and our third parties and your communication preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
              <p className="text-slate-600 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To register you as a new customer.</li>
                <li>To provide and manage your account.</li>
                <li>To provide the services you have requested.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, products/services, marketing, and customer relationships.</li>
                <li>To recommend products or services that may be of interest to you.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="text-slate-600 mb-4">
                We may share your personal data with the following categories of recipients:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>
                  <strong>Service Providers</strong> who provide IT and system administration services.
                </li>
                <li>
                  <strong>Professional Advisers</strong> including lawyers, bankers, auditors, and insurers who provide
                  consultancy, banking, legal, insurance, and accounting services.
                </li>
                <li>
                  <strong>Regulators and Other Authorities</strong> who require reporting of processing activities in
                  certain circumstances.
                </li>
                <li>
                  <strong>Third Parties</strong> to whom we may choose to sell, transfer, or merge parts of our business
                  or our assets.
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                We require all third parties to respect the security of your personal data and to treat it in accordance
                with the law. We do not allow our third-party service providers to use your personal data for their own
                purposes and only permit them to process your personal data for specified purposes and in accordance
                with our instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-slate-600 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors, and other third parties who have a business
                need to know.
              </p>
              <p className="text-slate-600 mb-4">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and
                any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-slate-600 mb-4">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
                for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p className="text-slate-600 mb-4">
                To determine the appropriate retention period for personal data, we consider the amount, nature, and
                sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your
                personal data, the purposes for which we process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Legal Rights</h2>
              <p className="text-slate-600 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                You will not have to pay a fee to access your personal data (or to exercise any of the other rights).
                However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.
                Alternatively, we may refuse to comply with your request in these circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-slate-600 mb-4">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-slate-600 mb-4">
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this privacy policy or our privacy practices, please contact us at
                privacy@ringsapp.com.
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
