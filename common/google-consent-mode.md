# Google Consent Mode v2 Guide

TinyConsent automatically integrates with Google Consent Mode v2.

## What is Google Consent Mode?

Google Consent Mode adjusts how Google tags behave based on user consent. Required for:

- Google Analytics 4 (GA4)
- Google Ads
- Google Tag Manager

Learn more: [What is Consent Mode v2?](https://tinyconsent.com/what-is-consent-mode-v2)

## Automatic Integration

TinyConsent automatically:

1. Sets default consent to "denied"
2. Updates consent when users interact
3. Signals to all Google services

**No configuration needed.**

## How It Works

### Before Consent

```javascript
// TinyConsent automatically sets:
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});
```

### After User Accepts

```javascript
// TinyConsent automatically updates:
gtag('consent', 'update', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  // etc.
});
```

## Setup

1. Add TinyConsent script first
2. Add Google Analytics/GTM after
3. Done!

```html
<head>
  <!-- 1. TinyConsent -->
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  
  <!-- 2. Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXX');
  </script>
</head>
```

## Consent Parameters

| Parameter | TinyConsent Category |
|-----------|---------------------|
| analytics_storage | Analytics |
| ad_storage | Marketing |
| ad_user_data | Marketing |
| ad_personalization | Marketing |

## Verifying Integration

### Google Tag Assistant

1. Install [Tag Assistant](https://tagassistant.google.com/)
2. Visit your site
3. Check consent state

### GA4 DebugView

1. GA4 → Admin → DebugView
2. Visit site with debug mode
3. Verify consent parameters

## Troubleshooting

### Consent Mode Not Working

1. Ensure TinyConsent loads first
2. Check both scripts in `<head>`
3. Look for console errors

### Data Still Collected

1. Check script order
2. Test in incognito
3. Clear all cookies

## Related Resources

- [What is Consent Mode v2?](https://tinyconsent.com/what-is-consent-mode-v2)
- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [GDPR Cookie Requirements](https://tinyconsent.com/gdpr-cookie-requirements)
- [Script Blocking Guide](./script-blocking.md)

