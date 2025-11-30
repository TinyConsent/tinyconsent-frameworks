# TinyConsent for Squarespace

Add GDPR-compliant cookie consent to your Squarespace website.

**Full guide**: [tinyconsent.com/cookie-banner-for-squarespace](https://tinyconsent.com/cookie-banner-for-squarespace)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add Code Injection

1. Go to Settings → Advanced → Code Injection
2. In the **Header** field, paste:

```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

3. Click **Save**

### 3. Done!

Your cookie banner will appear on all pages.

## Squarespace Plans

Code Injection requires:
- Business plan
- Commerce plans
- Legacy plans with Developer Mode

Personal plans do not support code injection.

## Disable Squarespace's Cookie Banner

1. Go to Settings → Cookies & Visitor Data
2. Disable built-in cookie banner
3. Save

## Adding Privacy Policy

### Link in Navigation

1. Go to Pages → Navigation
2. Add a link:
   - URL: `https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display`
   - Title: Privacy Policy

### Create a Page

1. Add a new page
2. Add a Code Block
3. Paste:

```html
<iframe 
  src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
  width="100%"
  height="800"
  frameborder="0"
  title="Privacy Policy"
  style="border: none;"
></iframe>
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## Troubleshooting

### Banner Not Showing

- Check you're on Business or Commerce plan
- Verify script is in Header section
- Clear browser cache
- Test in incognito

### Banner Appears Twice

Disable Squarespace's built-in banner in Settings.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [GDPR Cookie Requirements](https://tinyconsent.com/gdpr-cookie-requirements)
- [Troubleshooting](../common/troubleshooting.md)

