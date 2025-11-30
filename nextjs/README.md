# TinyConsent for Next.js

Add GDPR-compliant cookie consent to your Next.js application.

**Full guide**: [tinyconsent.com/cookie-banner-for-nextjs](https://tinyconsent.com/cookie-banner-for-nextjs)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to Your App

#### App Router (Next.js 13+)

**app/layout.tsx**:
```tsx
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

#### Pages Router

**pages/_app.tsx**:
```tsx
import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
```

### 3. Done!

Your cookie banner will now appear on all pages.

## With Google Analytics

```tsx
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* TinyConsent - Load first */}
        <Script
          src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics - Blocked until consent */}
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
```

## Script Loading Strategies

| Strategy | When to Use |
|----------|-------------|
| `afterInteractive` | Recommended for TinyConsent |
| `beforeInteractive` | For critical scripts |
| `lazyOnload` | For non-essential scripts |

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_TINYCONSENT_SCRIPT_ID=your-script-id
```

```tsx
<Script
  src={`https://scripts.tinyconsent.com/api/scripts/${process.env.NEXT_PUBLIC_TINYCONSENT_SCRIPT_ID}`}
  strategy="afterInteractive"
/>
```

## Adding Privacy Policy

Add a privacy policy page:

```tsx
// app/privacy-policy/page.tsx
export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <iframe 
        src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
        className="w-full min-h-[800px] border-0"
        title="Privacy Policy"
      />
    </main>
  );
}
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## Troubleshooting

### Hydration Warnings

Use the Next.js `Script` component instead of `<script>` tags to avoid hydration issues.

### Banner Not Appearing

- Clear localStorage: `localStorage.clear()`
- Test in incognito mode
- Check browser console for errors

### Scripts Still Running Before Consent

Ensure TinyConsent loads before other tracking scripts in your layout.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Google Consent Mode Guide](../common/google-consent-mode.md)
- [Troubleshooting](../common/troubleshooting.md)

