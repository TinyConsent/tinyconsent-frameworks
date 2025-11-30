# TinyConsent for WordPress

Add GDPR-compliant cookie consent to your WordPress website.

**Full guide**: [tinyconsent.com/cookie-banner-for-wordpress](https://tinyconsent.com/cookie-banner-for-wordpress)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Choose Installation Method

## Method 1: Theme Header (Recommended)

Edit your theme's `header.php`:

1. Go to **Appearance → Theme File Editor**
2. Select `header.php`
3. Add after `<head>`:

```php
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  
  <!-- TinyConsent Cookie Banner -->
  <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  
  <?php wp_head(); ?>
</head>
```

## Method 2: functions.php

Add to your theme's `functions.php`:

```php
<?php
// Add TinyConsent cookie banner
function tinyconsent_add_script() {
    echo '<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>';
}
add_action('wp_head', 'tinyconsent_add_script', 1);
```

## Method 3: Plugin (Insert Headers and Footers)

1. Install "Insert Headers and Footers" plugin
2. Go to **Settings → Insert Headers and Footers**
3. Paste in "Scripts in Header":

```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

4. Save

## Method 4: Child Theme (Recommended for Updates)

Create a child theme and add to its `functions.php`:

```php
<?php
function tinyconsent_add_script() {
    echo '<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>';
}
add_action('wp_head', 'tinyconsent_add_script', 1);
```

## Adding Privacy Policy

### Link to Hosted Policy

Add to your footer menu:
1. Go to **Appearance → Menus**
2. Add Custom Link:
   - URL: `https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display`
   - Link Text: Privacy Policy

### Embed on a Page

1. Create a new page
2. Add Custom HTML block:

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

## Caching Plugins

After adding TinyConsent, clear your cache:

- **WP Super Cache**: Settings → WP Super Cache → Delete Cache
- **W3 Total Cache**: Performance → Dashboard → Empty All Caches
- **WP Rocket**: Settings → WP Rocket → Clear Cache

## Troubleshooting

### Banner Not Showing

- Clear all caches
- Check for conflicting cookie plugins
- Test in incognito mode

### Conflicts with Other Plugins

Disable other cookie consent plugins before using TinyConsent.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [GDPR Cookie Requirements](https://tinyconsent.com/gdpr-cookie-requirements)
- [Troubleshooting](../common/troubleshooting.md)

