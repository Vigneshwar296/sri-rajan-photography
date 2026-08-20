import Link from 'next/link';
import SiteChrome from '../../components/SiteChrome';
import PortfolioExplorer from '../../components/PortfolioExplorer';
import Reveal from '../../components/Reveal';
export default function Portfolio(){return <SiteChrome dark><main className="inner-page dark-page"><section className="page-hero"><Reveal><p className="eyebrow">SELECTED WORK</p><h1>Stories we were<br/><em>trusted to keep.</em></h1><p>Weddings, portraits, films and celebrations documented with an editorial eye and an instinct for the moments that cannot be repeated.</p></Reveal></section><PortfolioExplorer/><section className="big-cta"><Reveal><p className="eyebrow">YOUR STORY NEXT?</p><h2>Let us make something<br/>worth returning to.</h2><Link href="/contact" className="button button--light">Check your date</Link></Reveal></section></main></SiteChrome>}
