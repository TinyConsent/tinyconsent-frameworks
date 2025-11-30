# TinyConsent for HTML Websites

Add GDPR-compliant cookie consent to any HTML website.

**Full guide**: [tinyconsent.com/cookie-banner-html](https://tinyconsent.com/cookie-banner-html)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to Your HTML

Add this line to your `<head>` section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  
  <!-- TinyConsent Cookie Banner -->
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

### 3. Done!

Your cookie banner will now appear automatically.

## With Google Analytics

```html
<head>
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
</head>
```

## Adding Privacy Policy

### Link to Hosted Policy

```html
<footer>
  <a href="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display">
    Privacy Policy
  </a>
</footer>
```

### Embed on a Page

Create `privacy-policy.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy</title>
  
  <!-- TinyConsent Cookie Banner -->
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
</head>
<body>
  <h1>Privacy Policy</h1>
  
  <iframe 
    src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
    width="100%"
    height="800"
    frameborder="0"
    title="Privacy Policy"
    style="border: none;"
  ></iframe>
</body>
</html>
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## Multiple Pages

Add the script to every HTML page, or use a static site generator.

### Using Server-Side Includes (SSI)

Create `includes/head.html`:
```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

Include in pages:
```html
<head>
  <!--#include virtual="/includes/head.html" -->
</head>
```

## Static Site Generators

- **Hugo**: Add to `layouts/partials/head.html`
- **Jekyll**: Add to `_includes/head.html`
- **11ty**: Add to your base layout

## Troubleshooting

### Banner Not Appearing

- Check script is in `<head>`
- Verify script ID is correct
- Test in incognito mode
- Check browser console for errors

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Cookie Banner Code Guide](https://tinyconsent.com/cookie-banner-code)
- [Troubleshooting](../common/troubleshooting.md)

