import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceLab — A/B Test Pricing Pages Without Engineering",
  description: "No-code tool for startups to A/B test different pricing strategies and page layouts with conversion tracking. Built for non-technical founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="157a27a4-840a-4fee-861c-dbea7feeaaf9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
