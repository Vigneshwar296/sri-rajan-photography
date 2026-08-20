import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sri Rajan Photography | Weddings, Films, Albums & Frames',
    template: '%s | Sri Rajan Photography',
  },
  description:
    'Sri Rajan Photography creates timeless wedding photography, cinematic films, pre-wedding stories, portraits, premium albums and custom photo frames.',
  keywords: [
    'Sri Rajan Photography', 'wedding photography', 'wedding photographer', 'cinematic wedding films',
    'pre wedding photography', 'portrait photography', 'wedding albums', 'photo frames', 'Tamil Nadu photography studio'
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
    title: 'Sri Rajan Photography | Stories Live Forever',
    description: 'Wedding photography, cinematic films, albums, frames and portraits crafted to preserve how your story felt.',
    images: [{ url: '/hero-wedding-local.jpg', width: 1536, height: 1024, alt: 'Sri Rajan Photography wedding photography' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Rajan Photography | Stories Live Forever',
    description: 'Wedding photography, cinematic films, albums, frames and portraits.',
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
  description: 'Wedding photography, cinematic films, pre-wedding stories, portraits, albums and custom frames.',
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
