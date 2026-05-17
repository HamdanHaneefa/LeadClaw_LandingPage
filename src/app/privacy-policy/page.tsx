'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const logoSrc = '/logo.svg';

export default function PrivacyPolicy() {
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

          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="legal-content">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Lead Claw ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered CRM platform.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Register for an account</li>
                <li>Use our services</li>
                <li>Contact our support team</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p>This may include: name, email address, phone number, company name, and payment information.</p>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you use Lead Claw, we automatically collect certain information, including:</p>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3>2.3 Lead and Conversation Data</h3>
              <p>
                As part of our CRM service, we process lead information and conversation data that you input or that is collected through integrated messaging platforms (WhatsApp, Instagram, Facebook Messenger).
              </p>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and manage your account</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Train and improve our AI models</li>
                <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (hosting, analytics, payment processing)</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p>To exercise these rights, please contact us at privacy@leadclaw.ai</p>
            </section>

            <section>
              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2>9. Third-Party Services</h2>
              <p>
                Our service integrates with third-party platforms (WhatsApp, Instagram, Facebook). These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2>10. Children's Privacy</h2>
              <p>
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.
              </p>
            </section>

            <section>
              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2>13. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>Email: privacy@leadclaw.ai</li>
                <li>Email: hello@leadclaw.ai</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
