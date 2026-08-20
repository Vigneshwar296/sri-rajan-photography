import SiteChrome from '../../components/SiteChrome';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Website terms and general service information for Sri Rajan Photography.',
};

export default function TermsPage(){
  return <SiteChrome dark>
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">LEGAL</p>
        <h1>Terms &<br/><em>Conditions.</em></h1>
        <p>General terms for using the Sri Rajan Photography website and requesting photography services.</p>
      </section>
      <section className="legal-content">
        <article>
          <h2>Website information</h2>
          <p>This website presents the photography, film, album, frame and related services offered by Sri Rajan Photography. Website content may be updated as services, availability and portfolio work change.</p>

          <h2>Packages and quotations</h2>
          <p>Packages displayed on the website are starting points and not fixed quotations. Final pricing and deliverables depend on event dates, duration, locations, team size, travel, albums, films, frames and other selected requirements.</p>

          <h2>Booking confirmation</h2>
          <p>Submitting an enquiry does not reserve a wedding or event date. A booking is confirmed only after availability, scope, payment terms and other agreed requirements are finalised with the studio.</p>

          <h2>Timelines</h2>
          <p>Photography, film and album delivery timelines vary depending on the scale of the event and selected deliverables. Estimated timelines should be confirmed during the booking process.</p>

          <h2>Portfolio imagery</h2>
          <p>Some imagery on this development website may be temporary or representative stock imagery until Sri Rajan Photography's final portfolio assets are uploaded. Final production portfolio content should reflect actual studio work and permissions.</p>

          <h2>Contact</h2>
          <p>For booking or service questions, contact <a href="mailto:rajanst67@gmail.com">rajanst67@gmail.com</a> or <a href="tel:+917010701473">+91 70107 01473</a>.</p>

          <p className="legal-updated">Last updated: August 2026</p>
        </article>
      </section>
    </main>
  </SiteChrome>
}