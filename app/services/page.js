import Link from 'next/link';
import SiteChrome, {Arrow} from '../../components/SiteChrome';
import StockPhoto from '../../components/StockPhoto';
import {stock} from '../../lib/stockImages';
const services=[
 ['01','Wedding Photography','Candid + Traditional','Complete wedding-day coverage with candid storytelling, family portraits, rituals and timeless editorial frames.',stock.ceremony],
 ['02','Cinematic Wedding Films','Films + Teasers + Reels','Emotion-led films with vows, ambience, movement and music shaped into a cinematic memory.',stock.film],
 ['03','Pre-Wedding Stories','Outdoor + Studio + Destination','Conceptual couple sessions that feel natural, stylish and unmistakably personal.',stock.couple],
 ['04','Portraits & Celebrations','Maternity + Baby + Family + Events','Thoughtfully lit portraiture and event coverage for every milestone beyond the wedding.',stock.family],
 ['05','Commercial Photography','Product + Corporate + Fashion','Clean, brand-ready visuals for products, teams, campaigns, spaces and editorial requirements.',stock.product],
 ['06','Albums & Wall Art','Design + Print + Frames','Story-driven album layouts, premium print finishes and custom wall pieces made to last.',stock.wall],
];
export default function Services(){return <SiteChrome><main className="inner-page"><section className="page-hero light-page-hero"><p className="eyebrow">SERVICES</p><h1>One studio.<br/><em>Every chapter.</em></h1><p>From the first celebration to the final album, Sri Rajan Photography brings photography, films and print together as one considered experience.</p></section><section className="service-cards">{services.map(([n,title,kicker,copy,image])=><article key={title}><span>{n}</span><div><small>{kicker}</small><h2>{title}</h2><p>{copy}</p><Link href="/contact" className="text-link dark-link">Enquire about this service <Arrow/></Link></div><StockPhoto src={image} className="service-art"/></article>)}</section><section className="process-band section-dark"><p className="eyebrow">HOW WE WORK</p><div className="process-grid">{[['01','Listen','We understand the people, place, priorities and pace of your event.'],['02','Shape','We build the right coverage plan, team and visual direction.'],['03','Capture','We document naturally while stepping in only when direction adds value.'],['04','Craft','Every image, film, album and frame is refined as one visual story.']].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section></main></SiteChrome>}
