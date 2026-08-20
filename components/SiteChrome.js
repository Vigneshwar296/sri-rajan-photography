'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';
import LoadingScreen from './LoadingScreen';

const PHONE_RAW='917010701473';
const PHONE_DISPLAY='+91 70107 01473';
const EMAIL='rajanst67@gmail.com';
export function Arrow(){ return <span aria-hidden="true">↗</span>; }
export function WhatsAppIcon(){ return <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.04 3C8.86 3 3.02 8.75 3.02 15.82c0 2.26.6 4.47 1.74 6.41L3 28.67l6.65-1.72a13.1 13.1 0 0 0 6.38 1.64h.01c7.18 0 13.02-5.75 13.02-12.82C29.06 8.75 23.22 3 16.04 3Zm0 23.42h-.01a10.9 10.9 0 0 1-5.55-1.5l-.4-.23-3.95 1.02 1.05-3.8-.26-.39a10.55 10.55 0 0 1-1.7-5.7c0-5.87 4.85-10.65 10.82-10.65 5.96 0 10.81 4.78 10.81 10.65 0 5.87-4.85 10.6-10.81 10.6Zm5.93-7.96c-.32-.16-1.92-.93-2.22-1.04-.3-.1-.51-.16-.73.16-.22.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.33-.16-1.38-.5-2.62-1.58-.97-.85-1.62-1.9-1.81-2.22-.19-.32-.02-.49.14-.65.15-.14.33-.37.49-.56.16-.19.22-.32.32-.53.11-.21.06-.4-.02-.56-.08-.16-.73-1.73-1-2.37-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.1-1.14 2.68 0 1.57 1.17 3.1 1.33 3.31.16.21 2.3 3.46 5.58 4.85.78.33 1.39.53 1.86.68.78.24 1.49.21 2.05.13.63-.09 1.92-.77 2.19-1.51.27-.74.27-1.37.19-1.51-.08-.13-.3-.21-.62-.37Z"/></svg>; }

export default function SiteChrome({children, dark=false}){
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{ const fn=()=>setScrolled(window.scrollY>30); fn(); addEventListener('scroll',fn,{passive:true}); return()=>removeEventListener('scroll',fn);},[]);
  useEffect(()=>{document.body.style.overflow=menuOpen?'hidden':'';return()=>{document.body.style.overflow=''}},[menuOpen]);
  return <>
    <LoadingScreen/>
    <header className={`nav ${scrolled?'nav--scrolled':''} ${dark?'nav--dark':''}`}>
      <Link href="/" className="brand" aria-label="Sri Rajan Photography home"><BrandLogo/></Link>
      <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/albums">Albums & Frames</Link><Link href="/packages">Packages</Link><Link href="/about">About</Link></nav>
      <Link className="availability desktop-cta" href="/contact">Check availability <Arrow/></Link>
      <button className={`menu-button ${menuOpen?'menu-button--open':''}`} onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span/><span/></button>
    </header>
    <div className={`mobile-menu ${menuOpen?'mobile-menu--open':''}`}>
      <div className="mobile-menu-brand"><BrandLogo/></div>
      {[['Portfolio','/portfolio'],['Services','/services'],['Albums & Frames','/albums'],['Packages','/packages'],['About','/about'],['Contact','/contact']].map(([label,href])=><Link key={label} href={href} onClick={()=>setMenuOpen(false)}>{label}</Link>)}
      <a className="availability" href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer">WhatsApp us <Arrow/></a>
    </div>
    {children}
    <footer><div className="footer-brand"><BrandLogo/></div><div className="footer-links"><div><span>EXPLORE</span><Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/albums">Albums & Frames</Link><Link href="/packages">Packages</Link><Link href="/about">About</Link></div><div><span>CONNECT</span><a href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer">WhatsApp</a><a href={`tel:+${PHONE_RAW}`}>{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div><div><span>ENQUIRIES</span><Link href="/contact">Book your date</Link><a href={`mailto:${EMAIL}`}>Email the studio</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div><div className="footer-bottom"><span>© 2026 SRI RAJAN PHOTOGRAPHY</span><span>PHOTOGRAPHY · FILMS · ALBUMS · FRAMES</span></div></footer>
    <a className="floating-whatsapp" href={`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent('Hello Sri Rajan Photography, I would like to enquire about photography services.')}`} target="_blank" rel="noreferrer" aria-label="Open WhatsApp enquiry"><WhatsAppIcon/></a>
  </>;
}
