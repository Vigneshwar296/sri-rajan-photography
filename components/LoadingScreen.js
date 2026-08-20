'use client';
import {useEffect,useState} from 'react';
import BrandLogo from './BrandLogo';

export default function LoadingScreen(){
  const [show,setShow]=useState(true);
  useEffect(()=>{const t=setTimeout(()=>setShow(false),1050);return()=>clearTimeout(t)},[]);
  return <div className={`loading-screen ${show?'':'loading-screen--hide'}`} aria-hidden={!show}>
    <div className="loading-inner"><BrandLogo/><div className="loading-line"><span/></div><small>CRAFTING MEMORIES</small></div>
  </div>;
}
