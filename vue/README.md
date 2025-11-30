# TinyConsent for Vue.js

Add GDPR-compliant cookie consent to your Vue.js application.

**Full guide**: [tinyconsent.com/cookie-banner-for-vue](https://tinyconsent.com/cookie-banner-for-vue)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to index.html

#### Vue 3 (Vite)

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Vue App</title>
    
    <!-- TinyConsent Cookie Banner -->
    <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

#### Vue 2 (Vue CLI)

**public/index.html**:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>My Vue App</title>
    
    <!-- TinyConsent Cookie Banner -->
    <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  </head>
  <body>
    <div id="app"></div>
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

Create a privacy policy page:

```vue
<!-- src/views/PrivacyPolicy.vue -->
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
// No script needed for basic embed
</script>
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## With Vue Router

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/privacy-policy', component: PrivacyPolicy },
  ],
});

export default router;
```

## Nuxt.js

See the [Nuxt.js guide](../nuxt/README.md) for Nuxt-specific integration.

## Troubleshooting

### Banner Not Appearing

- Clear localStorage: `localStorage.clear()`
- Test in incognito mode
- Verify script ID is correct

### TypeScript Support

TinyConsent works with TypeScript out of the box. No additional types needed.

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [Google Consent Mode Guide](../common/google-consent-mode.md)
- [Troubleshooting](../common/troubleshooting.md)

