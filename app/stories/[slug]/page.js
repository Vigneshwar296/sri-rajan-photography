import Link from 'next/link';
import SiteChrome, {Arrow} from '../../../components/SiteChrome';
import LightboxGallery from '../../../components/LightboxGallery';
import Reveal from '../../../components/Reveal';
import StockPhoto from '../../../components/StockPhoto';
import {portfolioImages, stock} from '../../../lib/stockImages';
const names={
 'arjun-meera':['Arjun & Meera','Chennai · Tamil Nadu','A celebration written in light.',0],
 'vishnu-kaviya':['Vishnu & Kaviya','Madurai · Tamil Nadu','Tradition, laughter and a thousand little glances.',1],
 'adithya-nila':['Adithya & Nila','Bengaluru · Karnataka','The quiet before forever.',2],
 'rahul-ananya':['Rahul & Ananya','Coimbatore · Tamil Nadu','Where two families became one.',3],
 'karthik-priya':['Karthik & Priya','Pondicherry · India','Salt air, warm light and a story in motion.',4],
 'vikram-shreya':['Vikram & Shreya','Salem · Tamil Nadu','An evening full of colour and anticipation.',5]
};
export default async function Story({params}){const {slug}=await params; const d=names[slug]||['A Wedding Story','Tamil Nadu · India','A celebration worth remembering.',0];return <SiteChrome dark><main className="story-page dark-page"><section className="story-hero"><StockPhoto src={portfolioImages[d[3] % portfolioImages.length]} className="story-hero-photo"/><div className="story-hero-shade"/><div className="story-title"><p className="eyebrow">WEDDING STORY</p><h1>{d[0]}</h1><p>{d[1]}</p></div><span className="story-scroll">SCROLL TO ENTER ↓</span></section><section className="story-opening"><p className="eyebrow">THE STORY</p><Reveal><h2>{d[2]}</h2></Reveal><p>This editorial story layout is already populated with stock imagery so you can experience the finished visual flow. Later, the stock files can be swapped one-for-one with the couple’s real photographs and film.</p></section><LightboxGallery/><section className="film-block"><Reveal><p className="eyebrow">THE FILM</p><StockPhoto src={stock.film} className="showreel-media film-cover"><button className="play-button">▶</button></StockPhoto></Reveal></section><section className="story-next"><Reveal><p>READY TO TELL YOURS?</p><h2>Your story could<br/>live here next.</h2><Link href="/contact" className="button button--light">Check availability</Link><Link href="/portfolio" className="text-link">Back to portfolio <Arrow/></Link></Reveal></section></main></SiteChrome>}
