# TinyConsent for React

Add GDPR-compliant cookie consent to your React application.

**Full guide**: [tinyconsent.com/cookie-banner-for-react](https://tinyconsent.com/cookie-banner-for-react)

## Quick Start

### 1. Get Your Script

Generate your script at [tinyconsent.com](https://tinyconsent.com)

### 2. Add to index.html

#### Create React App

**public/index.html**:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My React App</title>
    
    <!-- TinyConsent Cookie Banner -->
    <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

#### Vite

**index.html**:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My React App</title>
    
    <!-- TinyConsent Cookie Banner -->
    <script src="https://scripts.tinyconsent.com/api/scripts/YOUR_SCRIPT_ID" async></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
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

## Environment Variables

#### Create React App

```env
# .env
REACT_APP_TINYCONSENT_SCRIPT_ID=your-script-id
```

```html
<script src="https://scripts.tinyconsent.com/api/scripts/%REACT_APP_TINYCONSENT_SCRIPT_ID%" async></script>
```

#### Vite

```env
# .env
VITE_TINYCONSENT_SCRIPT_ID=your-script-id
```

Use a build plugin or manually replace in production.

## Adding Privacy Policy

Create a privacy policy page component:

```tsx
// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>
      
      <iframe 
        src="https://tinyconsent.com/api/privacy-policies/YOUR_POLICY_ID/display"
        width="100%"
        height="800"
        frameBorder="0"
        title="Privacy Policy"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PrivacyPolicy;
```

Generate your privacy policy at [tinyconsent.com/privacy-policy-generator](https://tinyconsent.com/privacy-policy-generator).

## With React Router

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

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

