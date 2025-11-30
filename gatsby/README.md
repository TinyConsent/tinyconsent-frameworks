# TinyConsent for Gatsby

Add GDPR-compliant cookie consent to your Gatsby site.

**Full guide**: [tinyconsent.com/cookie-banner-for-gatsby](https://tinyconsent.com/cookie-banner-for-gatsby)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to gatsby-ssr.js

Create or edit `gatsby-ssr.js`:

```javascript
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="tinyconsent"
      src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
      async
    />,
  ]);
};
```

### 3. Done!

Your cookie banner will appear on all pages.

## Alternative: gatsby-browser.js

For client-side only:

```javascript
// gatsby-browser.js
export const onClientEntry = () => {
  const script = document.createElement('script');
  script.src = 'https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID';
  script.async = true;
  document.head.appendChild(script);
};
```

## With React Helmet

If using `gatsby-plugin-react-helmet`:

```jsx
// src/components/Layout.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <script
        src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID"
        async
      />
    </Helmet>
    {children}
  </>
);

export default Layout;
```

## Environment Variables

```env
# .env.production
GATSBY_TINYCONSENT_SCRIPT_ID=your-script-id
```

```javascript
// gatsby-ssr.js
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="tinyconsent"
      src={`https://scripts.tinyconsent.com/api/scripts/${process.env.GATSBY_TINYCONSENT_SCRIPT_ID}`}
      async
    />,
  ]);
};
```

## Adding Privacy Policy

Create `src/pages/privacy-policy.js`:

```jsx
import React from 'react';

const PrivacyPolicy = () => (
  <main>
    <h1>Privacy Policy</h1>
    <iframe 
      src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
      width="100%"
      height="800"
      frameBorder="0"
      title="Privacy Policy"
      style={{ border: 'none' }}
    />
  </main>
);

export default PrivacyPolicy;
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## Troubleshooting

### Banner Not Showing

- Restart dev server after changing gatsby-ssr.js
- Clear localStorage
- Test in incognito

### Build Errors

Use correct export syntax:

```javascript
// Correct
export const onRenderBody = ({ setHeadComponents }) => { ... };
```

## Related Resources

- [Cookie Banner Generator](https://tinyconsent.com/cookie-banner-generator)
- [Privacy Policy Generator](https://tinyconsent.com/privacy-policy-generator)
- [React Guide](../react/README.md)
- [Troubleshooting](../common/troubleshooting.md)

