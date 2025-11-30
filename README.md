# TinyConsent Frameworks

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-tinyconsent.com-blue)](https://tinyconsent.com)

Framework-specific integration guides and examples for TinyConsent cookie consent banners.

## Overview

This repository contains integration guides, code examples, and best practices for adding TinyConsent to various web frameworks and platforms.

**Get your cookie banner**: [tinyconsent.com/cookie-banner-generator](https://tinyconsent.com/cookie-banner-generator)

## Quick Start

1. Generate your script at [tinyconsent.com](https://tinyconsent.com)
2. Find your framework below
3. Follow the integration guide
4. Done!

## Frameworks

| Framework | Guide | Example | TinyConsent Page |
|-----------|-------|---------|------------------|
| **Next.js** | [Guide](./nextjs/README.md) | [Example](./nextjs/example/) | [tinyconsent.com/cookie-banner-for-nextjs](https://tinyconsent.com/cookie-banner-for-nextjs) |
| **React** | [Guide](./react/README.md) | [Example](./react/example/) | [tinyconsent.com/cookie-banner-for-react](https://tinyconsent.com/cookie-banner-for-react) |
| **Vue.js** | [Guide](./vue/README.md) | [Example](./vue/example/) | [tinyconsent.com/cookie-banner-for-vue](https://tinyconsent.com/cookie-banner-for-vue) |
| **Nuxt** | [Guide](./nuxt/README.md) | [Example](./nuxt/example/) | [tinyconsent.com/cookie-banner-for-vue](https://tinyconsent.com/cookie-banner-for-vue) |
| **Gatsby** | [Guide](./gatsby/README.md) | [Example](./gatsby/example/) | [tinyconsent.com/cookie-banner-for-gatsby](https://tinyconsent.com/cookie-banner-for-gatsby) |
| **WordPress** | [Guide](./wordpress/README.md) | [Example](./wordpress/example/) | [tinyconsent.com/cookie-banner-for-wordpress](https://tinyconsent.com/cookie-banner-for-wordpress) |
| **Shopify** | [Guide](./shopify/README.md) | [Example](./shopify/example/) | [tinyconsent.com/cookie-banner-for-shopify](https://tinyconsent.com/cookie-banner-for-shopify) |
| **Webflow** | [Guide](./webflow/README.md) | - | [tinyconsent.com/cookie-banner-for-webflow](https://tinyconsent.com/cookie-banner-for-webflow) |
| **Wix** | [Guide](./wix/README.md) | - | [tinyconsent.com/cookie-banner-for-wix](https://tinyconsent.com/cookie-banner-for-wix) |
| **Squarespace** | [Guide](./squarespace/README.md) | - | [tinyconsent.com/cookie-banner-for-squarespace](https://tinyconsent.com/cookie-banner-for-squarespace) |
| **Ghost** | [Guide](./ghost/README.md) | [Example](./ghost/example/) | [tinyconsent.com/cookie-banner-for-ghost](https://tinyconsent.com/cookie-banner-for-ghost) |
| **HTML** | [Guide](./html/README.md) | [Example](./html/example/) | [tinyconsent.com/cookie-banner-html](https://tinyconsent.com/cookie-banner-html) |

## Universal Installation

For any framework, the core installation is the same:

```html
<script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
```

The guides in this repo show you exactly where to put this line for each framework.

## Features

All integrations include:

- ✅ **GDPR & CCPA compliance** - Blocks scripts until consent
- ✅ **Google Consent Mode v2** - Automatic GA4/Google Ads integration
- ✅ **Lightweight** - Under 5KB initial load
- ✅ **Customizable** - Via dashboard, no code changes
- ✅ **Script blocking** - Prevents tracking before consent

## Repository Structure

```
tinyconsent-frameworks/
├── README.md
├── LICENSE
├── nextjs/
│   ├── README.md
│   └── example/
├── react/
│   ├── README.md
│   └── example/
├── vue/
│   ├── README.md
│   └── example/
├── nuxt/
│   ├── README.md
│   └── example/
├── gatsby/
│   ├── README.md
│   └── example/
├── wordpress/
│   ├── README.md
│   └── example/
├── shopify/
│   ├── README.md
│   └── example/
├── webflow/
│   └── README.md
├── wix/
│   └── README.md
├── squarespace/
│   └── README.md
├── ghost/
│   ├── README.md
│   └── example/
├── html/
│   ├── README.md
│   └── example/
└── common/
    ├── troubleshooting.md
    ├── google-consent-mode.md
    └── script-blocking.md
```

## Related Resources

- **Cookie Banner Generator**: [tinyconsent.com/cookie-banner-generator](https://tinyconsent.com/cookie-banner-generator)
- **Privacy Policy Generator**: [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator)
- **Dashboard**: [tinyconsent.com/dashboard](https://tinyconsent.com/dashboard)
- **GDPR Requirements**: [tinyconsent.com/gdpr-cookie-requirements](https://tinyconsent.com/gdpr-cookie-requirements)
- **CCPA Requirements**: [tinyconsent.com/ccpa-cookie-requirements](https://tinyconsent.com/ccpa-cookie-requirements)

## Contributing

Found an issue or want to add a framework? Pull requests welcome!

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Links

- **Website**: [tinyconsent.com](https://tinyconsent.com)
- **Cookie Banner Generator**: [tinyconsent.com/cookie-banner-generator](https://tinyconsent.com/cookie-banner-generator)
- **Privacy Policy Generator**: [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator)

