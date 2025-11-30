# TinyConsent for Webflow

Add GDPR-compliant cookie consent to your Webflow site.

**Full guide**: [tinyconsent.com/cookie-banner-for-webflow](https://tinyconsent.com/cookie-banner-for-webflow)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add Custom Code

1. Open your Webflow project
2. Go to **Project Settings → Custom Code**
3. In **Head Code**, paste:

```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

4. Click **Save Changes**
5. **Publish** your site

### 3. Done!

Your cookie banner will appear on all pages.

## Single Page Only

To add to a specific page:

1. Select the page in Pages panel
2. Click gear icon for settings
3. Add to **Inside <head> tag**

## Adding Privacy Policy

### Link in Navigation

Add a link element with URL:
```
https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display
```

### Embed on Page

1. Create a Privacy Policy page
2. Add an **Embed** element
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

## Webflow Plans

Custom code requires a paid Webflow plan.

## Troubleshooting

### Banner Not Showing After Publish

- Wait for CDN propagation
- Clear browser cache
- Try different browser

### Custom Code Not Saving

- Verify you have a paid plan
- Check for syntax errors

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Agency Privacy Policy Template](https://github.com/TinyConsent/tinyconsent-privacy-policy-templates/blob/main/templates/agency.md)
- [Troubleshooting](../common/troubleshooting.md)

