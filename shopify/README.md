# TinyConsent for Shopify

Add GDPR-compliant cookie consent to your Shopify store.

**Full guide**: [tinyconsent.com/cookie-banner-for-shopify](https://tinyconsent.com/cookie-banner-for-shopify)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to Theme

1. Go to **Online Store → Themes**
2. Click **Actions → Edit code** on your active theme
3. Find `theme.liquid` in the Layout folder
4. Add after `<head>`:

```liquid
<head>
  <!-- TinyConsent Cookie Banner -->
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  
  {{ content_for_header }}
</head>
```

5. Click **Save**

### 3. Done!

Your cookie banner will now appear on all pages.

## Verify Installation

1. Visit your store in incognito mode
2. The cookie banner should appear
3. Test accept/reject functionality

## Adding Privacy Policy

### Link in Footer

1. Go to **Online Store → Navigation**
2. Click on your footer menu
3. Add menu item:
   - Name: Privacy Policy
   - Link: `https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display`

### Create a Policy Page

1. Go to **Online Store → Pages**
2. Click **Add page**
3. Title: Privacy Policy
4. Click the HTML button (`<>`)
5. Paste:

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

6. Save

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## Checkout Privacy Policy

1. Go to **Settings → Legal**
2. Add your privacy policy content or link
3. This appears during checkout

## Disable Shopify's Cookie Banner

If you have Shopify's built-in cookie banner:
1. Go to **Settings → Customer privacy**
2. Disable the built-in cookie banner
3. Use TinyConsent instead

## Troubleshooting

### Banner Not Showing

- Clear theme cache
- Check for conflicting cookie apps
- Test in incognito mode

### Conflicts with Apps

Disable other cookie consent apps before using TinyConsent.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [E-commerce Privacy Policy Template](https://github.com/TinyConsent/tinyconsent-privacy-policy-templates/blob/main/templates/ecommerce.md)
- [GDPR Cookie Requirements](https://tinyconsent.com/gdpr-cookie-requirements)

