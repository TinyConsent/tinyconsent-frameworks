# Script Blocking Guide

How TinyConsent blocks tracking scripts until consent.

## How It Works

TinyConsent automatically detects and blocks common tracking scripts until user consent.

## Blocked Categories

| Category | Examples | Blockable |
|----------|----------|-----------|
| Necessary | Session cookies | No |
| Analytics | GA, Mixpanel | Yes |
| Marketing | FB Pixel, Google Ads | Yes |

## Auto-Detected Scripts

| Script | Category |
|--------|----------|
| Google Analytics | Analytics |
| Google Tag Manager | Analytics |
| Facebook Pixel | Marketing |
| Google Ads | Marketing |
| LinkedIn Insight | Marketing |
| Twitter Pixel | Marketing |
| Hotjar | Analytics |
| Mixpanel | Analytics |

## Best Practices

### 1. Load TinyConsent First

```html
<head>
  <!-- TinyConsent FIRST -->
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  
  <!-- Other scripts after -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
</head>
```

### 2. Script Order

```html
<!-- ✅ Correct -->
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>

<!-- ❌ Wrong -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

## After Consent

When user consents:

1. Preference stored locally
2. Blocked scripts load
3. Google Consent Mode updated
4. Scripts run on future visits

## Verifying Blocking

### Chrome DevTools

1. Open DevTools (F12)
2. Network tab
3. Visit site in incognito
4. Before consent: No tracking requests
5. After consent: Tracking requests appear

## Troubleshooting

### Scripts Running Before Consent

1. Check script order
2. Ensure TinyConsent in `<head>`
3. Clear cache, test incognito

### Scripts Not Loading After Consent

1. Check localStorage for consent
2. Look for console errors
3. Disable ad blockers

## Related Resources

- [Google Consent Mode](./google-consent-mode.md)
- [GDPR Cookie Requirements](https://tinyconsent.com/gdpr-cookie-requirements)
- [How to Block Cookies Before Consent](https://tinyconsent.com/how-to-block-cookies-before-consent)
- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)

