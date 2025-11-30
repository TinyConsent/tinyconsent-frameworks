/**
 * Next.js Home Page Example
 * 
 * TinyConsent is loaded in the layout, so all pages automatically
 * have cookie consent functionality.
 */

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        This app uses TinyConsent for GDPR-compliant cookie consent.
        The banner appears automatically for new visitors.
      </p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Automatic script blocking until consent</li>
          <li>Google Consent Mode v2 integration</li>
          <li>Customizable via dashboard</li>
          <li>Under 5KB initial load</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://tinyconsent.com/cookie-banner-for-nextjs"
              className="text-blue-600 hover:underline"
            >
              Next.js Integration Guide
            </a>
          </li>
          <li>
            <a 
              href="https://tinyconsent.com/privacy-policy-generator"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy Generator
            </a>
          </li>
          <li>
            <a 
              href="https://tinyconsent.com/gdpr-cookie-requirements"
              className="text-blue-600 hover:underline"
            >
              GDPR Requirements
            </a>
          </li>
        </ul>
      </section>
      
      <footer className="pt-8 border-t border-gray-200">
        <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}

