'use client';

import { useEffect, useState } from 'react';
import BrandLogo from '../components/BrandLogo';
import LoadingScreen from '../components/LoadingScreen';
import StockPhoto from '../components/StockPhoto';
import {stock} from '../lib/stockImages';

const services = [
  ['01', 'Wedding Photography', 'Candid, traditional and editorial wedding imagery crafted with a timeless eye.'],
  ['02', 'Cinematic Films', 'Emotional wedding films, teasers and reels shaped around real moments and real voices.'],
  ['03', 'Pre-Wedding', 'Concept-led couple stories across outdoor, studio and destination settings.'],
  ['04', 'Albums', 'Premium lay-flat albums, custom cover materials and thoughtful story-led layouts.'],
  ['05', 'Frames & Prints', 'Acrylic, canvas and statement wall frames designed to turn memories into art.'],
  ['06', 'Portraits & Events', 'Maternity, baby, family, birthday, corporate, fashion, product and event photography.'],
];

const stories = [
  { tag: 'WEDDING', title: 'A Story Written in Light', place: 'Chennai · Tamil Nadu', image: stock.ceremony },
  { tag: 'PRE-WEDDING', title: 'The Quiet Before Forever', place: 'Bengaluru · Karnataka', image: stock.couple },
  { tag: 'CELEBRATION', title: 'Where Families Become One', place: 'Coimbatore · Tamil Nadu', image: stock.classicWedding },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}


function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.04 3C8.86 3 3.02 8.75 3.02 15.82c0 2.26.6 4.47 1.74 6.41L3 28.67l6.65-1.72a13.1 13.1 0 0 0 6.38 1.64h.01c7.18 0 13.02-5.75 13.02-12.82C29.06 8.75 23.22 3 16.04 3Zm0 23.42h-.01a10.9 10.9 0 0 1-5.55-1.5l-.4-.23-3.95 1.02 1.05-3.8-.26-.39a10.55 10.55 0 0 1-1.7-5.7c0-5.87 4.85-10.65 10.82-10.65 5.96 0 10.81 4.78 10.81 10.65 0 5.87-4.85 10.6-10.81 10.6Zm5.93-7.96c-.32-.16-1.92-.93-2.22-1.04-.3-.1-.51-.16-.73.16-.22.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.33-.16-1.38-.5-2.62-1.58-.97-.85-1.62-1.9-1.81-2.22-.19-.32-.02-.49.14-.65.15-.14.33-.37.49-.56.16-.19.22-.32.32-.53.11-.21.06-.4-.02-.56-.08-.16-.73-1.73-1-2.37-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.68 0 1.57 1.17 3.1 1.33 3.31.16.21 2.3 3.46 5.58 4.85.78.33 1.39.53 1.86.68.78.24 1.49.21 2.05.13.63-.09 1.92-.77 2.19-1.51.27-.74.27-1.37.19-1.51-.08-.13-.3-.21-.62-.37Z"
      />
    </svg>
  );
}


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      <LoadingScreen />
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#top" className="brand" aria-label="Sri Rajan Photography home">
          <BrandLogo />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="/portfolio">Stories</a>
          <a href="/services">Services</a>
          <a href="/albums">Albums & Frames</a>
          <a href="/packages">Packages</a>
          <a href="/about">About</a>
        </nav>

        <a className="availability desktop-cta" href="/contact">
          Check availability <Arrow />
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {[['Stories','/portfolio'],['Services','/services'],['Albums & Frames','/albums'],['Packages','/packages'],['About','/about'],['Contact','/contact']].map(([item, href]) => (
          <a key={item} href={href} onClick={() => setMenuOpen(false)}>{item}</a>
        ))}
        <a className="availability" href="/contact" onClick={() => setMenuOpen(false)}>
          Check availability <Arrow />
        </a>
      </div>

      <section className="hero" id="top">
        <div className="hero-media hero-stock hero-image-wrap" aria-hidden="true">
          <img src="/hero-wedding-local.jpg" alt="" className="hero-native-image" />
          <div className="media-noise" />
        </div>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-kicker">PHOTOGRAPHY · FILMS · ALBUMS · FRAMES</p>
          <h1>
            Stories live
            <em>forever.</em>
          </h1>
          <p className="hero-description">
            We preserve weddings and celebrations with honest imagery, cinematic movement and handcrafted keepsakes.
          </p>
          <div className="hero-actions">
            <a href="#stories" className="button button--light">Explore our stories</a>
            <a href="#contact" className="text-link">Book your date <Arrow /></a>
          </div>
        </div>
        <div className="hero-scroll">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section className="manifesto" id="about">
        <p className="eyebrow">THE SRI RAJAN APPROACH</p>
        <div className="manifesto-grid">
          <h2>Not just photographs.<br />Pieces of your life.</h2>
          <div>
            <p>
              The laughter before the ceremony. A parent holding back tears. The split second no one else noticed.
              Our work is about making those moments impossible to forget.
            </p>
            <a href="/about" className="text-link dark-link">Discover our story <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="stories section-dark" id="stories">
        <div className="section-heading light-heading">
          <div>
            <p className="eyebrow">FEATURED STORIES</p>
            <h2>Love, as it happened.</h2>
          </div>
          <a href="/portfolio" className="text-link">View all work <Arrow /></a>
        </div>

        <div className="story-grid" id="portfolio">
          {stories.map((story, index) => (
            <article className={`story-card ${index === 0 ? 'story-card--large' : ''}`} key={story.title}>
              <StockPhoto src={story.image} className="story-media">
                <span className="media-index">0{index + 1}</span>
              </StockPhoto>
              <div className="story-info">
                <div>
                  <span>{story.tag}</span>
                  <h3>{story.title}</h3>
                  <p>{story.place}</p>
                </div>
                <button aria-label={`Open ${story.title}`}><Arrow /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="showreel">
        <StockPhoto src={stock.film} className="showreel-media showreel-stock">
          <button className="play-button" aria-label="Play showreel"><span>▶</span></button>
        </StockPhoto>
        <div className="showreel-copy">
          <p className="eyebrow">MOTION / MEMORY</p>
          <h2>Some memories deserve to move.</h2>
          <p>Cinematic wedding films built around emotion, rhythm, sound and the tiny moments between the big ones.</p>
          <a href="/films" className="text-link dark-link">Watch our films <Arrow /></a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE CREATE</p>
            <h2>Everything your story deserves.</h2>
          </div>
          <p className="section-note">From the first frame to the album on your wall, every detail is designed as one complete experience.</p>
        </div>

        <div className="services-list">
          {services.map(([number, title, description]) => (
            <a className="service-row" href={number === '01' ? '/wedding-photography' : number === '02' ? '/films' : number === '03' ? '/pre-wedding' : number === '06' ? '/portraits' : '/services'} key={title}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="experience section-dark">
        <StockPhoto src={stock.camera} className="experience-visual" />
        <div className="experience-copy">
          <p className="eyebrow">THE EXPERIENCE</p>
          <h2>Thoughtful from first hello to final delivery.</h2>
          <div className="experience-steps">
            {[
              ['01', 'Discover', 'We understand your people, priorities, events and the way you want your story remembered.'],
              ['02', 'Plan', 'Timelines, locations and creative direction are shaped before the camera ever comes out.'],
              ['03', 'Capture', 'A calm, unobtrusive approach lets real moments unfold without turning your day into a photoshoot.'],
              ['04', 'Craft', 'Every photograph, film and album is edited with the same visual language and attention to detail.'],
            ].map(([n, t, d]) => (
              <div className="experience-step" key={n}>
                <span>{n}</span><div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="albums" id="albums">
        <div className="albums-heading">
          <p className="eyebrow">MADE TO BE HELD</p>
          <h2>Your memories should live beyond a screen.</h2>
          <p>Premium albums, heirloom prints and statement frames designed to become part of your home.</p>
        </div>
        <div className="product-grid">
          <div className="product-card product-card--wide">
            <StockPhoto src={stock.album} className="product-media album-media" />
            <div className="product-copy"><span>01</span><h3>Signature Albums</h3><p>Lay-flat storytelling, premium papers, bespoke covers and archival-quality printing.</p></div>
          </div>
          <div className="product-card">
            <StockPhoto src={stock.wall} className="product-media frame-media" />
            <div className="product-copy"><span>02</span><h3>Frames & Wall Art</h3><p>Acrylic, canvas and custom statement pieces made for the spaces that matter.</p></div>
          </div>
        </div>
      </section>

      <section className="quote-section section-dark">
        <p className="eyebrow">KIND WORDS</p>
        <blockquote>“They didn’t just photograph our wedding. They somehow captured what the day actually felt like.”</blockquote>
        <div className="quote-person"><span>CLIENT NAME</span><small>WEDDING · CHENNAI</small></div>
      </section>

      <section className="locations-section" aria-labelledby="locations-title">
        <div className="locations-inner">
          <div className="locations-heading">
            <p className="eyebrow">WEDDING PHOTOGRAPHY ACROSS TAMIL NADU</p>
            <h2 id="locations-title">
              Wherever your story <em>takes you.</em>
            </h2>
          </div>

          <div className="locations-content">
            <p>
              From intimate ceremonies to grand celebrations, Sri Rajan Photography
              captures weddings with timeless photography and cinematic films across
              Salem, Dharmapuri, Krishnagiri, Vellore, Ambur and destinations
              throughout Tamil Nadu.
            </p>

            <div className="location-list" aria-label="Primary service locations">
              <a href="/wedding-photographer-salem">Salem</a>
              <a href="/wedding-photographer-dharmapuri">Dharmapuri</a>
              <a href="/wedding-photographer-krishnagiri">Krishnagiri</a>
              <a href="/wedding-photographer-vellore">Vellore</a>
              <a href="/wedding-photographer-ambur">Ambur</a>
              <span>Tamil Nadu</span>
            </div>

            <a href="/contact" className="text-link">
              Plan your celebration <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">YOUR STORY STARTS HERE</p>
          <h2>Tell us what<br /><em>you’re celebrating.</em></h2>
        </div>
        <div className="contact-panel">
          <p>Share your date, location and what you have in mind. We’ll come back with availability and the right collection for your celebration.</p>
          <a href="/contact" className="button button--dark">Start an enquiry <Arrow /></a>
          <a href="https://wa.me/917010701473?text=Hello%20Sri%20Rajan%20Photography%2C%20I%20would%20like%20to%20enquire%20about%20photography%20services." target="_blank" rel="noreferrer" className="text-link dark-link">Chat on WhatsApp <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><BrandLogo /></div>
        <div className="footer-links">
          <div><span>EXPLORE</span><a href="/portfolio">Stories</a><a href="/services">Services</a><a href="/albums">Albums & Frames</a><a href="/about">About</a></div>
          <div><span>CONTACT</span><a href="https://wa.me/917010701473" target="_blank" rel="noreferrer">WhatsApp</a><a href="tel:+917010701473">+91 70107 01473</a><a href="mailto:rajanst67@gmail.com">rajanst67@gmail.com</a></div>
          <div><span>ENQUIRIES</span><a href="mailto:rajanst67@gmail.com">Email the studio</a><a href="/contact">Book your date</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SRI RAJAN PHOTOGRAPHY</span><span>PHOTOGRAPHY · FILMS · ALBUMS · FRAMES</span></div>
      </footer>

      <a href="https://wa.me/917010701473?text=Hello%20Sri%20Rajan%20Photography%2C%20I%20would%20like%20to%20enquire%20about%20photography%20services." target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Enquire on WhatsApp"><WhatsAppIcon/></a>
    </main>
  );
}
