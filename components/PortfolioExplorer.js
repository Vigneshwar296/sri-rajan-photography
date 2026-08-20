'use client';
import {useMemo,useState} from 'react';
import Link from 'next/link';
import {Arrow} from './SiteChrome';
import StockPhoto from './StockPhoto';
import {portfolioImages} from '../lib/stockImages';
const projects=[
 {slug:'arjun-meera',cat:'WEDDINGS',label:'WEDDING',title:'Arjun & Meera',place:'Chennai · Tamil Nadu',size:'wide'},
 {slug:'vishnu-kaviya',cat:'WEDDINGS',label:'WEDDING',title:'Vishnu & Kaviya',place:'Madurai · Tamil Nadu'},
 {slug:'adithya-nila',cat:'PRE-WEDDINGS',label:'PRE-WEDDING',title:'Adithya & Nila',place:'Bengaluru · Karnataka'},
 {slug:'rahul-ananya',cat:'PORTRAITS',label:'CELEBRATION',title:'Rahul & Ananya',place:'Coimbatore · Tamil Nadu'},
 {slug:'karthik-priya',cat:'FILMS',label:'WEDDING FILM',title:'Karthik & Priya',place:'Pondicherry · India',size:'wide'},
 {slug:'vikram-shreya',cat:'PORTRAITS',label:'ENGAGEMENT',title:'Vikram & Shreya',place:'Salem · Tamil Nadu'},
];
const filters=['ALL STORIES','WEDDINGS','PRE-WEDDINGS','FILMS','PORTRAITS'];
export default function PortfolioExplorer(){const [active,setActive]=useState('ALL STORIES');const shown=useMemo(()=>active==='ALL STORIES'?projects:projects.filter(p=>p.cat===active),[active]);return <>
 <div className="filter-row">{filters.map(f=><button key={f} className={active===f?'active':''} onClick={()=>setActive(f)}>{f}</button>)}</div>
 <section className="portfolio-grid">{shown.map((p,i)=><Link href={`/stories/${p.slug}`} className={`portfolio-card ${p.size==='wide'?'portfolio-card--wide':''}`} key={p.slug}><StockPhoto src={portfolioImages[projects.indexOf(p)%portfolioImages.length]} className="portfolio-image"><span className="media-index">0{projects.indexOf(p)+1}</span><span className="card-view">VIEW STORY ↗</span></StockPhoto><div className="portfolio-meta"><div><span>{p.label}</span><h2>{p.title}</h2><p>{p.place}</p></div><b><Arrow/></b></div></Link>)}</section>
 </>}
