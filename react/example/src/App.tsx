/**
 * React App Example with TinyConsent
 * 
 * TinyConsent is loaded in index.html, so the banner appears automatically.
 * 
 * Get your script at: https://tinyconsent.com
 * Full guide: https://tinyconsent.com/cookie-banner-for-react
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Home Page
const Home: React.FC = () => (
  <main className="page">
    <h1>Welcome to My React App</h1>
    
    <p>
      This app uses TinyConsent for GDPR-compliant cookie consent.
      The banner appears automatically for new visitors.
    </p>
    
    <section>
      <h2>Features</h2>
      <ul>
        <li>Automatic script blocking until consent</li>
        <li>Google Consent Mode v2 integration</li>
        <li>Customizable via dashboard</li>
        <li>Under 5KB initial load</li>
      </ul>
    </section>
    
    <section>
      <h2>Useful Links</h2>
      <ul>
        <li>
          <a href="https://tinyconsent.com/cookie-banner-for-react">
            React Integration Guide
          </a>
        </li>
        <li>
          <a href="https://tinyconsent.com/privacy-policy-generator">
            Privacy Policy Generator
          </a>
        </li>
        <li>
          <a href="https://tinyconsent.com/gdpr-cookie-requirements">
            GDPR Requirements
          </a>
        </li>
      </ul>
    </section>
  </main>
);

// Privacy Policy Page
const PrivacyPolicy: React.FC = () => (
  <main className="page">
    <h1>Privacy Policy</h1>
    
    {/* 
      Embed your TinyConsent privacy policy
      Replace YOUR_POLICY_ID with your actual policy ID
      Generate at: https://tinyconsent.com/privacy-policy-generator
    */}
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

// App with Router
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      
      <footer className="footer">
        <p>
          Cookie consent by{' '}
          <a href="https://tinyconsent.com">TinyConsent</a>
        </p>
      </footer>
    </BrowserRouter>
  );
};

export default App;

