# TinyConsent for Nuxt.js

Add GDPR-compliant cookie consent to your Nuxt.js application.

**Full guide**: [tinyconsent.com/cookie-banner-for-vue](https://tinyconsent.com/cookie-banner-for-vue)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to Nuxt Config

#### Nuxt 3

**nuxt.config.ts**:
```typescript
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID',
          async: true
        }
      ]
    }
  }
});
```

#### Nuxt 2

**nuxt.config.js**:
```javascript
export default {
  head: {
    script: [
      {
        src: 'https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID',
        async: true
      }
    ]
  }
};
```

### 3. Done!

Your cookie banner will now appear on all pages.

## With Google Analytics

#### Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        // TinyConsent - Load first
        {
          src: 'https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID',
          async: true
        },
        // Google Analytics
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXX',
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXX');
          `
        }
      ]
    }
  }
});
```

## Environment Variables

```env
# .env
NUXT_PUBLIC_TINYCONSENT_SCRIPT_ID=your-script-id
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: `https://scripts.tinyconsent.com/api/scripts/${process.env.NUXT_PUBLIC_TINYCONSENT_SCRIPT_ID}`,
          async: true
        }
      ]
    }
  }
});
```

## Adding Privacy Policy

Create a privacy policy page:

```vue
<!-- pages/privacy-policy.vue -->
<template>
  <div class="privacy-policy-page">
    <h1>Privacy Policy</h1>
    
    <iframe 
      src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
      width="100%"
      height="800"
      frameborder="0"
      title="Privacy Policy"
      style="border: none;"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy'
});
</script>
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## SSR Compatibility

TinyConsent is fully compatible with Nuxt's SSR. The script loads client-side and doesn't affect server rendering.

## Troubleshooting

### Banner Not Appearing

- Clear localStorage: `localStorage.clear()`
- Test in incognito mode
- Verify script ID is correct
- Check Nuxt config syntax

### Config Not Taking Effect

Restart your Nuxt dev server after changing `nuxt.config.ts`.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Vue.js Guide](../vue/README.md)
- [Troubleshooting](../common/troubleshooting.md)

