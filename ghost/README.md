# TinyConsent for Ghost

Add GDPR-compliant cookie consent to your Ghost blog.

**Full guide**: [tinyconsent.com/cookie-banner-for-ghost](https://tinyconsent.com/cookie-banner-for-ghost)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add Code Injection

1. Go to Ghost Admin → Settings → Code injection
2. In the **Site Header** section, paste:

```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

3. Click **Save**

### 3. Done!

Your cookie banner will appear on all pages.

## With Google Analytics

Add both scripts to Site Header:

```html
<!-- TinyConsent - Load first -->
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>

<!-- Google Analytics - Blocked until consent -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXX');
</script>
```

## Adding Privacy Policy

### Link in Navigation

1. Go to Ghost Admin → Settings → Navigation
2. Add a new item:
   - Label: Privacy Policy
   - URL: `https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display`

### Create a Page

1. Create a new page in Ghost
2. Add an HTML card with:

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

## Theme Integration (Advanced)

If editing your Ghost theme, add to `default.hbs`:

```handlebars
<head>
  ...
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  {{ghost_head}}
</head>
```

## Troubleshooting

### Banner Not Showing

- Clear Ghost cache
- Test in incognito mode
- Check code injection is saved

### Ghost Pro

Code injection works the same on Ghost Pro hosted sites.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Blog Privacy Policy Template](https://github.com/TinyConsent/tinyconsent-privacy-policy-templates/blob/main/templates/blog.md)
- [Troubleshooting](../common/troubleshooting.md)

