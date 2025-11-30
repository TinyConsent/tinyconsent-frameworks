# Troubleshooting Guide

Common issues and solutions for TinyConsent across all frameworks.

## Banner Not Appearing

### Check Script Placement

The script must be in the `<head>` section:

```html
<head>
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
</head>
```

### Verify Script ID

1. Log into [TinyConsent Dashboard](https://tinyconsent.com/dashboard)
2. Copy your script code
3. Compare with what's on your site

### Clear Cache

- **Browser**: Clear cache or use incognito mode
- **CDN**: Clear Cloudflare or other CDN cache
- **CMS**: Clear WordPress, Shopify, etc. cache

### Check for Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for error messages

### Ad Blockers

Some ad blockers may block cookie consent scripts. Test with ad blockers disabled.

## Banner Appears Multiple Times

### Duplicate Scripts

Ensure only ONE TinyConsent script tag exists:

```html
<!-- ❌ Wrong -->
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>

<!-- ✅ Correct -->
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

### Conflicting Solutions

Disable other cookie consent solutions before using TinyConsent.

## Scripts Not Being Blocked

### Script Load Order

TinyConsent must load BEFORE tracking scripts:

```html
<!-- ✅ Correct -->
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>

<!-- ❌ Wrong -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

### Inline Scripts

Move inline tracking code to external scripts where possible.

## Consent Not Remembered

### localStorage Blocked

Some browsers block localStorage:
- Safari with tracking prevention
- Firefox with Enhanced Tracking Protection
- Incognito mode in some browsers

### Multiple Domains

Consent is stored per-domain. Each domain needs its own consent.

## Framework-Specific Issues

### Next.js

Use the `Script` component to avoid hydration warnings:

```tsx
import Script from 'next/script';

<Script
  src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
  strategy="afterInteractive"
/>
```

### WordPress

Clear these caches after adding TinyConsent:
- WP Super Cache
- W3 Total Cache
- WP Rocket
- Cloudflare

### Shopify

- Clear theme cache
- Test on non-cached URL

### React/Vue

Ensure script is in `index.html`, not loaded dynamically.

## Performance Issues

### Slow Load

TinyConsent is under 5KB. If you notice slowdowns:

1. Verify `async` attribute is present
2. Check for duplicate scripts
3. Test without other scripts

### Core Web Vitals

TinyConsent is optimized for CWV:
- Async loading
- Minimal JavaScript
- No layout shifts

## Still Having Issues?

1. Check [TinyConsent FAQ](https://tinyconsent.com/cookie-banner-generator)
2. Read [What is a Cookie Banner?](https://tinyconsent.com/what-is-a-cookie-banner)
3. Visit [tinyconsent.com](https://tinyconsent.com)

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Google Consent Mode Guide](./google-consent-mode.md)
- [Script Blocking Guide](./script-blocking.md)

