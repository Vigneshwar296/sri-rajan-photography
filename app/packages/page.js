import Link from 'next/link';
import SiteChrome, {Arrow} from '../../components/SiteChrome';
import StockPhoto from '../../components/StockPhoto';
import {stock, premiumStock} from '../../lib/stockImages';

export const metadata = {
  title: 'Wedding Photography Packages | Sri Rajan Photography',
  description: 'Explore flexible wedding photography, cinematic film, pre-wedding, album and frame packages from Sri Rajan Photography.',
};

const packages = [
  {
    name:'Essential',
    kicker:'INTIMATE CELEBRATIONS',
    desc:'A focused photography experience for couples who want the important moments documented beautifully and naturally.',
    items:['Traditional photography coverage','Candid photography coverage','Curated edited photographs','Private digital delivery','Optional album upgrade'],
  },
  {
    name:'Signature',
    kicker:'OUR MOST COMPLETE STORY',
    featured:true,
    desc:'Photography and cinema shaped together for couples who want their wedding remembered in both stills and movement.',
    items:['Traditional + candid photography','Cinematic wedding film','Wedding teaser / highlight','Curated edited photographs','Premium album consultation'],
  },
  {
    name:'Royal',
    kicker:'FULL WEDDING EXPERIENCE',
    desc:'A custom multi-event experience for larger celebrations, destination weddings and families wanting complete coverage.',
    items:['Multi-event photography team','Cinematic film team','Pre-wedding session','Premium album options','Frames & fine-art print consultation'],
  }
];

const faqs = [
 ['How early should we book?','For popular wedding dates, booking several months ahead is recommended. Once your date and event details are confirmed, contact us and we will check availability.'],
 ['Do you travel for weddings?','Yes. Sri Rajan Photography can discuss outstation and destination wedding coverage based on your event location, schedule and requirements.'],
 ['Can we customise our package?','Absolutely. Every wedding is different, so the packages are starting points. Coverage, films, albums, frames and additional events can be tailored to your celebration.'],
 ['When will our photographs be delivered?','Delivery timelines depend on the scale of the wedding and selected deliverables. Your estimated photography, film and album timelines will be shared when your package is finalised.'],
 ['Do you provide wedding films and reels?','Yes. Cinematic wedding films, highlights, teasers and social-friendly edits can be included based on the package you choose.'],
 ['Can albums and frames be customised?','Yes. Album size, cover style, page count and selected frame/print formats can be discussed after your final image selection.'],
 ['Do you offer pre-wedding shoots?','Yes. We offer concept-led pre-wedding photography and can plan the visual direction around your style, location and story.'],
 ['How do we reserve our wedding date?','Send us your date, location and event details through the enquiry page or WhatsApp. We will confirm availability and guide you through the booking process.'],
];

export default function Packages(){
 return <SiteChrome>
   <main>
    <section className="inner-hero pass8-package-hero">
      <StockPhoto src="/hero-wedding-local.jpg" className="inner-hero-media pass9-package-local-hero" position="center 44%"/>
      <div className="inner-hero-shade"/>
      <div className="inner-hero-copy"><p className="eyebrow">WEDDING COLLECTIONS</p><h1>Choose the story<br/><em>you want to keep.</em></h1><p>Thoughtful starting points, customised around your events, people and priorities.</p></div>
    </section>

    <section className="pass8-packages">
      <div className="section-heading"><div><p className="eyebrow">PACKAGES</p><h2>Built around your celebration.</h2></div><p>We prefer creating the right coverage over forcing every wedding into the same box. Choose a starting collection and we’ll customise it with you.</p></div>
      <div className="package-grid">
       {packages.map(p=><article key={p.name} className={`package-card ${p.featured?'package-card--featured':''}`}>
        {p.featured&&<span className="package-badge">SIGNATURE CHOICE</span>}
        <p className="eyebrow">{p.kicker}</p><h3>{p.name}</h3><p className="package-desc">{p.desc}</p>
        <ul>{p.items.map(i=><li key={i}>{i}</li>)}</ul>
        <Link href="/contact" className={p.featured?'button button--dark':'text-link'}>Get custom quote <Arrow/></Link>
       </article>)}
      </div>
      <p className="package-note">Final pricing depends on dates, number of events, locations, team requirements and selected deliverables.</p>
    </section>

    <section className="pass8-testimonials">
      <p className="eyebrow">WORDS FROM OUR COUPLES</p>
      <blockquote>“The photographs should bring you back to how the day felt — not simply show you how it looked.”</blockquote>
      <p className="testimonial-demo">Client testimonials will be replaced with verified Sri Rajan Photography reviews before launch.</p>
    </section>

    <section className="pass8-faq" id="faq">
      <div className="section-heading"><div><p className="eyebrow">BEFORE YOU BOOK</p><h2>Frequently asked questions.</h2></div><p>Everything you need to know before starting the conversation.</p></div>
      <div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
    </section>

    <section className="closing-cta pass9-planning-cta">
      <div className="planning-cta-inner">
        <p className="eyebrow">YOUR DATE · YOUR STORY</p>
        <h2>Tell us what you’re<br/><em>planning.</em></h2>
        <p>Share your wedding date, location and celebrations. We’ll help you shape the right photography and film experience.</p>
        <div className="planning-cta-actions">
          <Link href="/contact" className="button button--light">Check availability <Arrow/></Link>
          <a className="planning-whatsapp" href="https://wa.me/917010701473?text=Hello%20Sri%20Rajan%20Photography%2C%20I%20would%20like%20to%20enquire%20about%20my%20wedding." target="_blank" rel="noreferrer">WhatsApp us <Arrow/></a>
        </div>
      </div>
    </section>
   </main>
 </SiteChrome>
}