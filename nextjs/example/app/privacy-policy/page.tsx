/**
 * Privacy Policy Page Example
 * 
 * Embeds your TinyConsent privacy policy.
 * Generate your policy at: https://tinyconsent.com/privacy-policy-generator
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      
      {/* 
        Embed your TinyConsent privacy policy
        Replace YOUR_POLICY_ID with your actual policy ID
        Generate at: https://tinyconsent.com/privacy-policy-generator
      */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <iframe 
          src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
          className="w-full min-h-[800px] border-0"
          title="Privacy Policy"
        />
      </div>
      
      <p className="mt-6 text-sm text-gray-500">
        Questions about our privacy practices? Contact us at privacy@example.com
      </p>
    </main>
  );
}

