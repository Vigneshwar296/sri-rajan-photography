'use client';
import {useEffect,useState} from 'react';
import StockPhoto from './StockPhoto';
import {galleryImages} from '../lib/stockImages';
const items=[
 ['PORTRAIT','tall'],['CEREMONY',''],['DETAIL',''],['CELEBRATION WIDE','wide'],['FAMILY',''],['COUPLE','tall']
];
export default function LightboxGallery(){const [open,setOpen]=useState(null);useEffect(()=>{const fn=e=>e.key==='Escape'&&setOpen(null);addEventListener('keydown',fn);return()=>removeEventListener('keydown',fn)},[]);return <>
 <section className="editorial-gallery">{items.map(([label,size],i)=><button type="button" className={`gallery-tile ${size}`} key={label} onClick={()=>setOpen(i)}><StockPhoto src={galleryImages[i]} className="gallery-photo"><span className="gallery-label">{label}</span><span className="gallery-plus">+</span></StockPhoto></button>)}</section>
 {open!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery preview" onClick={()=>setOpen(null)}><button className="lightbox-close" onClick={()=>setOpen(null)}>CLOSE ×</button><button className="lightbox-nav lightbox-prev" onClick={e=>{e.stopPropagation();setOpen((open-1+items.length)%items.length)}}>←</button><StockPhoto src={galleryImages[open]} className="lightbox-image"/><button className="lightbox-nav lightbox-next" onClick={e=>{e.stopPropagation();setOpen((open+1)%items.length)}}>→</button></div>}
 </>}
