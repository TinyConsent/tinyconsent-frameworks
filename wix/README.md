# TinyConsent for Wix

Add GDPR-compliant cookie consent to your Wix website.

**Full guide**: [tinyconsent.com/cookie-banner-for-wix](https://tinyconsent.com/cookie-banner-for-wix)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add Custom Code

1. Go to Wix Dashboard → Settings
2. Click **Custom Code** (under Advanced)
3. Click **+ Add Custom Code**
4. Paste:

```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

5. Configure:
   - Name: TinyConsent Cookie Banner
   - Add Code to Pages: All pages
   - Place Code in: Head
6. Click **Apply**

### 3. Done!

Publish your site to see the banner.

## Wix Premium Required

Custom code requires a Wix Premium plan.

## Disable Wix's Cookie Banner

1. Go to Settings → Privacy & Cookies
2. Turn off built-in cookie banner
3. Save

## Adding Privacy Policy

### Link in Menu

1. Go to Menus & Pages
2. Add a link:
   - URL: `https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display`
   - Text: Privacy Policy

### Create a Page

1. Add a new page
2. Add HTML iframe element (if available) or link to hosted policy

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## Troubleshooting

### Banner Not Appearing

- Ensure Premium plan
- Check code is in Head
- Verify All pages selected
- Clear browser cache

### Conflicts with Wix Apps

Disable other cookie apps to avoid conflicts.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Cookie Laws Explained](https://tinyconsent.com/cookie-laws-explained)
- [Troubleshooting](../common/troubleshooting.md)

