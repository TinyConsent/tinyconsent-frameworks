/**
 * Next.js App Router Layout with TinyConsent
 * 
 * This example shows how to add TinyConsent to a Next.js 13+ app.
 * 
 * Get your script at: https://tinyconsent.com
 * Full guide: https://tinyconsent.com/cookie-banner-for-nextjs
 */

import Script from 'next/script';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app with TinyConsent cookie consent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 
          TinyConsent Cookie Banner
          Replace YOUR_SCRIPT_ID with your actual script ID
          Get yours at: https://tinyconsent.com
        */}
        <Script
          src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
          strategy="afterInteractive"
        />
        
        {/* 
          Google Analytics (optional)
          TinyConsent will block this until user consents
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

