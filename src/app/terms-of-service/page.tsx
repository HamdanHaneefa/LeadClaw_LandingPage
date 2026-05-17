'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const logoSrc = '/logo.svg';

export default function TermsOfService() {
  return (
    <main className="main-wrapper">
      <div className="glow-mesh" />

      {/* ─── NAVBAR ────────────────────────────────────────────── */}
      <nav className="nav-container">
        <div className="container">
          <div className="nav-inner glass">
            <a href="/" className="logo-section">
              <div className="logo-box">
                <img src={logoSrc} alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              </div>
              <span className="logo-text">Lead Claw</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── CONTENT ────────────────────────────────────────────── */}
      <section className="legal-section">
        <div className="container">
          <Link href="/" className="back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="legal-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using Lead Claw ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2>2. Description of Service</h2>
              <p>
                Lead Claw is an AI-powered omnichannel CRM platform that helps businesses manage leads, automate follow-ups, and schedule appointments through integrated messaging platforms including WhatsApp, Instagram, and Facebook Messenger.
              </p>
            </section>

            <section>
              <h2>3. User Accounts</h2>
              <h3>3.1 Account Creation</h3>
              <p>To use our Service, you must create an account and provide accurate, complete information. You are responsible for:</p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>

              <h3>3.2 Account Eligibility</h3>
              <p>You must be at least 18 years old and have the legal capacity to enter into contracts to use our Service.</p>
            </section>

            <section>
              <h2>4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Send spam or unsolicited messages</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Use the Service to harass, abuse, or harm others</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or store personal data about other users without permission</li>
                <li>Use automated systems to access the Service without authorization</li>
              </ul>
            </section>

            <section>
              <h2>5. AI Services and Limitations</h2>
              <p>
                Our AI-powered features are provided "as is." While we strive for accuracy, AI-generated responses may contain errors. You are responsible for reviewing and approving all automated communications before they are sent to your leads.
              </p>
            </section>

            <section>
              <h2>6. Data and Privacy</h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy. You retain ownership of your data, but grant us a license to use it to provide and improve the Service.
              </p>
            </section>

            <section>
              <h2>7. Third-Party Integrations</h2>
              <p>
                Lead Claw integrates with third-party platforms (WhatsApp, Instagram, Facebook). Your use of these integrations is subject to their respective terms of service. We are not responsible for the availability or functionality of third-party services.
              </p>
            </section>

            <section>
              <h2>8. Fees and Payment</h2>
              <h3>8.1 Subscription Fees</h3>
              <p>
                Access to certain features requires a paid subscription. Fees are billed in advance on a monthly or annual basis and are non-refundable except as required by law.
              </p>

              <h3>8.2 Price Changes</h3>
              <p>
                We reserve the right to modify our pricing. We will provide advance notice of any price changes, and changes will take effect at the start of your next billing cycle.
              </p>

              <h3>8.3 Payment Information</h3>
              <p>
                You agree to provide current, complete, and accurate payment information. You authorize us to charge your payment method for all fees incurred.
              </p>
            </section>

            <section>
              <h2>9. Cancellation and Termination</h2>
              <h3>9.1 Cancellation by You</h3>
              <p>
                You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period.
              </p>

              <h3>9.2 Termination by Us</h3>
              <p>
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent or illegal activity.
              </p>

              <h3>9.3 Effect of Termination</h3>
              <p>
                Upon termination, your right to use the Service will immediately cease. We may delete your data after a reasonable period following termination.
              </p>
            </section>

            <section>
              <h2>10. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Lead Claw and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2>11. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2>12. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEAD CLAW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </section>

            <section>
              <h2>13. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Lead Claw and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2>14. Dispute Resolution</h2>
              <p>
                Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.
              </p>
            </section>

            <section>
              <h2>15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Lead Claw operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2>16. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2>17. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2>18. Entire Agreement</h2>
              <p>
                These Terms constitute the entire agreement between you and Lead Claw regarding the Service and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2>19. Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <ul>
                <li>Email: legal@leadclaw.ai</li>
                <li>Email: hello@leadclaw.ai</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
