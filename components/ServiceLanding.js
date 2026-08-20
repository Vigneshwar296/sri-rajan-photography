import Link from 'next/link';
import SiteChrome, {Arrow} from './SiteChrome';
import StockPhoto from './StockPhoto';

export default function ServiceLanding({eyebrow,title,italic,intro,hero,sections,gallery,quote}){
  return <SiteChrome>
    <main className="inner-page premium-service-page">
      <section className="service-landing-hero">
        <StockPhoto src={hero} className="service-landing-photo" position="center 35%"/>
        <div className="service-landing-overlay"/>
        <div className="service-landing-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}<br/><em>{italic}</em></h1>
          <p>{intro}</p>
          <Link href="/contact" className="button button--light">Check availability <Arrow/></Link>
        </div>
      </section>

      <section className="service-intro-grid">
        <p className="eyebrow">OUR APPROACH</p>
        <h2>Beautiful without becoming staged. Refined without losing what was real.</h2>
        <p>We build every assignment around people first. The visual style is polished, but the emotion, atmosphere and relationships always stay at the centre of the work.</p>
      </section>

      <section className="service-feature-stack">
        {sections.map((item,index)=><article className={`service-feature ${index%2?'service-feature--reverse':''}`} key={item.title}>
          <StockPhoto src={item.image} className="service-feature-image" position={item.position || 'center'}/>
          <div className="service-feature-copy"><span>0{index+1}</span><p className="eyebrow">{item.kicker}</p><h2>{item.title}</h2><p>{item.copy}</p></div>
        </article>)}
      </section>

      <section className="service-mosaic section-dark">
        <div className="section-heading light-heading"><div><p className="eyebrow">SELECTED FRAMES</p><h2>Moments with room to breathe.</h2></div></div>
        <div className="mosaic-grid">
          {gallery.map((image,index)=><StockPhoto key={image+index} src={image} className={`mosaic-photo mosaic-photo--${index+1}`}/>) }
        </div>
      </section>

      <section className="service-quote"><p className="eyebrow">THE FEELING</p><blockquote>{quote}</blockquote><Link href="/contact" className="button button--dark">Tell us about your date <Arrow/></Link></section>
    </main>
  </SiteChrome>
}
