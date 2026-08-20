'use client';
import {useMemo, useState} from 'react';
import SiteChrome from '../../components/SiteChrome';
import StockPhoto from '../../components/StockPhoto';
import {stock} from '../../lib/stockImages';

const PHONE_DISPLAY = '+91 70107 01473';
const PHONE_RAW = '917010701473';
const EMAIL = 'rajanst67@gmail.com';

export default function Contact(){
  const [form,setForm]=useState({name:'',phone:'',email:'',event:'',date:'',location:'',services:'',message:''});
  const update=(key)=>(e)=>setForm(v=>({...v,[key]:e.target.value}));
  const whatsappText=useMemo(()=>encodeURIComponent(
`Hello Sri Rajan Photography, I would like to enquire about a shoot.

Name: ${form.name || '-'}
Phone: ${form.phone || '-'}
Email: ${form.email || '-'}
Event: ${form.event || '-'}
Date: ${form.date || '-'}
Location: ${form.location || '-'}
Services: ${form.services || '-'}

Message: ${form.message || '-'}`),[form]);
  const whatsappUrl=`https://wa.me/${PHONE_RAW}?text=${whatsappText}`;
  const mailUrl=`mailto:${EMAIL}?subject=${encodeURIComponent('Photography enquiry — '+(form.name||'Website visitor'))}&body=${whatsappText}`;
  const canSend=form.name.trim() && form.phone.trim();
  return <SiteChrome><main className="inner-page">
    <section className="contact-visual"><StockPhoto src={stock.romantic} className="contact-visual-photo"><div className="contact-visual-shade"/><div><p className="eyebrow">LET'S CREATE SOMETHING TIMELESS</p><h2>Your date.<br/>Your people.<br/><em>Your story.</em></h2></div></StockPhoto></section>
    <section className="contact-page"><div className="contact-intro"><p className="eyebrow">BOOK YOUR DATE</p><h1>Tell us what<br/><em>you’re planning.</em></h1><p>Share a few details and continue directly on WhatsApp. You can also call or email the studio anytime.</p><div className="contact-details"><span>CALL / WHATSAPP</span><a href="tel:+917010701473">{PHONE_DISPLAY}</a><span>EMAIL</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a><div className="quick-contact"><a className="button button--dark" href={`https://wa.me/${PHONE_RAW}`} target="_blank" rel="noreferrer">Open WhatsApp ↗</a><a className="text-link dark-link" href="tel:+917010701473">Call studio ↗</a></div></div></div>
    <form className="enquiry-form" onSubmit={e=>{e.preventDefault(); if(canSend) window.open(whatsappUrl,'_blank','noopener,noreferrer')}}>
      <label>Your name<input required value={form.name} onChange={update('name')} placeholder="Name"/></label>
      <div className="form-pair"><label>Phone<input required value={form.phone} onChange={update('phone')} inputMode="tel" placeholder="+91"/></label><label>Email<input type="email" value={form.email} onChange={update('email')} placeholder="Email"/></label></div>
      <div className="form-pair"><label>Event type<select value={form.event} onChange={update('event')}><option value="">Select</option><option>Wedding</option><option>Pre-Wedding</option><option>Engagement</option><option>Reception</option><option>Baby / Maternity</option><option>Portrait / Family</option><option>Corporate / Product</option><option>Other</option></select></label><label>Event date<input type="date" value={form.date} onChange={update('date')}/></label></div>
      <label>Location<input value={form.location} onChange={update('location')} placeholder="City / Venue"/></label>
      <label>Services required<input value={form.services} onChange={update('services')} placeholder="Photography, film, album, frames..."/></label>
      <label>Tell us about your event<textarea rows="5" value={form.message} onChange={update('message')} placeholder="A few details about what you're planning"/></label>
      <div className="form-actions"><button className="button button--dark" type="submit">Send on WhatsApp ↗</button><a className="button button--outline-dark" href={mailUrl}>Send by email</a></div><p className="form-helper">Submitting on WhatsApp opens a pre-filled message to {PHONE_DISPLAY}. Nothing is sent until you press Send in WhatsApp.</p>
    </form></section></main></SiteChrome>
}
