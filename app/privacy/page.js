import SiteChrome from '../../components/SiteChrome';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Sri Rajan Photography.',
};

export default function PrivacyPage(){
  return <SiteChrome dark>
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LEGAL</p>
        <h1>Privacy<br/><em>Policy.</em></h1>
        <p>How Sri Rajan Photography handles information shared through this website and enquiry channels.</p>
      </section>
      <section className="legal-content">
        <article>
          <h2>Information we collect</h2>
          <p>When you contact Sri Rajan Photography, you may choose to provide your name, phone number, email address, wedding or event date, location, service requirements and message details.</p>

          <h2>How we use your information</h2>
          <p>Information you share is used to respond to enquiries, check availability, prepare quotations, discuss photography services and manage communication related to your booking.</p>

          <h2>WhatsApp and email</h2>
          <p>If you choose to contact us through WhatsApp or email, your communication is also subject to the privacy practices of those respective platforms and service providers.</p>

          <h2>Website analytics</h2>
          <p>If analytics tools are enabled in the future, they may collect general usage information such as pages visited, device type and referral source to help us improve the website. We do not intentionally use this website to collect sensitive personal information.</p>

          <h2>Photography and client media</h2>
          <p>Client photographs and films are handled separately as part of the photography service and agreed deliverables. Portfolio use should be discussed with the studio as part of your booking or communication.</p>

          <h2>Contact</h2>
          <p>For privacy-related questions, contact Sri Rajan Photography at <a href="mailto:rajanst67@gmail.com">rajanst67@gmail.com</a> or <a href="tel:+917010701473">+91 70107 01473</a>.</p>

          <p className="legal-updated">Last updated: August 2026</p>
        </article>
      </section>
    </main>
  </SiteChrome>
}