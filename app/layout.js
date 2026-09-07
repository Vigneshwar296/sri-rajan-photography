import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sri Rajan Photography | Wedding Photography in Tamil Nadu',
    template: '%s | Sri Rajan Photography',
  },
  description:
    'Sri Rajan Photography offers candid wedding photography, cinematic wedding films and premium albums across Salem, Dharmapuri, Krishnagiri, Vellore, Ambur and Tamil Nadu.',
  keywords: [
    'Sri Rajan Photography', 'wedding photography', 'wedding photographer', 'cinematic wedding films',
    'pre wedding photography', 'portrait photography', 'wedding albums', 'photo frames', 'wedding photographer Salem', 'wedding photographer Dharmapuri', 'wedding photographer Krishnagiri', 'wedding photographer Vellore', 'wedding photographer Ambur', 'Tamil Nadu wedding photographer'
  ],
  authors: [{ name: 'Sri Rajan Photography' }],
  creator: 'Sri Rajan Photography',
  publisher: 'Sri Rajan Photography',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Sri Rajan Photography',
    title: 'Sri Rajan Photography | Wedding Photography in Tamil Nadu',
    description: 'Candid wedding photography and cinematic films across Salem, Dharmapuri, Krishnagiri, Vellore, Ambur and Tamil Nadu.',
    images: [{ url: '/hero-wedding-local.jpg', width: 1536, height: 1024, alt: 'Sri Rajan Photography wedding photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Rajan Photography | Wedding Photography in Tamil Nadu',
    description: 'Wedding photography and cinematic films across Salem, Dharmapuri, Krishnagiri, Vellore, Ambur and Tamil Nadu.',
    images: ['/hero-wedding-local.jpg'],
  },
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'PhotographyBusiness',
  name: 'Sri Rajan Photography',
  url: siteUrl,
  telephone: '+91 70107 01473',
  email: 'rajanst67@gmail.com',
  image: `${siteUrl}/hero-wedding-local.jpg`,
  priceRange: '$$',
  areaServed: [
    { '@type': 'City', name: 'Salem' },
    { '@type': 'City', name: 'Dharmapuri' },
    { '@type': 'City', name: 'Krishnagiri' },
    { '@type': 'City', name: 'Vellore' },
    { '@type': 'City', name: 'Ambur' },
    { '@type': 'State', name: 'Tamil Nadu' },
  ],
  description: 'Wedding photography, candid photography, cinematic films, pre-wedding stories, portraits and premium albums across Salem, Dharmapuri, Krishnagiri, Vellore, Ambur and Tamil Nadu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
