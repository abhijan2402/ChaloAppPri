import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const sections = [
  { id: 'overview', title: 'Overview', text: 'Your journeys are personal. Your data should be, too. This page demonstrates how Chalo Ji could explain the information used to make everyday travel simpler, and the choices available to you.', note: 'This is a demonstration website. The policy below is sample content and does not describe or replace Chalo Ji’s official privacy policy.' },
  { id: 'information', title: 'Information we collect', text: 'A travel app may use information you provide, information about your journeys, and technical information needed to operate its services.', items: [['Account details', 'Details you choose to share, such as your name, phone number, and email address.'], ['Travel information', 'Routes you search for, saved stops, and ticket or pass activity when those features are used.'], ['Device information', 'Basic app, device, and diagnostic information that helps identify errors and improve reliability.']] },
  { id: 'use', title: 'How we use your information', text: 'Information can help deliver the features you request, including finding routes, displaying tickets, managing an account, and responding to support requests. It may also help maintain security and understand how services perform.' },
  { id: 'location', title: 'Location & permissions', text: 'Location access can help show nearby stops and relevant routes. Your device controls whether an app can access your location. You can review or change permissions in your device settings at any time.', note: 'You’re in control. Only enable device permissions that you’re comfortable sharing. Some location-based features may be unavailable when access is disabled.' },
  { id: 'sharing', title: 'Sharing your information', text: 'A complete policy should identify which service providers, payment partners, or transport operators receive information, what they receive, and why. It should also explain any disclosures required by applicable law. These details must be confirmed before this sample is published as an official policy.' },
  { id: 'security', title: 'Data security & retention', text: 'A complete policy should explain the safeguards used to protect personal information and how long different categories of data are retained. The operator should provide its verified security practices and retention periods here.' },
  { id: 'choices', title: 'Your choices & rights', text: 'You can manage device permissions through your phone’s settings. Depending on the service and applicable law, you may also be able to request access to, correction of, or deletion of personal information. An official policy should explain how to submit these requests and how they are handled.' },
  { id: 'children', title: 'Children’s privacy', text: 'An official policy should clearly state the service’s intended age group, any restrictions for younger users, and the process for handling information relating to children. The operator must confirm these details for the live service.' },
  { id: 'updates', title: 'Changes to this policy', text: 'When this sample is adapted into an official policy, this section should explain how updates are communicated and when revised terms take effect. The date shown on this demo is the page’s sample revision date.' },
  { id: 'contact', title: 'Contact & support', text: 'Have a question about your privacy? For the live Chalo Ji service, use the verified help or privacy contact available in the official app. Replace this section with the operator’s confirmed contact details before publishing.' },
];

function Arrow({ diagonal = false }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M5 12h14m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function App() {
  const [active, setActive] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-100px 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('.policy-section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <>
    <a className="skip-link" href="#policy">Skip to policy</a>
    <header className="header">
      <a className="brand" href="#" aria-label="Chalo Ji home">chalo ji<span className="brand-mark">↗</span></a>
      <div className="header-right"><span className="header-label">THE EVERYDAY, MADE EASIER.</span><a className="header-contact" href="#contact">Get in touch <Arrow diagonal /></a></div>
    </header>

    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="small-dot" /> THE CHALO JI PROMISE</div>
          <h1 id="page-title">Your journey.<br />Your data.<br /><span>Your control.</span></h1>
          <p>Good journeys start with trust. Here’s how we think about your privacy, in plain language.</p>
          <div className="hero-meta"><span>PRIVACY POLICY</span><span className="meta-divider" /><span>Updated November 1, 2026</span></div>
        </div>
        <div className="privacy-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="art-spark spark-one">+</span><span className="art-spark spark-two">+</span>
          <div className="shield"><svg viewBox="0 0 120 140" fill="none"><path d="M60 9c15 12 32 17 48 19v43c0 26-21 45-48 60C33 116 12 97 12 71V28C28 26 45 21 60 9Z" stroke="currentColor" strokeWidth="2" /><rect x="42" y="61" width="36" height="30" rx="6" fill="currentColor" /><path d="M49 61V51a11 11 0 0 1 22 0v10" stroke="currentColor" strokeWidth="5" /><circle cx="60" cy="74" r="3" fill="#315441" /><path d="M60 74v6" stroke="#315441" strokeWidth="2" /></svg></div>
          <span className="art-tag"><span /> PRIVACY, BY DESIGN</span>
        </div>
      </section>

      <div className="trust-strip"><span className="trust-icon">✓</span><p>A little transparency goes a long way.</p><span className="trust-detail">Your privacy matters at every stop.</span></div>

      <div className="policy-layout" id="policy">
        <aside className="sidebar">
          <div className="sidebar-inner"><p className="eyebrow">ON THIS PAGE</p>
            <nav aria-label="Policy sections">{sections.map((section, index) => <a key={section.id} className={active === section.id ? 'active' : ''} href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined} onClick={() => setActive(section.id)}><span className="nav-number">{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}</nav>
            <div className="sidebar-note"><span className="note-symbol">↗</span><p>Made to be understood.<br /><span>No complicated detours.</span></p></div>
          </div>
        </aside>
        <article className="policy-content" aria-label="Privacy policy">
          <div className="demo-label"><span /> DEMO POLICY · SAMPLE CONTENT</div>
          {sections.map((section, index) => <section className="policy-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="section-heading"><span>{String(index + 1).padStart(2, '0')}</span><h2 id={`${section.id}-title`}>{section.title}</h2></div>
            <p>{section.text}</p>
            {section.items && <div className="information-list">{section.items.map(([title, text]) => <div key={title}><span className="list-dot" /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>}
            {section.note && <div className="notice"><span className="info-icon">i</span><p>{section.note}</p></div>}
          </section>)}
          <a className="back-top" href="#">Back to top <span>↑</span></a>
        </article>
      </div>
      <section className="closing"><div><span className="eyebrow">A BETTER WAY, EVERY DAY.</span><h2>More clarity. Less worry.</h2><p>Because peace of mind should come along for the ride.</p></div><a href="#overview" aria-label="Read the policy overview"><Arrow diagonal /></a></section>
    </main>
    <footer><a className="brand" href="#">chalo ji<span className="brand-mark">↗</span></a><p>© {new Date().getFullYear()} Chalo Ji · Demo website</p><span>Built around your journey.</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
