import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://yourusername.github.io/Lead-Claw_Landing_Page'),
  title: "Lead Claw | The Intelligence Command Center for Lead Automation",
  description: "Scale your sales with Lead Claw, the premium omnichannel AI CRM. Automated WhatsApp, Messenger, and Instagram lead engagement with autonomous booking and 24/7 follow-up.",
  keywords: ["Lead Claw", "AI CRM", "WhatsApp Automation", "Lead Management", "Omnichannel Marketing", "Sales Automation"],
  openGraph: {
    title: "Lead Claw | The Intelligence Command Center",
    description: "The ultimate tool for lead closing and 24/7 automated follow-up.",
    type: "website",
    url: "https://yourusername.github.io/Lead-Claw_Landing_Page",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CRM Intelligence Dashboard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
