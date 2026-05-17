import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://leadclaw-landingpage.onrender.com'),
  title: "Lead Claw - AI-Powered CRM for WhatsApp, Instagram & Facebook Lead Automation",
  description: "Lead Claw is the #1 AI-First Omnichannel CRM that automates lead qualification, follow-ups, and booking across WhatsApp, Instagram, and Facebook Messenger. Close more deals 24/7 with intelligent AI agents.",
  keywords: [
    "Lead Claw",
    "Lead Claw AI",
    "Lead Claw CRM",
    "AI CRM",
    "WhatsApp CRM",
    "WhatsApp automation",
    "Instagram lead automation",
    "Facebook Messenger CRM",
    "omnichannel CRM",
    "AI lead qualification",
    "automated lead follow-up",
    "AI booking system",
    "lead management software",
    "sales automation",
    "AI sales assistant",
    "multi-channel CRM",
    "conversational AI",
    "lead nurturing automation",
    "AI chatbot for sales",
    "automated appointment booking"
  ],
  authors: [{ name: "Lead Claw AI" }],
  creator: "Lead Claw AI",
  publisher: "Lead Claw AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leadclaw-landingpage.onrender.com",
    siteName: "Lead Claw - AI-Powered CRM",
    title: "Lead Claw - AI CRM That Closes Deals While You Sleep",
    description: "Automate your lead management with Lead Claw's AI-powered omnichannel CRM. Connect WhatsApp, Instagram, and Facebook to close more deals 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lead Claw AI-Powered CRM Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Claw - AI CRM That Closes Deals While You Sleep",
    description: "Automate your lead management with Lead Claw's AI-powered omnichannel CRM. Connect WhatsApp, Instagram, and Facebook to close more deals 24/7.",
    images: ["/og-image.png"],
    creator: "@leadclawai",
  },
  alternates: {
    canonical: "https://leadclaw-landingpage.onrender.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Lead Claw",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "4999",
                "highPrice": "49999",
                "offerCount": "3"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "127",
                "bestRating": "5"
              },
              "description": "AI-powered omnichannel CRM for WhatsApp, Instagram, and Facebook lead automation with intelligent agents that qualify, follow-up, and book meetings 24/7.",
              "featureList": [
                "WhatsApp Business Integration",
                "Instagram DM Automation",
                "Facebook Messenger Integration",
                "AI Lead Qualification",
                "Automated Follow-ups",
                "Smart Booking System",
                "Multi-Agent AI System",
                "Real-time Analytics"
              ],
              "screenshot": "https://leadclaw-landingpage.onrender.com/dashboard-preview.png"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lead Claw AI",
              "url": "https://leadclaw-landingpage.onrender.com",
              "logo": "https://leadclaw-landingpage.onrender.com/logo.svg",
              "description": "Lead Claw is an AI-powered omnichannel CRM that automates lead management across WhatsApp, Instagram, and Facebook.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@leadclaw.ai",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://twitter.com/leadclawai",
                "https://linkedin.com/company/leadclaw",
                "https://facebook.com/leadclawai"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Lead Claw?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lead Claw is an AI-powered omnichannel CRM that automates lead qualification, follow-ups, and booking across WhatsApp, Instagram, and Facebook Messenger. It uses intelligent AI agents to manage your leads 24/7."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Lead Claw's AI automation work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lead Claw uses three AI agents: The Sentry (instant response and qualification), The Persistent Nudger (automated follow-ups), and The Auditor (intent detection and autonomous booking). These agents work together to manage your entire lead pipeline automatically."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which platforms does Lead Claw integrate with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lead Claw integrates with WhatsApp Business, Instagram Direct Messages, Facebook Messenger, and web chat. All conversations are unified in one intelligent command center."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does Lead Claw cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Lead Claw offers three plans: Starter (₹4,999/month for 500 leads), Professional (₹14,999/month for 5,000 leads), and Enterprise (₹49,999/month for unlimited leads with custom AI training)."
                  }
                }
              ]
            })
          }}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#a511cf" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#a511cf" />
        <meta name="msapplication-TileImage" content="/logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
