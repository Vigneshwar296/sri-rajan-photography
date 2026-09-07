import Link from 'next/link';

export const metadata = {
  title: 'Wedding Photographer in Dharmapuri | Sri Rajan Photography',
  description:
    'Looking for a wedding photographer in Dharmapuri? Sri Rajan Photography offers candid wedding photography, cinematic wedding films, pre-wedding shoots and premium albums across Dharmapuri and Tamil Nadu.',
  alternates: {
    canonical: '/wedding-photographer-dharmapuri',
  },
  openGraph: {
    title: 'Wedding Photographer in Dharmapuri | Sri Rajan Photography',
    description:
      'Candid wedding photography and cinematic wedding films in Dharmapuri by Sri Rajan Photography.',
    url: '/wedding-photographer-dharmapuri',
    type: 'website',
    images: [
      {
        url: '/hero-wedding-local.jpg',
        width: 1536,
        height: 1024,
        alt: 'Wedding photography in Dharmapuri by Sri Rajan Photography',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Photography in Dharmapuri',
  provider: {
    '@type': 'PhotographyBusiness',
    name: 'Sri Rajan Photography',
    telephone: '+91 70107 01473',
    email: 'rajanst67@gmail.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Dharmapuri',
  },
  serviceType: [
    'Wedding Photography',
    'Candid Wedding Photography',
    'Cinematic Wedding Films',
    'Pre-Wedding Photography',
    'Wedding Albums',
  ],
};

export default function DharmapuriWeddingPhotographyPage() {
  return (
    <main className="location-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="location-hero">
        <img
          src="/hero-wedding-local.jpg"
          alt="Wedding photographer in Dharmapuri"
          className="location-hero-image"
        />
        <div className="location-hero-overlay" />

        <div className="location-hero-content">
          <p className="eyebrow">SALEM · TAMIL NADU</p>

          <h1>
            Wedding Photographer <em>in Dharmapuri.</em>
          </h1>

          <p className="location-hero-copy">
            Timeless wedding photography, candid moments and cinematic films
            created for celebrations across Dharmapuri.
          </p>

          <div className="location-hero-actions">
            <Link href="/contact" className="button button-light">
              Check Availability
            </Link>

            <a
              href="https://wa.me/917010701473?text=Hello%20Sri%20Rajan%20Photography%2C%20I%20would%20like%20to%20enquire%20about%20wedding%20photography%20in%20Dharmapuri."
              target="_blank"
              rel="noreferrer"
              className="text-link light-link"
            >
              Enquire on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <section className="location-intro">
        <div>
          <p className="eyebrow">WEDDING STORIES IN SALEM</p>
          <h2>
            Your wedding deserves to feel <em>like your story.</em>
          </h2>
        </div>

        <div className="location-intro-copy">
          <p>
            Sri Rajan Photography documents weddings across Dharmapuri with an emphasis on family, tradition and the spontaneous moments that make each celebration personal. We approach every ceremony with a natural storytelling style, preserving both the grandeur and the quiet emotions of your wedding day.
          </p>

          <p>
            Our services include candid wedding photography, traditional
            coverage, cinematic wedding films, pre-wedding sessions, portraits
            and handcrafted wedding albums.
          </p>
        </div>
      </section>

      <section className="location-services">
        <p className="eyebrow">WHAT WE CREATE</p>

        <div className="location-service-grid">
          <article>
            <span>01</span>
            <h3>Candid Wedding Photography</h3>
            <p>
              Natural emotions, intimate moments and unscripted memories
              captured without interrupting the celebration.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Cinematic Wedding Films</h3>
            <p>
              Story-driven wedding films crafted with emotion, movement and
              cinematic detail.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Pre-Wedding Photography</h3>
            <p>
              Relaxed and meaningful pre-wedding sessions designed around your
              personalities and story.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Albums & Frames</h3>
            <p>
              Premium wedding albums and custom frames created as lasting
              keepsakes for your family.
            </p>
          </article>
        </div>
      </section>

      <section className="location-cta">
        <p className="eyebrow">PLANNING A WEDDING IN SALEM?</p>
        <h2>
          Tell us about <em>your celebration.</em>
        </h2>
        <p>
          Share your wedding date, venue and plans. We’ll help you choose the
          right photography and film collection for your day.
        </p>

        <div className="location-cta-actions">
          <Link href="/contact" className="button button-dark">
            Start an Enquiry
          </Link>

          <Link href="/portfolio" className="text-link dark-link">
            Explore Our Stories →
          </Link>
        </div>
      </section>
    </main>
  );
}
